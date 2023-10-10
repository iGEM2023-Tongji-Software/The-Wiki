<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
interface Props {
    node: ArticleComponentNode
}
defineProps<Props>()
</script>

<template>
    <table v-html="node.html" class="w-full" />
</template>

<style scoped></style>
