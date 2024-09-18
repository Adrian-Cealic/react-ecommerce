/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      'extra-sm': '270px',
      // => @media (min-width: 270px) { ... }

      'sm': '300px',
      // => @media (min-width: 300px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend:{
      colors:{
        'brown': '#8f6a4c'
      }
    }
  },
  plugins: [],
}