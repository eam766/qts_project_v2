import { FaSearch } from "react-icons/fa";
import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import IconButton from "@mui/material/IconButton";
import "./SearchBar.css";

export default function SearchBar({}) {
    const [value, setValue] = useState("");
    const [games, setGames] = useState([]); // Stocke les jeux récupérés
    const [filteredGames, setFilteredGames] = useState([]); // Stocke les jeux filtrés
    useEffect(() => {
        fetch("/games-data")
            .then((res) => res.json())
            .then((data) => {
                setGames(data);
                setFilteredGames(data);
            })
            .catch((err) => console.error("Erreur :", err));
    }, []);
    const search = (event) => {
        setTimeout(() => {
            let _filteredGames;

            if (!event.query.trim().length) {
                _filteredGames = [...games];
            } else {
                _filteredGames = games.filter((game) => {
                    return game.name
                        .toLowerCase()
                        .includes(event.query.toLowerCase());
                });
            }

            setFilteredGames(_filteredGames.slice(0, 30));
        }, 250);
    };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     router.get(
    //         route("games.search"),
    //         { search: value },
    //         { preserveState: true }
    //     );
    //
    // };
    const handleSearch = (e) => {
        e.preventDefault();

        if (typeof value === "object" && value !== null && value.game_id) {
            router.get(route("games.show", value.game_id));
            setValue("");
        } else if (typeof value === "string" && value.trim() !== "") {
            router.get(
                route("games.search"),
                { search: value },
                { preserveState: true },
            );
            setValue("");
        } else {
            router.get(route("games.index"));
            setValue("");
        }
        setFilteredGames([]);
    };
    // Gérer la sélection d'un item dans la liste
    const handleSelect = (e) => {
        if (e.value?.game_id) {
            router.get(route("games.show", e.value.game_id));
        }
        setValue("");
        setFilteredGames([]);
    };

    // Plus de <Link> ici — la navigation est gérée par onSelect
    const itemTemplate = (item) => {
        return (
            <div className="game-suggestions">
                <img
                    src={`https://images.igdb.com/igdb/image/upload/t_cover_small/${item.cover_image_id}.jpg`}
                    style={{ width: 40, height: "auto", marginRight: 20 }}
                    alt={item.cover_image_id}
                />
                {item.name}
            </div>
        );
    };

    return (
        <form onSubmit={handleSearch} className="search-form">
            <AutoComplete
                value={value}
                suggestions={filteredGames}
                completeMethod={search}
                onChange={(e) => setValue(e.value)}
                onSelect={handleSelect}
                placeholder="Recherche"
                itemTemplate={itemTemplate}
                field="name"
            />
            <IconButton
                color="primary"
                onClick={handleSearch}
                disableRipple={true}
                className="search-icon-btn"
            >
                <FaSearch style={{ color: "#02d7f2", fontSize: "20px" }} />
            </IconButton>
        </form>
    );
}
