module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path as needed
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('./assets/Group 1.png')",
        'z-index':"-2" // Define the background image
        
      },
      backgroundSize: {
        '150%': '150%',
        '200%': '200%',
        '50%': '50%',
        '10%':'10%',
      },
    },
  },
  plugins: [],
};
