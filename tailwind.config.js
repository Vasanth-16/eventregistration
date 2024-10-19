module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'], 
  content: [
    // Adjust the path based on your project structure
    '.index.html',              // Include any HTML files in the public folder (if applicable)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

