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
      }
    },
    fontFamily: {
      'body': 'Noto Sans JP, sans-serif, monospace',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
