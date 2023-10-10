<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
import ArticleComponent from "./ArticleComponent.vue"
interface Props {
    node: ArticleComponentNode
}
defineProps<Props>()
</script>

<template>
    <div v-if="node.useHtml" v-html="node.html" class="w-full" />
</template>

<style scoped></style>
