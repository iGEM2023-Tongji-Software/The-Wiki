import "bootstrap/dist/css/bootstrap.min.css"
// import "@/assets/font.css"
import "@/assets/base.css"
import "@/assets/article.scss"
import "@/assets/math.min.css"

import "animate.css"

// import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

import { createApp } from "vue"
import App from "./App.vue"
import { router } from "@/router"

createApp(App).use(router).mount("#app")
