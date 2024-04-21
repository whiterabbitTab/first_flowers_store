/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'black': 'rgb(19, 19, 19)',
        'bsk': 'rgb(36, 36, 36)',
        'main-black-bg': 'rgb(1, 3, 10)',
        'main-bg': 'rgb(219, 72, 72)',
        'secondary': 'rgb(20, 20, 20)'
      },
      width: {
        '100': '100%',
        '139': '556px'
      },
      height: {
        '129': '906px',
        '86,75': '347px'
      },
      textColor: {
        'BA': 'rgb(186, 186, 186)',
        'main': 'rgb(219, 72, 72)',
        'gray-main': '#7C7C7C'
      },
      borderRadius: {
        '6': '6px'
      },
      fontSize: {
        '40p': '40px'
      }
    },
  },
  plugins: [],
}

