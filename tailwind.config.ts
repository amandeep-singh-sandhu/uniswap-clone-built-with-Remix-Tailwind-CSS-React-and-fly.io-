import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "uns-blue": "#131A2A",
        "uns-light-blue": "#98A1C0",
        "uns-blue-gray": "#99A1BD14",
      },
      backgroundImage: {
        "404-img":
          "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
