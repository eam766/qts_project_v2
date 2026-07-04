import React, { useEffect, useState } from "react";
import Select from "react-select";
import BgInput from "../assets/img/ConnexionInput.png";

const countries = [
    { value: "AF", label: "Afghanistan" },
    { value: "ZA", label: "Afrique du Sud" },
    { value: "AL", label: "Albanie" },
    { value: "DZ", label: "Algérie" },
    { value: "DE", label: "Allemagne" },
    { value: "AD", label: "Andorre" },
    { value: "AO", label: "Angola" },
    { value: "AR", label: "Argentine" },
    { value: "AM", label: "Arménie" },
    { value: "AU", label: "Australie" },
    { value: "AT", label: "Autriche" },
    { value: "AZ", label: "Azerbaïdjan" },
    { value: "BE", label: "Belgique" },
    { value: "BR", label: "Brésil" },
    { value: "CA", label: "Canada" },
    { value: "CL", label: "Chili" },
    { value: "CN", label: "Chine" },
    { value: "CO", label: "Colombie" },
    { value: "KR", label: "Corée du Sud" },
    { value: "CR", label: "Costa Rica" },
    { value: "HR", label: "Croatie" },
    { value: "DK", label: "Danemark" },
    { value: "EG", label: "Égypte" },
    { value: "AE", label: "Émirats arabes unis" },
    { value: "ES", label: "Espagne" },
    { value: "EE", label: "Estonie" },
    { value: "US", label: "États-Unis" },
    { value: "FI", label: "Finlande" },
    { value: "FR", label: "France" },
    { value: "GE", label: "Géorgie" },
    { value: "GH", label: "Ghana" },
    { value: "GR", label: "Grèce" },
    { value: "HU", label: "Hongrie" },
    { value: "IN", label: "Inde" },
    { value: "ID", label: "Indonésie" },
    { value: "IE", label: "Irlande" },
    { value: "IS", label: "Islande" },
    { value: "IL", label: "Israël" },
    { value: "IT", label: "Italie" },
    { value: "JP", label: "Japon" },
    { value: "JO", label: "Jordanie" },
    { value: "KZ", label: "Kazakhstan" },
    { value: "KE", label: "Kenya" },
    { value: "LV", label: "Lettonie" },
    { value: "LB", label: "Liban" },
    { value: "LT", label: "Lituanie" },
    { value: "LU", label: "Luxembourg" },
    { value: "MK", label: "Macédoine du Nord" },
    { value: "MY", label: "Malaisie" },
    { value: "MA", label: "Maroc" },
    { value: "MX", label: "Mexique" },
    { value: "MD", label: "Moldavie" },
    { value: "MC", label: "Monaco" },
    { value: "MN", label: "Mongolie" },
    { value: "NO", label: "Norvège" },
    { value: "NZ", label: "Nouvelle-Zélande" },
    { value: "NG", label: "Nigéria" },
    { value: "PK", label: "Pakistan" },
    { value: "PA", label: "Panama" },
    { value: "PY", label: "Paraguay" },
    { value: "NL", label: "Pays-Bas" },
    { value: "PE", label: "Pérou" },
    { value: "PH", label: "Philippines" },
    { value: "PL", label: "Pologne" },
    { value: "PT", label: "Portugal" },
    { value: "QA", label: "Qatar" },
    { value: "RO", label: "Roumanie" },
    { value: "GB", label: "Royaume-Uni" },
    { value: "RU", label: "Russie" },
    { value: "SA", label: "Arabie saoudite" },
    { value: "SN", label: "Sénégal" },
    { value: "RS", label: "Serbie" },
    { value: "SG", label: "Singapour" },
    { value: "SK", label: "Slovaquie" },
    { value: "SI", label: "Slovénie" },
    { value: "SE", label: "Suède" },
    { value: "CH", label: "Suisse" },
    { value: "TW", label: "Taïwan" },
    { value: "TZ", label: "Tanzanie" },
    { value: "TH", label: "Thaïlande" },
    { value: "TN", label: "Tunisie" },
    { value: "TR", label: "Turquie" },
    { value: "UA", label: "Ukraine" },
    { value: "UY", label: "Uruguay" },
    { value: "VE", label: "Venezuela" },
    { value: "VN", label: "Viêt Nam" },
].sort((a, b) => a.label.localeCompare(b.label));

export default function CountrySelect({ value, onChange }) {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundImage: `url(${BgInput})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            fontFamily: "Orbitron",
            border: "none",
            height: "40px",
            width: "360px",
            color: "white",
            backgroundColor: "transparent",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "white",
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#222",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#02d7f2" : "transparent",
            color: "white",
            cursor: "pointer",
        }),
    };

    return (
        <Select
            placeholder="Sélectionnez un pays"
            styles={customStyles}
            options={countries}
            value={countries.find((option) => option.value === value) || null}
            onChange={(selectedOption) =>
                onChange(selectedOption ? selectedOption.value : "")
            }
        />
    );
}
