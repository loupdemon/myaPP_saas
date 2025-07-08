/** @type {import('next').NextConfig} */
const nextConfig = {
    // Activer l'exportation statique
    exportTrailingSlash: true, // Ajoute un / à la fin des URLs
    distDir: "build", // Choisit un dossier de sortie personnalisé (ici 'build')
    // Si vous avez d'autres configurations, vous pouvez les ajouter ici.
};

export default nextConfig;
