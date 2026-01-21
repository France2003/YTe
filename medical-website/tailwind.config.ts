import type { Config } from 'tailwindcss'

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'deep-blue': '#1e40af',
                'sky-blue': '#eff6ff',
                'teal-green': '#14b8a6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'gradient': 'gradient-shift 8s ease infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(20, 184, 166, 0.3)',
                'glow-blue': '0 0 20px rgba(30, 64, 175, 0.3)',
                'glow-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
            },
        },
    },
    plugins: [],
} satisfies Config
