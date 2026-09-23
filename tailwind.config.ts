import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07090C",
        panel: "#0B0E12",
        steel: "#101419",
        line: "rgba(255,255,255,.08)",
        paper: "#F4F6F8",
        muted: "#A4ABB5",
        technical: "#727A85",
        amber: "#F0A31A",
        amberHot: "#FFB527",
        amberSoft: "#FFD166"
      },
      boxShadow: {
        amber: "0 0 60px rgba(240,163,26,.18)"
      }
    }
  },
  plugins: []
};

export default config;
