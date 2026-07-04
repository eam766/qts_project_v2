import "./Bouton.css";
import { LuHeart } from "react-icons/lu";

export default function BoutonListe({ inWishlist, wishlistLoading, onPress }) {
    return (
        <button
            className={`AudioWideBlue text-xl mt-2 buttonAdd ${
                wishlistLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onPress}
            disabled={wishlistLoading}
        >
            <LuHeart
                className={`buttonAddIcon mr-4 ${inWishlist ? "inListIcon" : ""}`}
            />
            <span>
                {wishlistLoading
                    ? inWishlist
                        ? "Retrait en cours..."
                        : "Ajout en cours..."
                    : inWishlist
                      ? "Dans la liste de souhaits"
                      : "Ajouter à la liste de souhaits"}
            </span>
        </button>
    );
}
