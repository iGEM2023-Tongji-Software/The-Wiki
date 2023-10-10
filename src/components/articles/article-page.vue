<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { computed, nextTick, onMounted, ref, watch } from "vue"
import ArticleComponentNode from "./components/ArticleComponentNode"
import ArticleComponent from "./components/ArticleComponent.vue"
import Title from "./components/Title.vue"
import Footer from "@/components/Footer.vue"
import SideMenu from "@/components/articles/components/SideMenu.vue"
import SVGA from "svgaplayerweb"
import $ from "jquery"

const route = useRoute()

const docTree = ref<ArticleComponentNode[]>([])

const ready = ref(false)

// const loadDoc = () => {
//     import(`./static/${path.value}.json`)
//         .then((value: { default: { $schema: string; title: string; content: ArticleComponentNode[] } }) => {
//             console.log(value.default)
//             title.value = value.default.title
//             docTree.value = value.default.content
//             nextTick(() => {
//                 ready.value = true
//             })
//         })
//         .catch((e) => {
//             console.log(e)
//             title.value = "NOT FOUND"
//             docTree.value = [
//                 {
//                     useHtml: false,
//                     type: "p",
//                     subContent: [],
//                     text: `The page you requested is not found.  the path is ${path.value}`,
//                     html: "",
//                 },
//             ]
//         })
// }

// const path = computed(() => route.params.path)
//
// const router = useRouter()
//
// watch(path, (newV, oldV) => {
//     ready.value = false
//     router.go(0)
// })

const loadSVGA = () => {
    let player = new SVGA.Player("#side-footprint-animation")
    let parser = new SVGA.Parser()
    parser.load("/img/footprint.svga", function (videoItem) {
        player.setVideoItem(videoItem)
        player.startAnimation()
    })
}

onMounted(() => {
    // loadDoc()
    loadSVGA()
})

interface Props {
    title: string
}

defineProps<Props>()
</script>

<template>
    <div class="article-container">
        <div class="flex">
            <div class="grow" />
            <div style="width: 1200px">
                <Title :text="title" />
                <div class="py-20">
                    <slot />
                </div>
            </div>
            <div class="grow" />
        </div>
        <Footer />
    </div>
    <SideMenu :ready="ready" />
    <div id="side-footprint-animation" />
</template>

<style scoped lang="scss">
.article-container {
    background-image: url("https://static.igem.wiki/teams/4787/wiki/img/article-background.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 360px 400px;
    background-attachment: fixed;
}

#side-footprint-animation {
    @media (max-width: 1400px) {
        display: none;
    }

    position: fixed;
    width: 800px;
    height: 1200px;

    left: -250px;
    top: -200px;

    z-index: 1;

    pointer-events: none;
}
</style>
