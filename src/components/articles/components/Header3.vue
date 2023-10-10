<script setup lang="ts">
import ArticleComponentNode from "./ArticleComponentNode"
import ArticleComponent from "./ArticleComponent.vue"
interface Props {
    node: ArticleComponentNode
}
defineProps<Props>()
</script>

<template>
    <div class="h3-div">
        <h3 class="h3-text">{{ node.text }}</h3>
        <div class="mt-3">
            <ArticleComponent v-for="(n, i) in node.subContent" :node="n" :key="i" />
        </div>
    </div>
</template>

<style scoped>
.h3-div {
    margin-top: 60px;
}

.h3-text {
    font-family: ABeeZee, sans-serif;
    color: #8c6f00;
    font-size: 23px;
    font-weight: 400;
}
</style>
