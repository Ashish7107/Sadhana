/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["-apple-system", "BlinkMacSystemFont", "Arial"],
      serif: ["Oswald", "Georgia", "Cambria"],
      mono: ["SFMono-Regular", "Menlo"],
      display: ["Oswald"],
      body: ["Open Sans"],
    },
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
  },
  plugins: [],
};
