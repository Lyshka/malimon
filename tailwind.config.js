/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{js,ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        Jost: "Jost",
      },
      colors: {
        primary: {
          DEFAULT: "#FBE521",
        },
        dark: {
          primary: "#212020",
          secondary: "#1B1A17",
        },
        yellow: {
          10: "#FFFCE9"
        },
        gray: {
          100: "#8C8C8C"
        }
      },
      borderRadius: {
        main: "10px", // Используйте '10px' вместо просто 10
      },
      gridTemplateRows: {
        '0': '0fr',
        '1': '1fr',
      }
    },
  },
  plugins: [],
};
