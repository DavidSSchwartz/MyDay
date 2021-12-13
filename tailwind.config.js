module.exports = {
  purge: [
    './public/index.html',
     './src/index.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': 'Noto Sans JP, sans-serif, monospace',
    },
    extend: {
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
        darkblue: {
          DEFAULT: '#1013b7'
        },
        pink: {
          DEFAULT: '#E41376'
        },
        lightblue: {
          DEFAULT:  '#01c8EE'
        },
        gainsboro: {
          DEFAULT: '#DDE5E7'
        },
        indianred: {
          DEFAULT: '#d4674c'
        },
        dimgray: {
          DEFAULT: '#67727E'
        },
        khaki: {
          DEFAULT: '#FDEA79'
        },
        darkkhaki: {
          DEFAULT: '#A8A355'
        },
        darkslategray: {
          DEFAULT: '#4f4039'
        },
        whitesmoke: {
          DEFAULT: '#F6F0F0'
        },
        mediumturquoise: {
          DEFAULT: '#60E3D5'
        },
        darkcyan: {
          DEFAULT: '#0567A8'
        },
        burlywood: {
          DEFAULT: '#ffe196'
        },
        silverrose: {
          DEFAULT: '#f0b5d1'
        },
        steelblue: {
          DEFAULT: '#1878b6'
        }
      },
      lineHeight: {
        'zero': '0',
      },
      gridTemplateColumns: {
        'main': '1fr 80% 1fr',
      },
      backgroundImage: theme => ({
        'blue': "url('/assets/blue.jpg')",
        'brown-paper': "url('/assets/brown-paper.jpg')",
        'clouds': "url('/assets/clouds.jpg')",
        'mountain-valley': "url('/assets/mountain-valley.jpg')",
        'ocean': "url('/assets/ocean.jpg')",
        'starry-sky': "url('/assets/starry-sky.jpg')",
        'white-texture': "url('/assets/white-texture.jpg')",
        'wood': "url('/assets/wood.jpg')",
      }),
      keyframes: {
        slideInRight: {
          '0%': { right: '-12rem' },
          '100%': { right: '0' },
        },
        slideOutRight: {
          '0%': { right: '0' },
          '100%': { right: '-12rem' },
        },
      },
      animation: {
        slideInRight: 'slideInRight .2s ease-in',
        slideOutRight: 'slideOutRight .2s ease-out',
      },
    },
  },
  variants: {
    extend: {      backgroundColor: ['active'],},
  },
  plugins: [],
}
