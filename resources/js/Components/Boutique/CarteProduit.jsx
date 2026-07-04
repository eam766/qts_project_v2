import React from "react";
import { Link } from "@inertiajs/react";
import JeuxBordure from "@/Components/JeuxVideo/JeuxBordure";

let colors = [
    "#8A2BE2",
    "#FF007F",
    " #FF00FF",
    "#FF4632",
    "#81EC86",
    "#3C3CE8",
    "#FD0130",
    "#00FFB2",
];
export default function CarteProduit({ index, game }) {
    const color = colors[index % colors.length];
    return (
        <div style={{ width: 220, height: 320 }}>
            <JeuxBordure color={color}>
                <Link href={`/jeux/${game.game_id}`}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "8px",
                            boxSizing: "border-box",
                        }}
                    >
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover_image_id}.jpg`}
                            alt={game.name}
                            style={{
                                width: "90%",
                                aspectRatio: 3 / 4,
                                alignSelf: "center",
                                marginBottom: "8px",
                            }}
                        />
                        <h1
                            className="text-xl font-bold"
                            style={{
                                color: color,
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                minHeight: "3.2rem",
                            }}
                        >
                            {game.name}
                        </h1>
                        <p
                            className="text-lg font-semibold"
                            style={{ color: "white", textAlign: "left" }}
                        >
                            C$ {game.price}
                        </p>
                    </div>
                </Link>
            </JeuxBordure>
        </div>
    );
}
