/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensure TypeScript files are included
    ],
    theme: {
        extend: {
            color: {
                primary: '#BACFFF'
            }
        },
    },
    plugins: [],
};
