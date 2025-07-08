import React from "react";
import Image from "next/image";
const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">
                Used by <span className="text-secondary">+200</span> clients
                worldwide
            </p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                {/* ELMESMAR */}
                <Image
                    src="/images/elmesmar.png"
                    alt="Notion Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
                {/* ELANPRO */}
                <Image
                    src="/images/elanpro.svg"
                    alt="Slack Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
                {/* ESPOIR */}
                <Image
                    src="/images/espoir.png"
                    alt="Discord Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
                {/* KNOD */}
                <Image
                    src="/images/knod_logo.png"
                    alt="Knod Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
                {/* Trojan Horse */}
                <Image
                    src="/images/trojanhorse.png"
                    alt="Trojan Horse Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
                {/*  Green Alsace Air */}
                <Image
                    src="/images/greenairalsace.png"
                    alt="Green Alsace Air Logo"
                    width={100}
                    height={100}
                    className="filter grayscale"
                />
            </div>
        </section>
    );
};

export default Logos;
