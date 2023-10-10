<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue/dist/vue"

const h1_image = 7

onMounted(() => {
    document.title = "CASleuth | Project | Safety"
})
</script>

<template>
    <article-page title="SAFETY">
        <template #default>
            <paragraph>
                <p>To ensure our software’s safety to users, we answered some frequently asked quertions(FAQs) as followed.</p>
            </paragraph>

            <header1 text="Q1: Will CASlEUth bE harMful to UsErs or thEir coMpUtErs?" :image="h1_image" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-safety-1.png" alt="" class="w-[250px] float-left mr-5" />
                <p>
                    CASleuth is safe enough for users and their computers. It is redundant to worry about our software's safety. Because you only need
                    to visit our website and query for results. All the computing operations were done on our server. Additionally, the files we
                    provided were also safe to download on user's own equipment.
                </p>
            </paragraph>

            <header1 text="Q2: DoEs CASlEUth infringE on thE copyright of a databasE or coMpUting tool?" :image="h1_image" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-safety-2.png" alt="" class="w-[200px] float-right ml-5" />
                <p>
                    The data sources of our software are described in the wiki, and the tools we use are free and open source, so there are no
                    copyright issues. In addition, all references in the wiki are also stated. You can use our data and software with confidence.
                </p>
            </paragraph>

            <header1 text="Q3: Is yoUr projEct rEsEarch safE ENoUgh? ArE thErE aNy ExpEriMENts?" :image="h1_image" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-safety-3.png" alt="" class="w-[200px] float-left mr-5" />
                <p>
                    We have done a software project that does not involve experiments with organisms or parts. We use public data to build a gRNA
                    design tool applied to Crispr virus detection which are candidate tools for synthetic biology. It will be safe and secure.
                </p>
            </paragraph>

            <header1 text="StatEMENt" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-safety-4.png"
                    alt=""
                    class="w-[200px] float-right ml-5"
                    :image="h1_image"
                />
                <p>
                    We provide CASleuth as a public service. We do not collect any personally identifiable information (PII) about users when they
                    visit our website. CASleuth is only for academic research and will be not for any commercial uses. So do the sources of data we
                    obtained from other databases.
                </p>
            </paragraph>

            <next-prev-page prev-title="PROJECT SOFTWARE" prev-link="/project/software" next-title="PROOF OF CONCEPT" next-link="/project/poc" />
        </template>
    </article-page>
</template>

<style scoped></style>
