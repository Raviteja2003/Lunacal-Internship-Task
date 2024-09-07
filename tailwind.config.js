// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 40px 10px rgba(0, 0, 0, 0.5)', // Customize the shadow to match your needs
      },
    },
  },
  plugins: [],
};
