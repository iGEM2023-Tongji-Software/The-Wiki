<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
import { defineAsyncComponent, onMounted, ref } from "vue"
interface Props {
    node: ArticleComponentNode
}

const props = defineProps<Props>()

const typeMap = {
    h1: defineAsyncComponent(() => import("./Header1.vue")),
    h2: defineAsyncComponent(() => import("./Header2.vue")),
    h3: defineAsyncComponent(() => import("./Header3.vue")),
    p: defineAsyncComponent(() => import("./Paragraph.vue")),
    div: defineAsyncComponent(() => import("./DivComponent.vue")),
    ol: defineAsyncComponent(() => import("./OrderedList.vue")),
    img: defineAsyncComponent(() => import("./Image.vue")),
    table: defineAsyncComponent(() => import("./TableComponent.vue")),
}
</script>

<template>
    <component v-if="typeMap[props.node.type]" :is="typeMap[props.node.type]" :node="props.node" />
</template>

<style scoped></style>
