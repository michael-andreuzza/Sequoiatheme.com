const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:   {
        sequoia: "linear-gradient( 229.7deg, #fdfdfe 14.85 % , #ffbb88 20.61 % , #ff7cba 26.17 % , #887bff 31.93%, #03c7f6 46.54 % , #0f1014 54.36%)",
      },
      colors: {
        //Base Colors
        moonlightBase: "#0F1014",
        moonlightInterface: "#111216",
        moonlightOverlay: "#131317",
        moonlightSoft: "#43444D",
        moonlightSlight: "#575861",
        moonlightText: "#868690",
        moonlightFocusLow: "#121216",
        moonlightFocusMedium: "#1A1B1F",
        moonlightFocusHigh: "#1F1F24",

        //Moonlight Accents
        moonlightWhite: "#fdfdfe",
        moonlightStone: "#9898a6",
        moonlightOrange: "#ffbb88",
        moonlightPink: "#f58ee0",
        moonlightIndigo: "#c58fff",
        moonlightBlue: "#8eb6f5",

        //Monochrome Accents
        monochromeKashmir: "#626983",
        monochromeSlate: "#7C829D",
        monochromeLogan: "#999EB2",
        monochromeCadet: "#B6BAC8",
        monochromeCat: "#D3D5DE",
        monochromeCloud: "#E2E4ED",
      },
      fontFamily: {
        sans: [
          '"NeueHaasDisplayBlack"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        display: [
          '"NeueHaasDisplayBlack"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
        ds: [
          '"NeueHaasGroteskDisp Pro Md"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],

      },

    },
  },
  plugins: [],
};
