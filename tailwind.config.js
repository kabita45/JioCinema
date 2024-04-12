/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        mdl: "868px",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times", "serif"],
        custom: ["Poppins", "Roboto", "sans-serif"],
      },
      backgroundColor: {
        defaultBackground: "#0d0e10",
        buttonBackground: "#d9008d",
        footerBackgroundColor: "#17181a",
        socialMediaBackground: "#FFFFFF1F",
      },
      textColor: {
        defaultTextColor: "#aaa",
        premiumColor: "rgb(193,163,98)",
        extraLightGray: "rgba(217, 214, 229, 0.6)",
        //165, 137, 80
        pink: "#d9008d",
        footerItemColor: "#D9D6E5",
        inputPlaceholderColor: "rgb(140, 140, 140)",
        // error: "#e77600",
        error: "#ff0043",
      },

      borderColor: {
        premiumColor: "rgb(193,163,98)",
        defaultBorderColor: "#aaa",
        lightGray: "#FFFFFF3F",
        pink: "#d9008d",
      },
      boxShadow: {
        featuredBoxShadow:
          "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",

        navLinkShadow: "0 0 1px 1px #fff",
        inputBoxShadow: "inset 0 1px 2px rgba(15,17,17,.15) ",
        focusInputBoxShadow: "0 0 3px 2px rgb(228 121 17 / 50%)",
        errorShadow: "0 0 0 4px #d9008d inset;",
      },
      flex: {
        // "1/2": "0 0 50%",
        // "1/3": "0 0 33.33%",
        // "1/4": "0 0 25%",
      },
    },
  },
  plugins: [],
};
