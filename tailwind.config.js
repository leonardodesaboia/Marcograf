export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ink: "var(--color-ink)",
                graphite: "var(--color-graphite)",
                muted: "var(--color-muted)",
                paper: "var(--color-paper)",
                surface: "var(--color-surface)",
                panel: "var(--color-panel)",
                border: "var(--color-border)",
                brand: "var(--color-brand)",
                "brand-strong": "var(--color-brand-strong)",
                cyan: "var(--color-cyan)",
                magenta: "var(--color-magenta)",
                yellow: "var(--color-yellow)",
                success: "var(--color-success)",
            },
            boxShadow: {
                soft: "0 18px 40px rgba(15, 23, 42, 0.08)",
                panel: "0 34px 80px rgba(15, 23, 42, 0.18)",
                glow: "0 18px 45px rgba(181, 91, 44, 0.24)",
            },
            backgroundImage: {
                mesh: "radial-gradient(circle at top left, rgba(111, 123, 73, 0.12), transparent 30%), radial-gradient(circle at top right, rgba(138, 67, 81, 0.08), transparent 28%), radial-gradient(circle at bottom center, rgba(181, 91, 44, 0.12), transparent 30%)",
            },
            fontFamily: {
                sans: ["Public Sans", "system-ui", "sans-serif"],
                display: ["Libre Bodoni", "Georgia", "serif"],
            },
        },
    },
    plugins: [],
};
