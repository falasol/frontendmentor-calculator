module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          theme1: {
            main: "#3a4764",
            toggle: "hsl(223, 31%, 20%)",
            screen: "hsl(224, 36%, 15%)",
          },
          theme2: {
            main: "hsl(0, 0%, 90%)",
            toggle: "hsl(0, 5%, 81%)",
            screen: "hsl(0, 0%, 93%)",
          },
          theme3: {
            main: "hsl(268, 75%, 9%)",
            toggle: "hsl(268, 71%, 12%)",
            screen: "hsl(268, 71%, 12%)",
          },
        },
        red: {
          theme1: {
            toggle: "hsl(6, 63%, 50%)",
          },
          theme2: {},
        },
        key: {
          theme1: {
            background: "hsl(30, 25%, 89%)",
            func: "hsl(225, 21%, 49%)",
            equal: "hsl(6, 63%, 50%)",
          },
          theme2: {
            background: "hsl(281, 89%, 26%)",
            func: "hsl(176, 100%, 44%)",
            equal: "hsl(268, 47%, 21%)",
          },
          theme3: {
            background: "hsl(30, 25%, 89%)",
            func: "hsl(225, 21%, 49%)",
            equal: "hsl(6, 63%, 50%)",
          },
        },
        white: "#ffffff",
      },
      height: {
        keyboard: "63%",
      },
      width: {
        largeKey: "150px",
      },
      boxShadow: {
        theme1: {
          key: "0px 3px hsl(28, 16%, 65%)",
          delKey: "0px 3px hsl(224, 28%, 35%)",
          equal: "0px 3px hsl(6, 70%, 34%)",
        },
        theme2: {
          key: "0px 3px hsl(285, 91%, 52%)",
          delKey: "0px 3px hsl(177, 92%, 70%)",
          equal: "0px 3px hsl(290, 70%, 36%)",
        },
        theme3: {},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
