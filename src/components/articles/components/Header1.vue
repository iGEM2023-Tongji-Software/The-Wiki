<script setup lang="ts">
import { onMounted, ref } from "vue"
import Header1Background from "@/components/articles/components/svg/Header1Background.vue"
import { integer, MersenneTwister19937 } from "random-js"

interface Props {
    text: string
    image?: number
}

const props = withDefaults(defineProps<Props>(), {
    image: (() => {
        const engine = MersenneTwister19937.autoSeed()
        return integer(1, 6)(engine)
    })(),
})

const svgWidth = ref(700)

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
</script>

<template>
    <div class="header1-container flex flex-col mt-10 mb-5 relative animate__animated animate__backInLeft">
        <div class="back-image-container">
            <Header1Background :width="svgWidth + 150" />
        </div>
        <h1 :id="text" :class="textCss">{{ text }}</h1>
        <div class="decoration-img">
            <img :src="`/img/icons-${image}.png`" alt="" style="width: 80px; height: 80px" />
        </div>
    </div>
</template>

<style scoped>
.header1-container {
    height: 91px;
    filter: drop-shadow(0px 4px 2px #000);
    z-index: 2;
}

.back-image-container {
    position: relative;
    left: 0;
    right: 0;
    height: 150px;

    z-index: 0;
}

.decoration-img {
    @medis (max-width: 1200px) {
        display: none;
    }
    position: absolute;
    left: -100px;
    top: 2px;
    border-radius: 20px;
    overflow: hidden;
}

.h1-text {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 36px;
    color: #dcd2bb;
    -webkit-text-stroke: 1px #000;

    transform: translateX(60px) translateY(-70px);

    width: 900px;
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
