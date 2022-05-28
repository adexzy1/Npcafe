module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'Transparent',
        yellow: '#fb9900',
        white: '#ffff',
        rgba: 'rgba(0, 0, 0, 0.5)',
        grey: '#f8f8f7',
        darkGrey: '#808080',
        red: {
          DEFAULT: '#c8161d;',
          light: '#FEE0E1',
        },
      },
      boxShadow: {
        DEFAULT: '0px 0px 25px 0px rgba(0,0,0,.15)',
      },
    },
  },
  plugins: [],
};
