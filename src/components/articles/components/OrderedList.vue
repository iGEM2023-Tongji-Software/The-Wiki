<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
interface Props {
    node: ArticleComponentNode
}
defineProps<Props>()
</script>

<template>
    <ol>
        <li v-for="n in node.subContent">{{ n.text }}</li>
    </ol>
</template>

<style scoped></style>
