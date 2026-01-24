// Esta función ayuda a resolver las rutas de las imágenes
// tanto en desarrollo como en producción (GitHub Pages)

export const getAssetUrl = (path) => {
    // 1. Si la ruta ya es una URL completa (http...), la devolvemos tal cual
    if (path.startsWith('http')) {
        return path;
    }

    // 2. Si es una ruta local, aseguramos que empiece con /
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    // 3. Obtenemos la base URL definida en vite.config.js ('/espacio-educa-web/')
    const baseUrl = import.meta.env.BASE_URL;

    // 4. Si la base es '/', simplemente devolvemos la ruta limpia
    if (baseUrl === '/') {
        return cleanPath;
    }

    // 5. Si estamos en producción, combinamos base + path (quitando la barra doble si ocurre)
    // slice(0, -1) quita el slash final de la base para evitar //logos...
    return `${baseUrl.slice(0, -1)}${cleanPath}`;
};