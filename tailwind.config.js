module.exports = {
  purge: [
    './public/index.html',
     './src/index.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      oldlace: {
        DEFAULT: '#f8f5e4',
      },
      wheat: {
        DEFAULT: '#f1cbb5',
      },
      purp: {
        DEFAULT: '#635585',
      },
    },
    fontFamily: {
      'body': 'Noto Sans JP, sans-serif, monospace',
    },
    extend: {
      lineHeight: {
        'zero': '0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
