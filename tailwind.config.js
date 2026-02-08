/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "hsl(287, 80%, 97%)",
          100: "hsl(287, 80%, 93%)",
          200: "hsl(287, 75%, 85%)",
          300: "hsl(287, 70%, 72%)",
          400: "hsl(287, 65%, 58%)",
          500: "hsl(287, 60%, 48%)",
          600: "hsl(287, 65%, 40%)",
          700: "hsl(287, 70%, 32%)",
          800: "hsl(287, 65%, 25%)",
          900: "hsl(287, 60%, 18%)",
          950: "hsl(287, 55%, 10%)",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "system-ui", "sans-serif"],
        sans: ["Source Sans 3", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: { "fade-up": "fade-up .6s ease-out both", "fade-in": "fade-in .4s ease-out both", "scale-in": "scale-in .4s ease-out both" },
      keyframes: {
        "fade-up": { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": { from: { opacity: "0", transform: "scale(.95)" }, to: { opacity: "1", transform: "scale(1)" } },
      },
    },
  },
  plugins: [],
};
