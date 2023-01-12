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
    },
    plugins: [require("@headlessui/tailwindcss")],
};