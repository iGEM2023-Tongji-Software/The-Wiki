<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Construction"
})
</script>

<template>
    <article-page title="Uh-Oh">
        <template #default>
            <paragraph>
                <p>This page is still under construction. We are sorry for that.</p>
            </paragraph>
        </template>
    </article-page>
</template>

<style scoped></style>
