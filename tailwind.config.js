/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{html,js}"
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "night"],
  },
  theme: {
    extend: {
      keyframes: {
        dropin: {
          "0%": { opacity: '0' },
          "1%": { transform: 'translateY(-10px)' },
          "80%": { opacity: '1' },
          "100%": { transform: 'translate(0px)' },

        },
        fadein: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
      animation: {
        "slide": "dropin 1s ease 200ms backwards",
        "slide2": "dropin 1200ms ease 500ms backwards",

        "fade": "fadein 1s ease 200ms backwards alternate",
      },
      boxShadow: {
        "3xl": "-3px 4px 44px 11px rgba(138,138,138,1)",

  
      },
    },
    
  }
}