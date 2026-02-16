/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'japanese-red': '#8B0000',
                'soft-pink': '#FFF5F5',
                'soft-green': '#F0FFF4',
                'charcoal': '#1A1A1A',
                'body': '#4B5563',
            },
            fontFamily: {
                sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
