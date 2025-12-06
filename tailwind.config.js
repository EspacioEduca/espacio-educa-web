/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#3843D0',    // Azul Púrpura (Principal) 
                    dark: '#16006D',       // Azul Oscuro (Fondos) 
                    accent: '#F8623F',     // Naranja (Acción/Botones) 
                    white: '#FFFFFF',      // Blanco 
                    black: '#000000',      // Negro [cite: 46]
                }
            },
            fontFamily: {
                // Asegúrate de importar la fuente "Space Mono" o similar de Google Fonts en tu CSS
                // para simular la "Disket Mono" si no tienes el archivo webfont.
                mono: ['"Space Mono"', 'monospace'],
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
}