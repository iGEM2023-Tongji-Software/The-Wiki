<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Implementation"
})
</script>

<template>
    <article-page title="IMPLEMENTATION">
        <template #default>
            <header1 text="How to USE CASlEUth?" />
            <p>To be completed.</p>

            <header1 text="Who arE thE targEt UsErs?" />
            <header2 text="1.Clinical Practitioners and Infectious Disease Experts:" />
            <paragraph :padding-top="50">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-impl-1.png" alt="" width="300" class="float-right ml-5" />
                <p>
                    CASleuth offers a rapid, precise, and highly specific method for efficient sgRNA selection. It provides reliable guidance for
                    frontline clinical practitioners and infectious disease experts who opt to employ the CRISPR-Cas system for viral nucleic acid
                    detection. This significantly narrows down the scope of sgRNA selection, assisting in confronting infectious diseases,
                    particularly during sudden public health emergencies.
                </p>
            </paragraph>

            <header2 text="2.Patients Affected by Viral Infections:" />
            <paragraph :padding-top="50">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-impl-2.png" alt="" width="300" class="float-left mr-5" />
                <p>
                    CASleuth empowers nucleic acid testing based on the CRISPR-Cas system, known for its convenience, speed, and high sensitivity. It
                    aids patients afflicted by viral infections to undergo early screening and rapid diagnosis without the need for specialized
                    equipment or personnel. Notably, this system is cost-effective, making it particularly accessible to impoverished regions and
                    communities.
                </p>
            </paragraph>

            <header2 text="3.Synthetic Biologists:" />
            <paragraph :padding-top="50">
                <p>
                    While CASleuth finds application in viral nucleic acid detection, its utility extends far beyond this domain. Essentially,
                    CASleuth serves as a robust sgRNA prediction tool, offering rapid sgRNA screening for synthetic biologists engaged in genetic
                    editing of engineering microbes for chassis design or gene circuit construction using the CRISPR-Cas system.
                </p>
                <p>
                    How to Implement in the Real World: By extensively collecting data from published papers and public databases, we have devised an
                    accurate high-efficiency sgRNA prediction tool targeting viral nucleic acid detection. Alongside this tool, we have built
                    VIRUSCUFFS, an efficient sgRNA database for common DNA and RNA viruses. Our objective is to provide support for viral nucleic acid
                    detection through the CRISPR-Cas system, assisting more people in combating viral threats, particularly those emerging from sudden
                    infectious disease outbreaks.
                </p>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-impl-3.png" alt="" width="300" class="float-right ml-5" />
                <p>
                    In practical terms, researchers or clinical practitioners can query our database for high-efficiency sgRNA sequences targeting
                    specific viruses of interest. Alternatively, they can employ our online tool to predict high-efficiency sgRNA sequences for
                    entirely novel gene sequences. This aids them in swiftly establishing CRISPR-Cas-based nucleic acid detection systems tailored to
                    specific viruses. Moreover, our tool assists in efficient sgRNA design for gene editing at target sites of interest, enhancing the
                    convenience of CRISPR-Cas technology's application in synthetic biology.
                </p>
            </paragraph>

            <header1 text="ChallEngEs FacEd" />
            <paragraph>
                <p>
                    Despite successfully establishing a high-efficiency sgRNA prediction model based on Convolutional Neural Networks (CNN) and
                    deriving the VIRUSCUFFS database for common viruses, our work remains subject to continuous improvement to meet real-world
                    challenges:
                </p>
            </paragraph>

            <header2 text="1.Exploration of Complex and Modern Deep Learning Architectures:" />
            <paragraph :padding-top="50">
                <p>
                    While the CNN serves as a foundational architecture, the realm of modern deep learning offers more intricate frameworks that hold
                    promise for enhancing sgRNA binding efficiency prediction. Our work lays a groundwork, but further application of advanced
                    architectures in this field is anticipated.
                </p>
            </paragraph>

            <header2 text="2.Incomplete Understanding of Factors Influencing sgRNA Binding Efficiency:" />
            <paragraph :padding-top="50">
                <p>
                    Initially, we trained the model solely on sgRNA sequences, yielding suboptimal fitting accuracy. Incorporating epigenetic
                    information from target sequences during training significantly improved the model's accuracy. This suggests that the information
                    used for training is still insufficient in explaining sgRNA binding efficiency. Further research should explore additional factors
                    affecting binding efficiency, aiming to elucidate these mechanisms from chemical and physical perspectives.
                </p>
            </paragraph>

            <header2 text="3.Lack of Experimental Data Presents Validation Challenges:" />
            <paragraph :padding-top="50">
                <p>
                    Although we validated our model on multiple independent datasets with promising results, our work remains computationally
                    simulated and may diverge from real-world scenarios. Validation of the binding efficiency patterns revealed by our model requires
                    high-throughput experimental data. Unfortunately, experimental data for sgRNA binding efficiency remains limited, and systematic
                    biases and noise arising from diverse experimental contexts are present. Rigorous high-throughput experiments are needed for
                    further validation.
                </p>
            </paragraph>

            <next-prev-page next-link="/tongji-software/project/model" next-title="PROJECT MODEL" prev-link="/tongji-software/project/design" prev-title="PROJECT DESIGN" />
        </template>
    </article-page>
</template>

<style scoped></style>
