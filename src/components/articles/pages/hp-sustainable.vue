<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Quote from "@/components/articles/components/Quote.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | HP | Sustainable"
})
</script>

<template>
    <article-page title="SUstaiNablE">
        <template #default>
            <quote>
                <p>“Sustainable development is the pathway to future we want for all.”</p>
                <p class="text-right mt-4">——Ban Ki-moon</p>
            </quote>
            <paragraph class="mt-5">
                <p>
                    The Sustainable Development Goals (SDGs) are a set of 17 global development goals established by the United Nations in 2015.
                    Scientific research loses its meaning once it contradicts sustainable development. Therefore, in our project, we fully consider
                    sustainable development and have chosen several SDGs as our goals.
                </p>
            </paragraph>
            <div class="flex gap-3 items-center justify-center mx-auto my-5">
                <Image style="width: 500px"
                    ><img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-sustainable-1.png" alt="" class="w-full"
                /></Image>
                <Image style="width: 500px"
                    ><img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-sustainable-2.png" alt="" class="w-full"
                /></Image>
            </div>

            <header1 text="goal 3 gooD HEALTH AND WELL BEING" />
            <paragraph>
                <p>
                    The third Sustainable Development Goal aims to minimize the incidence of infectious diseases and other health issues while
                    promoting well-being for people of all ages[1]. The goal of our project is to improve the diagnosis of virus-related diseases.
                    Therefore, to some extent, it can help people become healthier and contribute to achieving the third Sustainable Development Goal.
                </p>
                <p>
                    In addition, we raise public awareness of virus-related infectious diseases by conducting science popularization activities in
                    communities and disseminating knowledge about prevention and diagnosis through social media. By enhancing the basic knowledge of
                    the public regarding these diseases, we aim to provide a clearer understanding of illnesses caused by viruses, enabling
                    individuals to positively prevent and treat diseases.
                </p>
            </paragraph>

            <header1 text="goal 4 QUALITY EDUCATION" />
            <paragraph>
                <p>
                    The fourth Sustainable Development Goal aims to ensure inclusive and equitable quality education that provides lifelong learning
                    opportunities for all[1]. The science popularization work we do effectively helps people from various regions to access knowledge
                    related to CRISPR virus detection and synthetic biology for free. We ensure that people of all walks of life, of any age group,
                    can access this knowledge through online and offline channels. Click here to know more information.
                </p>
            </paragraph>

            <header1 text="goal 17 PARTNERSHIPS FOR THE GOAL" />
            <paragraph>
                <p>
                    Sustainable Development Goal 17 aims to strengthen global partnerships and achieve sustainable development goals through
                    collaboration with multiple stakeholders[1]. Our project identified stakeholders and engaged in communication with all of them.
                    Click here to know more information.
                </p>
            </paragraph>

            <paragraph class="mt-10">
                <h2 class="text-yellow-700 text-[32px] font-normal font-['ABeeZee']">Reference:</h2>
                <ol class="list-none ml-[-2em]">
                    <li>[1]United Nations. 2021. The Sustainable Development Goals Report, 3-4, 18, 28.</li>
                </ol>
            </paragraph>

            <next-prev-page prev-title="INCLUSIVITY" prev-link="/human-practices/inclusivity" />
        </template>
    </article-page>
</template>

<style scoped></style>
