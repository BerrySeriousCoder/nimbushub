/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        bebas: ['Bebas Neue', 'cursive'], 
        roboto: ['Roboto', 'sans-serif'], 
        robotoCondensed : ['Roboto Condensed' ,'sans-serif'] ,
        anton: ['Anton SC' ,'sans-serif' ] ,
        markazi : ['Markazi Text' , 'sans-serif' ],
        antontwo : ['Anton' , 'sans-serif'] ,
        oswald : ['Oswald' , 'sans-serif']
      } ,
      height : {
        '2svh' : '2svh'
      },
      backgroundImage : {
          'icon' : "url('../ssap/public/wave.svg')"
      }
    },
  },
  plugins: [],
}

