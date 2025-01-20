/** @type {import('tailwindcss').Config} */
// export default {
// }


module.exports = {
  // Your existing Tailwind CSS configuration goes here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
   plugins: [require("tailgrids/plugin")],
  
};
