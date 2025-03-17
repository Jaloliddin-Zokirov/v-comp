export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, // Avtomatik markazga olish
        padding: "1rem", // Ichki padding qo‘shish
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1340px", // Custom 2xl width
      },
    },
  },
  plugins: [],
};
