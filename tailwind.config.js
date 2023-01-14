const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Times"]
            },
            colors: {
                primary: {
                    DEFAULT: '#2876d3',
                    ...colors.blue
                },
                dark: {
                    DEFAULT: '#131417',
                    ...colors.blue
                }
            },
        },
        borderColor: '#000',
    },
    plugins: [require("@headlessui/tailwindcss")],
};