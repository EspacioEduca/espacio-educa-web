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
                    primary: '#494b9a',    // Azul Púrpura (Principal) 
                    dark: '#16006D',       // Azul Oscuro (Fondos) 
                    accent: '#E95734',     // Naranja (Acción/Botones) 
                    white: '#FFFFFF',      // Blanco 
                    black: '#000000',      // 
                }
            },
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
                sans: ['Helvetica', 'Arial', 'sans-serif'],
            }
        },
    },
    plugins: [],
}