/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}",
    "./public/**/*.{html,js,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        primarybg: '#0284C7',
        primarytext: '#FFFFFF',
        primaryhover: '#075985',
        secondarybg: '#0369A1',
        secondarytext: '#FFFFFF',

      },
      fontFamily:{
        //custom fonts such as Nunito imported from input.css
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}

