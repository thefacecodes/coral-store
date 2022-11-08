/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        thegrey: "#F1F1F1"
      },
       fontFamily: {
      "okay" : ['Inter', 'sans-serif']
    }
    }
  },
  plugins: [
 
  ],
  content: [
    "./components/**/*.{vue,js,ts}",
    `${srcDir}/layouts/**/*.vue`,
    "./pages/**/*.vue"
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
  ],
  
};
