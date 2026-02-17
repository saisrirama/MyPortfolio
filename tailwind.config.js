/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#850E35',
                'secondary': '#EE6983',
                'highlight': '#FFC4C4',
                'site-bg': '#FCF5EE',
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
