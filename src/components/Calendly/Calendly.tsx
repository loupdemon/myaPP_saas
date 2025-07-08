"use client"; // Ajoutez cette ligne en haut du fichier

import React, { useEffect } from "react";

const CalendlyWidget: React.FC = () => {
    useEffect(() => {
        // Charger le script Calendly
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        // Nettoyage du script lors du démontage du composant
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/aghilas/30min"
            style={{ minWidth: "100%", height: "700px" }}
        />
    );
};

export default CalendlyWidget;
