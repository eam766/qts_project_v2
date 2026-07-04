import { FaCartArrowDown } from "react-icons/fa";
import "./Bouton.css";

export default function BoutonAjouter({ inCart, cartLoading, onPress }) {
    return (
        <button
            className={`AudioWideBlue buttonAdd text-xl ${
                cartLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={onPress}
            disabled={cartLoading}
        >
            <FaCartArrowDown
                className={`buttonAddIcon mr-4 ${inCart ? "inCartIcon" : ""}`}
            />

            <span>
                {cartLoading
                    ? inCart
                        ? "Retrait en cours..."
                        : "Ajout en cours..."
                    : inCart
                      ? "Dans votre panier"
                      : "Ajouter au panier"}
            </span>
        </button>
    );
}
