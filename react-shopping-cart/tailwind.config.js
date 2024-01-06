/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            dropShadow: {
                'nav': '0 2px 15px rgba(0, 0, 0, 0.5)'
            },
            colors:{
                'theme-color': "#121729"
            },
            fontFamily:{
                montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans]
            }
        },
    },
    plugins: [],
}

