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
        anton: ['Anton SC' ,'sans-serif' ] ,
        markazi : ['Markazi Text' , 'sans-serif' ],
        antontwo : ['Anton' , 'sans-serif']
      } ,
      height : {
        '2svh' : '2svh'
      }
    },
  },
  plugins: [],
}

