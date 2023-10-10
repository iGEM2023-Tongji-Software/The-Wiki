<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Quote from "@/components/articles/components/Quote.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | HP | Communication"
})
</script>

<template>
    <article-page title="COMMUNICATION">
        <template #default>
            <quote>
                <p>Communication is your ticket to success, if you pay attention and learn to it effectively.</p>
                <p class="text-right mt-4">——Theo Gold</p>
            </quote>
            <paragraph class="mt-5">
                <p>
                    We are well aware of the importance of communication in our project. Therefore, we have organized many activities to communicate
                    with others.
                </p>
            </paragraph>

            <header1 text="COMPANIES" />
            <paragraph>
                <p>
                    We have contacted companies involved in virus detection and synthetic biology and have had in-depth discussions with the technical
                    researchers in these companies. They have provided us with advice on the project and have also given us a better understanding of
                    the related industries.
                </p>
                <p>Please click <a href="/human-practices/integrated-hp">Integrated HP</a> for more information.</p>
            </paragraph>

            <header1 text="HOSPITAL" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-com-1.png" alt="" class="w-[300px] float-right ml-5" />
                <p>
                    There are many doctors and patients in hospitals who are troubled by virus-related diseases. Therefore, we visited hospitals to
                    communicate with them and learn more about the relevant background. The communication with them has given us a better
                    understanding of the potential end-users of our project and has further helped us update our project.
                </p>
                <p>Please click <a href="/human-practices/integrated-hp">Integrated HP</a> for more information.</p>
            </paragraph>

            <header1 text="EXPERTS" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-com-2.png" alt="" class="w-[250px] float-left mr-5" />
                <p>
                    We have consulted many experts in the industry, including professors in our university. They have taken a serious interest in our
                    project, provided us with insights into the future direction of the project, and offered methods to optimize our software.
                </p>
                <p>Please click <a href="/human-practices/integrated-hp">Integrated HP</a> for more information.</p>
            </paragraph>

            <header1 text="COMMUNITIES" />
            <paragraph>
                <p>
                    There are people from various professions and age groups in the community. We communicate with the local community to gain a
                    better understanding of their awareness of virus detection and to disseminate relevant knowledge to them.
                </p>
                <p>Please click <a href="/education">Education</a> for more information.</p>
            </paragraph>

            <header1 text="SCHOOLS" />
            <paragraph>
                <p>
                    There are people from various professions and age groups in the community. We communicate with the local community to gain a
                    better understanding of their awareness of virus detection and to disseminate relevant knowledge to them.
                </p>
                <p>Please click <a href="/education">Education</a> for more information.</p>
            </paragraph>

            <Image bare class="mt-5">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-com-3.png" alt="" class="w-full rounded-3xl overflow-hidden" />
            </Image>

            <next-prev-page
                next-title="INCLUSIVITY"
                next-link="/human-practices/inclusivity"
                prev-title="INTEGRATED HP"
                prev-link="/human-practices/integrated-hp"
            />
        </template>
    </article-page>
</template>

<style scoped></style>
