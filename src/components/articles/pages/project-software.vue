<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import Header2 from "@/components/articles/components/Header2.vue"

onMounted(() => {
    document.title = "CASleuth | Project | Software"
})
</script>

<template>
    <article-page title="SOFTWARE">
        <template #default>
            <header1 text="Protocol" />
            <paragraph>
                <p>Welcome to Casleuth! We believe this software will facilitate your research.</p>
                <p>
                    On the main interface, you'll find two buttons. Click on the left one to access the database section, or click the right one to
                    use our software.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-1-new.png" alt="" class="w-full" />
                </Image>
            </paragraph>

            <Header2 text="Database" />
            <paragraph class="pt-[50px]">
                <p>
                    In the database section, there's a search interface. You can query virus-related information by entering the organism name or its
                    ACCESSION NUMBER. For example, searching for "Saesbyeol virus" will yield several results. You can select all or part of the virus
                    data and click the Download button in the top left corner to download. Clicking on a specific result, such as NC_040461.1, will
                    show you detailed information.
                </p>

                <div class="flex flex-col gap-4">
                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-2-new.png" alt="" class="w-full" />
                    </Image>

                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-3-new.png" alt="" class="w-full" />
                    </Image>

                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-4-new.png" alt="" class="w-full" />
                    </Image>

                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-5-new.png" alt="" class="w-full" />
                    </Image>
                </div>

                <p>
                    If the corresponding virus doesn't have associated Cas proteins, a warning sign will appear. Simply choose other Cas proteins to
                    proceed.
                </p>

                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-6-new.png" alt="" class="w-[750px]" />
                </Image>

                <p>
                    The interface is divided into two parts. The top part contains basic virus information, including virus type and sequence length.
                    Clicking the dark blue and light blue triangles in the upper right corner can display other results for the same keyword. In the
                    top left corner, you can download either basic virus information or gRNA database information. You can choose to download both or
                    each part separately. Scrolling down, you'll find the output results for the corresponding Cas proteins.
                </p>
                <p>
                    In the gRNA interface, there are also two parts. The top half shows the position of the first base or index of each gRNA on the
                    sequence. Each gRNA's specific position on the sequence is marked in blue. The bottom half displays the top ten gRNA sequences
                    predicted by our software for the virus sequence, ranked from top to bottom based on their scores.
                </p>

                <div class="flex flex-col gap-4">
                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-7-new.png" alt="" class="w-full" />
                    </Image>

                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-8-new.png" alt="" class="w-full" />
                    </Image>

                    <Image>
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-9-new.png" alt="" class="w-[800px]" />
                    </Image>
                </div>
            </paragraph>

            <Header2 text="Software" />
            <paragraph class="pt-[50px]">
                <p>
                    Software Section: Click on "Software" to enter this part. The input is divided into two sections. The first step involves
                    inputting sequence information: you can upload a local fasta file or directly input fasta-formatted sequences into the input box.
                    The second step is selecting the Cas protein for prediction. For DNA viruses, choose the Cas9 protein, while for RNA viruses, you
                    can select either Cas12a or Cas13a proteins. After making your selection, click GO to start the analysis.
                </p>

                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-10-new.png" alt="" class="w-[700px]" />
                </Image>

                <p>
                    You'll receive results for the corresponding Cas protein. The results are similar to the gRNA section in the database, including
                    the index position on the sequence and specific information and scores for each gRNA.
                </p>

                <Image>
                    <iframe
                        title="Tongji-Software: Introduction to CASleuth (2023) [English]"
                        width="560"
                        height="315"
                        src="https://video.igem.org/videos/embed/f99b89a0-c05d-4e5c-8937-affe26a067a2"
                        frameborder="0"
                        allowfullscreen=""
                        sandbox="allow-same-origin allow-scripts allow-popups"
                    ></iframe>
                </Image>
            </paragraph>

            <header1 text="WEB APP" />
            <paragraph>
                <p>
                    Please click <a href="https://tongji-software-igem2023.com/#/home">here</a> to use our software and database! Our software can
                    accept virus nucleic acid sequence and automatically find most efficient PAM sites for sgRNA.
                </p>
            </paragraph>

            <header1 text="FEEDBACK" />
            <paragraph>
                <p>
                    After the completion of our software and database, we reached out to senior graduate students from collaborating laboratories for
                    a trial to gather relevant feedback. We were pleased to receive practical and constructive improvement suggestions.
                </p>
                <p>
                    The senior graduate students provided positive feedback following their use of the software. They expressed that it greatly
                    assisted them in the design of efficient sgRNAs for their experimental work. Previously, they would typically randomly select a
                    segment from a sequence or follow some empirical rules for sgRNA design. The use of our tool significantly enhanced the efficiency
                    of sgRNA design and demonstrated higher cleavage efficiency in subsequent experiments.
                </p>
                <p>Additionally, they offered several suggestions, which we incorporated to enhance user-friendliness:</p>
                <p>
                    1. We added a download feature in the database, allowing users to offline access efficiently designed sgRNA sequences targeting
                    various common viruses predicted by our tool.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-11-new.png" alt="" class="w-[700px]" />
                </Image>
                <p>
                    2. We further visualized the presentation of results in both the database and software. We represented the entire sequence with a
                    single line, marked with target sequence indices for each sgRNA, providing an overview of the sgRNA target sequence's position
                    within the virus sequence.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-12-new.png" alt="" class="w-[700px]" />
                </Image>
                <p>
                    3. We introduced a text box in the results presentation section displaying the virus sequence, with the sgRNA target sequence
                    highlighted in deep blue.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-13-new.png" alt="" class="w-[700px]" />
                </Image>
                <p>
                    4.In the results presentation section, we used varying shades of background box colors to intuitively distinguish sgRNA
                    efficiency, with darker colors indicating higher efficiency.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-software-14-new.png" alt="" class="w-[700px]" />
                </Image>
                <p>These enhancements received unanimous praise from the trial users.</p>
            </paragraph>

            <next-prev-page
                prev-title="NOTEBOOK"
                prev-link="/tongji-software/project/notebook"
                next-title="PROJECT SAFETY"
                next-link="/tongji-software/project/safety"
            />
        </template>
    </article-page>
</template>

<style scoped></style>
