<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Contribution"
})
</script>

<template>
    <article-page title="CONTRIBUTION">
        <template #default>
            <header1 text="OVERVIEW" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-contribution-1.png"
                    alt=""
                    width="240"
                    class="float-left mr-5"
                />
                <p>
                    Our team have made contributions to the field of synthetic biology in many significant ways during this year. We have offered a
                    precise and highly specific method for efficient sgRNA selection and an efficient sgRNA database for common DNA and RNA viruses.
                    Hopefully, subsequent iGEM team can make more valuable attempts on this basis in the future. Extensive attempts have been made to
                    learn more about our project and about synthetic biology itself.
                </p>
            </paragraph>

            <header1 text="databasE & softwarE coNtribUtioN" />
            <paragraph>
                <p>
                    We chose a deep learning-based approach to capture the relationship between gRNA binding efficiency and relative factors like gRNA
                    sequence characteristics. We collected datasets from multiple papers and trained CNN networks with excellent performance. In
                    addition, in order to provide reliable gRNAs for the crispr detection of existing viruses, we constructed a database called
                    VIRUSCUFFS.
                </p>
                <p>
                    It is also worth noting that we not only shared the database and training models but also organized the data analysis process into
                    a workflow.
                </p>
            </paragraph>

            <header1 text="For syNthEtic biology & syNthEtic biology rEsEArchErs" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-contribution-2.png"
                    alt=""
                    width="280"
                    class="float-right ml-5"
                />
                <p>
                    CASleuth offers a rapid, precise, and highly specific method for efficient sgRNA selection. It provides reliable guidance for
                    frontline clinical practitioners and infectious disease experts who opt to employ the CRISPR-Cas system for viral nucleic acid
                    detection. This significantly narrows down the scope of sgRNA selection, assisting in confronting infectious diseases,
                    particularly during sudden public health emergencies.
                </p>
            </paragraph>

            <header1 text="for thE pUblic" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-contribution-3.png"
                    alt=""
                    width="360"
                    class="float-left mr-3"
                />
                <p>
                    We have done a lot of work to enhance the impact of synthetic biology. We have set up many media platforms where we have uploaded
                    many articles and videos about CRISPR-Cas system and virus detection. At the same time, we have developed a game called "CASleuth
                    Virus Detection" based on project principles. This game has well promoted synthetic biology and iGEM, and deepened people's
                    further understanding of CRISPR as well. We also conducted many offline activities. Click <a href="/tongji-software/education">Education</a> for
                    more details.
                </p>
            </paragraph>

            <header1 text="for iGEM coMMUNity" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-contribution-4.png"
                    alt=""
                    width="360"
                    class="float-right ml-5"
                />
                <p>
                    To further enhance efforts for the iGEM community, we participated in the advocacy exchange, CCiC, held by numerous iGEMers within
                    China. We also held a seminar with some iGEM teams from China to explore the future of artificial intelligence and synthetic
                    biology. We did these in order to promote the iGEM competition and bring our youth closer to the iGEM stage. Moreover, we
                    sincerely willing to provide information to future iGEMers to solve their difficulties in using our projects. Click
                    <a href="/tongji-software/human-practice/integrated-hp">integrated HP</a>
                    for more details.
                </p>
            </paragraph>

            <next-prev-page prev-title="PROJECT ENGINEERING" prev-link="/engineering" next-title="NOTEBOOK" next-link="/project/notebook" />
        </template>
    </article-page>
</template>

<style scoped></style>
