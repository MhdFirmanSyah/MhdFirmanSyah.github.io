/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      scale:{
        '110': '1.05',
      },
      fontFamily:{
        aclonica: 'Aclonica'
      },
      spacing: {
        13:'50px'
      },
      position: {
        sticky: 'sticky',
      }
    },
  },
  plugins: [],
}

