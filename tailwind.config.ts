import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-black)",
        graphite: "var(--color-graphite)",
        muted: "var(--color-gray)",
        paper: "var(--color-off-white)",
        border: "var(--color-border)",
        cyan: "var(--color-cyan)",
        magenta: "var(--color-magenta)",
        yellow: "var(--color-yellow)",
        success: "var(--color-success)",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(17, 17, 17, 0.06)",
        panel: "0 28px 70px rgba(17, 17, 17, 0.12)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(0, 174, 239, 0.1), transparent 34%), radial-gradient(circle at top right, rgba(236, 0, 140, 0.08), transparent 28%), radial-gradient(circle at bottom center, rgba(255, 210, 0, 0.1), transparent 30%)",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
        display: ["IBM Plex Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
