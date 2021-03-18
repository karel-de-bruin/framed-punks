module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ({ after }) => after(['disabled']),
    cursor: ({ after }) => after(['disabled'])
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
