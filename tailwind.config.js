/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                'wide': {
                    'raw': '(min-width: 820px)'
                }
            }
        }
    },
    plugins: []
}
