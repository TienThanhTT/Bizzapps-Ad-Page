/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        FormBackground: "url('./images/form-background.png')",
        CustomerBackground: "url('./images/customer-background.png')",
        // aboutBackground: "url('./images/about-background.png')",
        // HRBackground: "url('./images/module_HR-background.png')",
        // buyBackground: "url('./images/module_buy-background.png')",
        // sellBackground: "url('./images/module_sell-background.png')",
        // warehouseBackground: "url('./images/module_warehouse-background.png')",
        // accountantBackground:
        //   "url('./images/module_accountant-background.png')",
        // produceBackground: "url('./images/module_produce-background.png')",
        // CRMBackground: "url('./images/module_CRM-background.png')",
        // marketingBackground: "url('./images/module_marketing-background.png')",
      },
      backgroundColor: {},
      colors: {
        primary: "#007CF5",
        brownBackground: "#F9F9F9",
        footerbg: "#0A1B33",
      },
    },
  },
  plugins: [],
};
