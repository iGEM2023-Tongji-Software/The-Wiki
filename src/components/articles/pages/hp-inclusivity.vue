<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Quote from "@/components/articles/components/Quote.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | HP | Inclusivity"
})
</script>

<template>
    <article-page title="INCLUSIVITY">
        <template #default>
            <quote>
                <p>“Exclusivity detracts collaboration. Inclusivity attracts participation.”</p>
                <p class="text-right mt-4">——Janna Cachola</p>
            </quote>
            <paragraph class="mt-5">
                <p>
                    Every individual is unique, but science should strive to benefit everyone. As scientific researchers, we consider diverse
                    populations throughout the entire process and aim to be as inclusive as possible, ensuring that everyone is concluded.
                </p>
            </paragraph>

            <header1 text="FriENdly to colorbliNdNEss" />
            <paragraph>
                <p>
                    Surveys indicate that there are 300 million individuals worldwide who are either color blind or have color vision deficiencies.
                    Therefore, we fully considered the feelings of them when selecting colors for our wiki. We have chosen vibrant colors with high
                    contrast to avoid situations where some individuals may have difficulty distinguishing different colors. We have adjusted our wiki
                    to grayscale mode to ensure that all individuals with color blindness can view our wiki as clearly as others.
                </p>
            </paragraph>
            <div class="flex gap-3 items-center justify-center mx-auto my-5">
                <Image style="width: 500px"
                    ><img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-inv-1.png" alt="" class="w-full"
                /></Image>
                <Image style="width: 500px"
                    ><img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-inv-2.png" alt="" class="w-full"
                /></Image>
            </div>

            <header1 text="FriENdly to pEoplE with coNcENtratioN disordErs" />
            <paragraph>
                <p>
                    Some individuals may have reading disabilities or poor eyesight. Therefore, when designing our wiki, we fully considered their
                    needs. We chose rounded fonts and increased the font size, while bolding certain key words to ensure that everyone can clearly
                    read all the text.
                </p>
                <p>
                    In addition to that, in our education activities, we have designed alternative science communication methods such as games and
                    illustrated books to ensure that individuals with reading disabilities can understand our project as well as the knowledge of
                    CRISPR and synthetic biology. Click here to see relevant information.
                </p>
            </paragraph>

            <header1 text="FriENdly to PEOPLE WITH VISUAL IMPAIRMENT" />
            <paragraph>
                <p>
                    According to statistics from authoritative agencies, China has the highest number of blind individuals in the world, with
                    approximately 5 million people accounting for 18% of the world's blind population. In addition, there are over 6 million
                    individuals with low vision. Therefore, we place great importance on inclusivity for individuals with visual impairments. As part
                    of our education efforts, we have specifically included podcast segments to help visually impaired individuals access relevant
                    information. Click here to see relevant information.
                </p>
            </paragraph>

            <header1 text="FriENdly to PEOPLE WITH HEARING IMPAIRMENT" />
            <paragraph>
                <p>
                    According to statistics from the World Health Organization, currently over 5% of the world's population (430 million people) have
                    disabling hearing loss. Therefore, in our education parts, we fully consider the needs of individuals with hearing loss. They can
                    access information related to our project and knowledge about CRISPR and synthetic biology through various forms such as mini
                    games, brochures, picture books, and our WeChat official account.
                </p>
            </paragraph>

            <next-prev-page
                prev-title="COMMUNICATION"
                prev-link="/human-practices/communication"
                next-title="SUSTAINABLE"
                next-link="/human-practices/sustainable"
            />
        </template>
    </article-page>
</template>

<style scoped></style>
