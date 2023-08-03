/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}"],
  theme: {
    extend: {
      screens:{
        'md': '860px'
      },
      colors: {
        'blacky': 'rgb(30,40,25)',
        'main-bg': '#9ca238',
        'ijo-tua': 'rgb(120,126,20)',
        'ijo-muda': '#577e6b',
        'main-icon': '#cd3524',
        'oren-washed': '#f38d30',
        'sec-icon': '#e34d25',
        'kuning': '#fbb333',
        'coklat-muda': '#993300',
        'coklat-tua': '#6d3012',
        'main-text': '#663e23',
        'cream': '#ecd4bd',
        'merah-tua': 'rgb(80, 4, 2)'
      },
      fontFamily: {
        'main': "'REM', sans-serif",
        'title': "'Bebas Neue', sans-serif",
        'pixel': "'Teko', sans-serif"
      },
      backgroundImage:{
        'leaf': "url('/assets/textureleaf.jpg')"
      },
      boxShadow:{
        'button': "7px -10px 0 0 #e34d25",
        'unbotton': "0 0 0 0 #e34d25"
      },
      gridTemplateColumns: {
        'price-card-xs': 'repeat(3, minmax(75vw, 1fr))',
        'price-card-sm': 'repeat(3, minmax(16rem, 1fr))'
      }
    },
  },
  plugins: [],
}

