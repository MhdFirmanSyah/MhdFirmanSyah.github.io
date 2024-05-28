/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors:{
        purple1: '#0E001B',
        purple2: '#3f0092',
        purple3: '#ae00ff',
        tema: 'rgb(14, 0, 27)',
      },
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

