/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "rgba(243, 243, 243, 0.5)",
        },
        "gray-3": "#828282",
        "light-foreground-fg-on-color": "#fff",
        "gradient-1": "#464feb",
        "neutrals-web-gray-30-edebe9": "#edebe9",
        "gray-1": "#333",
        "neutrals-web-gray-130-605e5c": "#605e5c",
        "neutrals-web-gray-60-c8c6c4": "#c8c6c4",
        blueviolet: "rgba(131, 48, 233, 0.2)",
        "light-foreground-foreground-1": "#242424",
        "light-stroke-stroke-1": "#d1d1d1",
        darkslategray: "rgba(66, 66, 66, 0.1)",
        "light-foreground-foreground-2": "#424242",
        forestgreen: {
          "100": "#09a033",
          "200": "rgba(9, 160, 51, 0.1)",
        },
        royalblue: "#556ee6",
        aliceblue: "#eff4ff",
        "neutrals-web-gray-160-323130": "#323130",
        "comm-blue-primary-0078d4": "#0078d4",
        black: "#000",
        gray: "#231f20",
      },
      spacing: {},
      fontFamily: {
        "dm-sans": "'DM Sans'",
        "fabricmdl-12": "'Fabric MDL2 Assets'",
        "segoeui-semibold-14-ms-fontsize-14-fontsizessize14": "'Segoe UI'",
      },
      borderRadius: {
        "81xl": "100px",
        "2xs-5": "10.5px",
        "980xl": "999px",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
