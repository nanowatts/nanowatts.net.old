module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 97%)",
        darkBackground: "hsl(240, 20%, 17%)",
        code: "hsl(0, 0%, 93%)",
        darkCode: "hsl(224, 25%, 8%)",
        selection: "hsl(142, 98%, 78%)",
      },
      textColor: {
        primary: "hsl(0, 0%, 3%)",
        secondary: "hsl(0, 0%, 45%)",
        tertiary: "hsl(243, 70%, 47%)",
        darkTertiary: "hsl(100, 100%, 79%)",
        darkPrimary: "hsl(0, 0%, 90%)",
        darkSecondary: "hsl(100, 100%, 80%)",
      },
      gridTemplateColumns: {
        "20-80": "60% 40%",
        "118-auto": "118px auto",
        auto: "auto",
      },
      gridColumn: {
        1: "1",
      },
      gridRow: {
        1: "1",
      },
      gridTemplateRows: {
        auto: "auto",
      },
      height: {
        400: "400px",
      },
      animation: {
        enter: "enter 1s ease-out",
      },
      keyframes: {
        enter: {
          "0%": {
            opacity: "0",
            transform: "translateY(-4px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },


    maxWidth: {
      "container-large": "612px",
      "container-small": "92%",
      256: "256px",
    },
    maxHeight: {
      image: "200px",
      256: "256px",
    },
  },
  variants: {
    extend: {},
    backgroundColor: ['active']
  },
  plugins: [],
}