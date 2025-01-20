/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Enables dark mode via the "class" strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx}", // Add any additional content sources here
  ],
  theme: {
    // Uncomment this if you want a centered container layout with padding
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      // Extend Tailwind with additional gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Keyframes for custom animations
      keyframes: {
        // Regular marquee (horizontal)

        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        // Marquee for reverse scrolling
        "marquee-reverse": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(calc(100% + var(--gap)))" }, // Adjust for smoother transition
        },
        // Vertical marquee animation
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
        // Accordion open animation
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        // Accordion close animation
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      // Defining animations based on keyframes
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        fadeOutDown: "fadeOutDown 0.5s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-reverse": "marquee-reverse var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"], // Add your preferred font family here. Make sure it's installed on your system. If not, you can install it using npm: npm install --save-dev @fontsource/sora-sans-jp-ui-fonts
        // Add more font families as needed.
      },
      // font-family: "Sora", system-ui;
    },
  },
  // DaisyUI configuration for themes
  daisyui: {
    themes: ["light"], // Enable light and dark themes
  },
  // Plugins: DaisyUI and TailwindCSS Animate plugin
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
