import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inriaSerif: ["var(--font-inria-serif)"],
        jacquard24: ["var(--font-jacquard-24)"],
        libreBaskerville: ["var(--font-libre-baskerville)"],
        caudex: ["var(--font-caudex)"],
        maname: ["var(--font-maname)"],
        robotoMono: ["var(--font-roboto-mono)"],
        marhey: ["var(--font-marhey)"],
        kaiseiHarunoUmi: ["var(--font-kaisei-harunoumi)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
