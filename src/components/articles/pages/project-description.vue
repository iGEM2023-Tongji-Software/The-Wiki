<script setup>
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { integer, MersenneTwister19937 } from "random-js"
import { onMounted } from "vue"

const engine = MersenneTwister19937.autoSeed()
const h1_image = integer(1, 6)(engine)

onMounted(() => {
    document.title = "CASleuth | Project | Description"
})
</script>

<template>
    <article-page title="DESCRIPTION">
        <template #default>
            <header1 text="Why this projEct?" :image="h1_image"></header1>
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-description-1.png"
                    alt=""
                    style="float: right"
                    width="250"
                />

                <p>
                    The COVID-19 pandemic has affected nearly everyone's life, and in the process of combating the pandemic, rapid and accurate virus
                    detection methods are crucial. Traditional PCR virus detection methods must rely on laboratory facilities and the experimental
                    procedures are extremely complex. It often takes several hours from sample collection to detection, making it difficult and
                    inefficient to screen and diagnose individuals during a major outbreak, particularly in technologically underdeveloped
                    areas.Therefore, the idea of using faster, simpler and cheaper infectious disease testing methods come to our mind,and we hope it
                    can change the current situation.
                </p>

                <p>
                    Under the circumstances, we have found a new weapon for virus detection - a new detection tool based on the CRISPR-Cas system.
                    Compared with traditional PCR methods, CRISPR-Cas detection tools are considered to have a good future, being more rapid,
                    portable, economical and requiring less environmental equipment. Furthermore, the form of direct detection using test kits is also
                    more friendly for impoverished areas affected by pandemic.In virus detection methods based on CRISPR system, the targeting
                    efficiency of cas protein-bound gRNA (guide RNA) is a key factor for accurate detection.
                </p>

                <p>
                    We have learned that the majority of existing gRNA design methods for virus detection only use one single CRISPR-Cas system to
                    target a single or a few viruses systematically.Currently,there is a lack of a concise, rapid and accurate gRNA design tool for
                    different viruses and different CRISPR-Cas systems. Therefore, related research can fill the gaps in the field of synthetic
                    biology.
                </p>

                <p>Thus, our project, CASleuth, was born.</p>
            </paragraph>

            <header1 text="How wE start?" :image="h1_image" />
            <paragraph>
                <p>
                    However, we didn’t know how to utilize our knowledge to improve the current situation of virus detection. Fortunately, after
                    extensive research, we discovered that most traditional gRNA design tools focused on the gene editing instead of virus detection.
                    This realization inspired us to create a gRNA design tool by recommending gRNA that could detect the target virus efficiently to
                    reach our purpose of making large-scale virus detection easier.
                </p>

                <p>
                    While exploring the iGEM projects of recent years, we have came across some CRISPR virus detection methods applied in synthetic
                    biology but relevant software was quite rare. After consulting and communicating with our PI, We conducted a brainstorming session
                    and finalized the details of our project. Following that, we started our project by collecting relevant gRNA data and applying
                    methods such as deep learning.
                </p>
            </paragraph>

            <header1 text="What wE arE doiNg?" :image="h1_image" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-description-2.png"
                    alt=""
                    class="float-left m-5"
                    width="250"
                />
                <p>
                    Machine learning would benefit viral detection by designing assays that are more sensitive than existing ones.That is surprising
                    in light of machine learning and the explosion of viral genomic data. Our project used a deep learning framework based on
                    convolutional neural networks to analytically compute the relationship between gRNA sequence, target sequence and gRNA activity.
                    After training, we developed a gRNA design tool applied to CRISPR virus detection to recommend gRNAs that can efficiently detect
                    the target virus. We finally put the recommended results into the database we constructed.
                </p>

                <p>
                    We believe that in the near future, CRISPR-based virus detection method will fill the gap of global healthcare system. We hope it
                    will provide more opportunities for large-scale population screening, wider dissemination of diagnostic technologies and field
                    deployment of diagnostics to control the spread of infectious diseases.
                </p>

                <p>A brief summary of the project process is as follows:</p>

                <ol>
                    <li>
                        Collect the guide sequences, target sequences, sequences before and after the target sequence and the corresponding
                        fluorescence intensity enhancement rate for virus detection using cas13a protein.
                    </li>

                    <li>
                        Collect the guide sequences, target sequences, chromatin accessibility information and insertion-deletion frequency of target
                        sequences for cas12a protein and cas9 protein.
                    </li>

                    <li>
                        Use the above collected data to train to predict the activity of gRNA in a deep learning framework based on convolutional
                        neural networks .
                    </li>

                    <li>Explain the features extracted by the convolutional neural network.</li>

                    <li>Rank the efficiency of gRNA from highest to lowest.</li>

                    <li>
                        Design a gRNA design tool applied to Crispr virus detection to recommend gRNAs that can efficiently detect the target virus.
                    </li>

                    <li>
                        Collect the gene sequences of different viruses and extract the target sequence and the corresponding candidate gRNAs from the
                        gene sequences of different viruses.
                    </li>

                    <li>Use our designed gRNA design tool to obtain gRNA that can detect the above virus efficiently.</li>

                    <li>Construct a database of different viruses and their corresponding efficient gRNAs applied to Crispr virus detection.</li>
                </ol>
            </paragraph>

            <header1 text="BrightENEd dot aNd difficUltiEs wE OVERCOME" :image="h1_image" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-description-3.png"
                    alt=""
                    class="float-right m-5"
                    width="250"
                />
                <p>
                    In the footsteps of our project, we have not moved forward with smooth sailing. Like solving a puzzle, we have tried to explore
                    the binding mechanism of each CRISPR-cas system first before developing the optimal gRNA algorithm.
                </p>
                <p>
                    Then, downloading and organizing the mountains of data became one of our challenges. We have to find valuable information from
                    this pile of data in order to uncover its treasures.
                </p>
                <p>
                    Of course, there were some unexpected decisions in the project. In the absence of direct virus detection data, we used editing
                    efficiency as a substitute. This alter ensured the amount of our training data.
                </p>
                <p>
                    What was even more surprising was the incorporation of epigenetic factors. This seemingly uncommon combination had the unexpected
                    effect of making our training even better.
                </p>
                <p>
                    Our accuracy was not satisfactory in the initial machine-learning model. After reviewing the literature and communicating with
                    experts, we elevated it to new heights.
                </p>
                <p>
                    What makes our project unique compared to existing platforms is that we have extended our database to include a variety of Cas
                    systems. Furthermore, we have transformed the classification into regression, which offers the users more options.
                </p>
                <p>
                    Finally, our platform not only seeks to aid with virus detection but also strives to be user-friendly. For example, we present
                    target sequences and running efficiency in a visual way to researchers, making research more intuitive, understandable, and
                    interesting.
                </p>
            </paragraph>

            <next-prev-page next-link="/tongji-software/project/design" next-title="PROJECT DESIGN" />
        </template>
    </article-page>
</template>
