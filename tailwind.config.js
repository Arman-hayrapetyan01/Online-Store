/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        128: "32rem",
      },
      backgroundPositionY: {
        50: "-50px",
        10: "-10px",
        90: "-90px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const addStyleUtlis = {
        ".text-shadow-xuy": {
          "text-shadow": "0px 0px 5px #fff",
        },
        ".about-bg-img1": {
          "background-image":
            "url(https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww&w=1000&q=80)",
        },
        ".items-shdow": {
          "box-shadown": "0px 0px 5px 5px #0000006b",
        },
        ".cardStyle": {
          width: "500px",
          height: "300px",
          perspective: "1000px",
          transition: "transform 0.5s",
          cursor: "pointer",
          transformStyle: "preserve-3d",
        },
        ".cardInnerStyle": {
          width: "100%",
          height: "100%",
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
        },
        ".cardFrontStyle": {
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.518)",
          "background-color": "#5a4545",
        },
        ".cardBackStyle": {
          width: "100%",
          height: "100%",
          position: "absolute",
          backfaceVisibility: "hidden",
          borderRadius: "10px",
          "background-color": "#5a4545",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.518)",
          transform: "rotateY(180deg)",
        },
        ".bg-craz1": {
          background: "linear-gradient(#00000094, #ffffff94)",
        },
        ".SBP-90": {
          backgroundPositionY: "-90px"
        },
        ".SBP-10": {
          backgroundPositionY: "-10px"
        },
        ".SBP-50": {
          backgroundPositionY: "-50px"
        },
        ".SBP-102": {
          backgroundPositionY: "1px"
        }, 
      };
      addUtilities(addStyleUtlis, ["responsive", "hover"]);
    },
  ],
};
