/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat, sans-serif'],
        'josefin': ['Josefin Sans, sans-serif'],
      },
    },
    
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    backgroundImage: {
      'logos': "url('./assets/Logos.jpg')",
      'retrato1': "url('./assets/retrato 1.JPG')",
      'sites': "url('./assets/sites.jpg')",
    },
  },
  plugins: [],
}

