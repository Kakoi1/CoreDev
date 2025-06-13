import { defineConfig, loadEnv } from "vite";
import process from "node:process"
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd())
    return {
        plugins: [react(), tsconfigPaths()],
        server: {
            proxy: {
                "/orangepay-api": {
                    target: env.VITE_ORANGE_PAYPLUS_URL,
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/orangepay-api/, ""),
                },
            },
        },
    }
});
