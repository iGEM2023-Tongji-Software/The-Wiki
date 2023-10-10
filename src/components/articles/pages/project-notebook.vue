<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Notebook"
})
</script>

<template>
    <article-page title="NOTEBOOK">
        <template #default>
            <header1 text="2023.2" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Set up our team, Tongji-Software 2023</li>
                </ol>
            </paragraph>

            <header1 text="2023.3-2023.4" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Investigate former projects of software track to learn background and related inspirations</li>
                    <li>(2) Determine our research direction of Crispr Virus Detection</li>
                    <li>(3) Communicate with Prof.Liu and Prof.Chuai for the first time</li>
                    <li>(4) Literature research</li>
                    <li>(5) Register team</li>
                    <li>(6) Learn front-end and back-end knowledge</li>
                    <li>(7) Understand the basic concepts of genetic engineering</li>
                    <li>(8) Communicate with team leaders of Tongji-Software 2021 and Tongji-Software 2022</li>
                    <li>(9) Attending a CCiC networking event for the first time</li>
                </ol>
            </paragraph>

            <header1 text="2023.5" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Crispr virus detection & machine learning related literature research</li>
                    <li>(2) Collect raw data and design preliminary project proces</li>
                    <li>(3) Design team logo</li>
                    <li>(4) Create the project's own Github repository for project management</li>
                    <li>(5) Preliminary game outline design</li>
                    <li>(6) Design visual elements for our team</li>
                    <li>(7) Design the Cas protein IP image</li>
                    <li>(8) Design the HP forms for our project</li>
                    <li>(9) Define the fundamental design language of wiki webpage, including framework, style, fonts, etc</li>
                    <li>(10) Attend Tongji iGEM Communicating Conference</li>
                    <li>(11) Communicate with SJTU-Software and USTC-Software for the first time</li>
                    <li>(12) Create our Wechat public account and post the first article</li>
                </ol>
            </paragraph>

            <header1 text="2023.6" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Model training</li>
                    <li>(2) Design a name for our project</li>
                    <li>(3) Conducting the Description section of the Wiki page</li>
                    <li>(4) Communicate with doctors and professors in Shanghai East Hospital</li>
                    <li>(5) Communicate with Tongji-China</li>
                    <li>(6) Organize Tongji Synbio Academic Salon for the first time</li>
                    <li>(7) Communicate with SYSU-Software for the first time</li>
                    <li>(8) Design and publish a questionnaire</li>
                    <li>(9) Adjust and optimize the design framework of wiki webpage</li>
                    <li>(10) Determine the format of our team's HP and design objectives</li>
                </ol>
            </paragraph>

            <header1 text="2023.7" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Communicate with Prof.Dong of Delonix Bioworks Ltd</li>
                    <li>(2) Incorporating epistatic information in the model</li>
                    <li>(3) Complete coding for acquisition of candidate gRNAs and ranking of their binding efficiency</li>
                    <li>(4) Creation of Unity3D-based CASleuth Virus Detective game</li>
                    <li>(5) Finish designing the main Wiki page</li>
                    <li>(6) Attend CCiC 2023 Conference online</li>
                    <li>(7) Communicate with CJUH-JLU-China, WHU-China, NJU-China, Tsinghua-A</li>
                    <li>(8) Organize China CRISPR&Synbio Online Meeting</li>
                    <li>(9) Organize synbio popularization activities for Middle School Student Science Camp</li>
                    <li>(10) Organize synbio popularization activities for children in nearby communities</li>
                    <li>(11) Attend an online meeting on science popularization picture book for the first time</li>
                    <li>(12) Adjust the content of wiki webpage and modify visual interactive elements</li>
                    <li>(13) Build game framework and game scenes</li>
                    <li>(14) Define the framework of the brochure for education</li>
                    <li>(15) Determine the framework for the explanatory animation video script</li>
                </ol>
            </paragraph>

            <header1 text="2023.8" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Provide an explanation of the features extracted by convolutional neural networks</li>
                    <li>(2) Collect raw data for databases</li>
                    <li>(3) Construct database</li>
                    <li>(4) Write the picture book for education with three other teams</li>
                    <li>(5) Importing new material to process and optimize the game</li>
                    <li>(6) Initial conceptualization of the software for the project</li>
                    <li>(7) Attend AI&Synbio Online Meeting</li>
                    <li>(8) Optimize visual elements of wiki</li>
                    <li>(9) Create game animations, interactive interfaces, and enhance the gaming experience</li>
                    <li>(10) Produce explanatory team project promotion video</li>
                    <li>(11) Design the brochure for education</li>
                    <li>(12) Set up the software design framework</li>
                    <li>(13) Create an official account and publish relevant videos and audio on bilibili and Himalaya</li>
                </ol>
            </paragraph>

            <header1 text="2023.9" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Software development is accomplished using a front-end and back-end split design</li>
                    <li>(2) Additions to improve the Wiki chapter</li>
                    <li>(3) Enhance the interactive experience of wiki website</li>
                    <li>(4) Improve team project promotion video</li>
                    <li>(5) Refine and adjust software and database design</li>
                    <li>(6) Finalize the framework and script for the presentation video</li>
                    <li>(7) Communicate with NJU-China, Genescript online.</li>
                    <li>(8) Meet SJTU-Software and communicate with them</li>
                </ol>
            </paragraph>

            <header1 text="2023.10" />
            <paragraph>
                <ol class="list-none">
                    <li>(1) Optimize game, wiki pages, and the software</li>
                    <li>(2) Enhance software interactive experience</li>
                    <li>(3) Produce the presentation video</li>
                    <li>(4) Communicate with Tsinghua-A online</li>
                    <li>(5) Hold an online science-popularization meeting of CRISPR ＆ synthetic biology</li>
                </ol>
            </paragraph>

            <next-prev-page prev-title="PROJECT CONTRIBUTION" prev-link="/contribution" next-title="PROJECT SOFTWARE" next-link="/project/software" />
        </template>
    </article-page>
</template>

<style scoped></style>
