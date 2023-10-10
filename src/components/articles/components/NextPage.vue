<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
import ArticleComponent from "./ArticleComponent.vue"
import { computed, nextTick, onMounted, ref, watch } from "vue"
import Header1Background from "@/components/articles/components/svg/Header1Background.vue"
import { useRouter } from "vue-router"
interface Props {
    text: string
    to: string
}
const props = defineProps<Props>()

const svgWidth = ref(700)
const textComponent = ref<HTMLDivElement>()

const textCss = ref("h1-text")

const updateSVGWidth = () => {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    context.font = `normal normal normal 36px "Luckiest Guy"`
    const metrics = context.measureText(props.text)

    if (metrics.width > 900) {
        // 超宽
        svgWidth.value = 900
        textCss.value = "h1-text-overWidth"
    } else {
        svgWidth.value = metrics.width
    }
}

onMounted(() => {
    updateSVGWidth()
})

const router = useRouter()
const gotoLink = () => {
    router.push(props.to)
}
</script>

<template>
    <div class="flex w-full animate__animated animate__backInLeft">
        <div class="grow" />
        <div class="header1-container mt-10 mb-5 relative" @click="gotoLink">
            <div class="back-image-container">
                <Header1Background :width="svgWidth + 120" />
            </div>
            <h2 :id="text" :class="textCss">{{ text }}</h2>
        </div>
    </div>
</template>

<style scoped>
.header1-container {
    height: 91px;
    filter: drop-shadow(0px 4px 2px #000);
    z-index: 2;
    transition-duration: 300ms;
}

.header1-container:hover {
    scale: 1.05;
    cursor: pointer;
    transition-duration: 300ms;
}

.back-image-container {
    z-index: 0;
}

.h1-text {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 36px;
    color: #dcd2bb;
    -webkit-text-stroke: 1px #000;

    transform: translateX(60px) translateY(-70px);
}

.h1-text-overWidth {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 36px;
    color: #dcd2bb;
    line-height: 32px;
    -webkit-text-stroke: 1px #000;

    transform: translateX(60px) translateY(-80px);
    width: 900px;
}
</style>
