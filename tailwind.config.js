/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
      './index.html',
      './about.html',
      './contact.html',
      './mywork.html',
      './projects.html',
      './resume.html'
  ],
  theme: {
    colors:{
      ...colors,
      'Dark moss green': '#656839',
      'Atomic tangerine': '#E29578',
    },
    extend: {},
  },
  plugins: [],
}

