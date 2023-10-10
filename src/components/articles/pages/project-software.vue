<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Software"
})
</script>

<template>
    <article-page title="SOFTWARE">
        <template #default>
            <paragraph>
                <p>文案未完</p>
            </paragraph>
            <next-prev-page prev-title="NOTEBOOK" prev-link="/tongji-software/project/notebook" next-title="PROJECT SAFETY" next-link="/tongji-software/project/safety" />
        </template>
    </article-page>
</template>

<style scoped></style>
