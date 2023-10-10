<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Team | Attribution"
})
</script>

<template>
    <article-page title="ATTRIBUTION">
        <template #default>
            <header1 text="TEaM MEMbEr CoNtribUtioNs" />

            <div class="w-full">
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-attribute-1.png" alt="" class="w-full" />
                </Image>
            </div>

            <header1 text="ExtErNal CoNtribUtioNs" />

            <div class="w-full">
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-attribute-2.png" alt="" class="w-full" />
                </Image>
            </div>

            <header1 text="ProjEct TiMEliNE" />

            <div class="w-full">
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-attribute-3.png" alt="" class="w-full" />
                </Image>
            </div>
        </template>
    </article-page>
</template>

<style scoped></style>
