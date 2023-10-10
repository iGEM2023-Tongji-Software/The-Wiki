import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import visualizer from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
    base: "https://2023.igem.wiki/tongji-software/",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        
    },
    css: {
        postcss: {
            plugins: [require("tailwindcss")],
        },
    },
})
