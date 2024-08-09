import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004825",
        secondary: "#549877",
        "neutral-blue": "#010066",
        "neutral-blue-100": "#B0B0D0",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        lg: "0px 0px 5px 0px rgba(30, 30, 30, 0.10)",
      },
      maxWidth: {
        "max-w-screen-3xl": "2304px",
      },
      backgroundImage: {
        "home-hero":
          "radial-gradient(58.4% 50.45% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url('/app/assets/images/home-hero.png')",
        "about-hero":
          "radial-gradient(58.4% 50.45% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url('/app/assets/images/about-hero.png')",
        "contact-hero":
          "radial-gradient(58.4% 50.45% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url('/app/assets/images/about-hero.png')",
        "services-hero":
          "radial-gradient(58.4% 50.45% at 50% 50%, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url('/app/assets/images/services-hero.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
