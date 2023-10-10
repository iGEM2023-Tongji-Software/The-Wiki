<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue"
import Header2Background from "./svg/Header2Background.vue"
interface Props {
    text: string
}
const props = defineProps<Props>()

const svgWidth = ref(700)
const svgHeight = ref(60)

const text = computed(() => props.text)

watch(text, () => updateSVGWidth())

const overWidth = ref(false)

const updateSVGWidth = () => {
    const canvas = document.createElement("canvas")
    const context = canvas.getContext("2d")
    context!.font = `normal normal normal 24px ABeeZee`
    const metrics = context!.measureText(props.text)

    if (metrics.width > 900) {
        // 超宽
        svgWidth.value = 900
        svgHeight.value = 90
        overWidth.value = true
    } else {
        svgWidth.value = metrics.width
        overWidth.value = false
    }
}

onMounted(() => {
    updateSVGWidth()
})
</script>

<template>
    <div class="header2-container">
        <div class="flex flex-col mt-3 animate__animated animate__backInLeft">
            <div class="back-image-container">
                <Header2Background :width="svgWidth + 180" :height="svgHeight" />
            </div>
            <h2 :id="text" class="h2-text">{{ text }}</h2>
        </div>
    </div>
</template>

<style scoped>
.header2-container {
    height: 91px;
    filter: drop-shadow(0px 4px 2px #555);
    z-index: 1;
    position: relative;
    transform: v-bind("overWidth?`translateY(45px) translateX(-10px)`:`translateY(62px) translateX(-10px)`");
}

.back-image-container {
    position: relative;
    left: 0;
    right: 0;
    height: 150px;
}

.h2-text {
    font-family: "ABeeZee", sans-serif;
    font-size: 24px;
    color: #b529b6;

    transform: v-bind("overWidth?`translateX(60px) translateY(-133px)`:`translateX(60px) translateY(-133px)`");

    width: 900px;
}
</style>
