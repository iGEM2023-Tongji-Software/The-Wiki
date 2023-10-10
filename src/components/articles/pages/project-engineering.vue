<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Engineering"
})
</script>

<template>
    <article-page title="ENGINEERING">
        <template #default>
            <paragraph>
                <p>
                    This year, we achieved engineering success by following the engineering design cycle: Born → Design → Build → Test → Learn →
                    Design...
                </p>
            </paragraph>

            <header1 text="BoRn" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-1.png"
                    alt=""
                    class="w-[300px] float-right my-5 ml-5"
                />
                <p>
                    Over the past three years, the COVID-19 pandemic has affected people's lives around the world. Infectious diseases are global
                    health problems that affect billions of people. In the early stage of our project, we saw Crispr virus detection as a promising
                    new way for virus detection. At the same time, we found that how to select the efficient gRNAs is a challenge, and scientists
                    often spend a lot of time finding it from the vast amount of literature and to conduct preliminary experiments. Compared with wet
                    experiments, computational methods of predicting the activity of gRNAs are much more efficient, saving time with lower cost
                    meanwhile. By communicating with Prof.Liu , we think this is a meaningful research direction. So, we started.
                </p>
            </paragraph>

            <header1 text="PrElIMiNary DEsign" />
            <paragraph>
                <p>
                    In the preliminary stage, we chose cas9, cas12a and cas13a as the basis for the design of the project. Cas12a is a protein in the
                    CRISPR system that can be used for virus detection. Its principle of achieving virus detection consists of two main steps:
                    recognition and cleavage. To summarize, Cas12a achieves virus detection by binding to crRNA to form a complex that activates and
                    cleaves the target DNA substrate upon recognition of the target virus, while releasing the fluorescent probe, which restores
                    fluores the fluorescent signal and ultimately achieves virus detection. The principle of cas13a detection is similar to this.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-2.png" alt="" />
                </Image>
                <p>
                    Cas9 virus detection technology is still in the developmental stage, which integrates a reporter gene into the LTR sequence of the
                    virus, and the reporter gene cannot be expressed when the target sequence is disrupted. The reporter gene can be selected from
                    β-galase or luciferase, etc.
                </p>
                <p>
                    So, based on the principle of the CRISPR virus detection, we would like to investigate design methods for efficient gRNAs for
                    Cas9, Cas12a and Cas13a.
                </p>
                <p>
                    we designed our basic analysis method. First, constructed a convolutional neural network (CNN) for predicting the binding
                    efficiency between sgRNA and target sequences. Then, obtain target sequences of target viruses using pam sequences and PFS sites.
                    Finally, use a trained convolutional neural network model to provide a score for each input sequence, and the gRNAs are sorted in
                    descending order of the scores as a means of recommending efficient gRNAs.
                </p>
            </paragraph>

            <header1 text="BUILD" />
            <paragraph>
                <p>Our initial details of build as follows:</p>
            </paragraph>

            <header2 text="1. Construct a Convolutional Neural Network (CNN)" />
            <paragraph :padding-top="50">
                <ul>
                    <li>A CNN is designed to predict the binding efficiency between sgRNA (single-guide RNA) and target sequences.</li>
                    <li>
                        CNNs are effective in capturing local patterns and features within input data, making them suitable for sequence analysis
                        tasks.
                    </li>
                </ul>
            </paragraph>

            <header2 text="2. Obtain target sequences of target viruses using PAM sequences and PFS sites" />
            <paragraph :padding-top="50">
                <ul>
                    <li>
                        The PAM (Protospacer Adjacent Motif) sequence is a short DNA sequence required for Cas9 enzyme activity and cas12a enzyme
                        activity.
                    </li>
                    <li>
                        PFS (Protospacer Flanking Sequence) sites are regions adjacent to the target site that influence sgRNA binding efficiency for
                        cas13a enzyme activity.
                    </li>
                    <li>By considering PAM sequences and PFS sites, target sequences for the viruses of interest can be obtained.</li>
                </ul>
            </paragraph>

            <header2 text="3. Use a trained CNN model to provide a score for each input sequence" />
            <paragraph :padding-top="50">
                <ul>
                    <li>
                        The trained CNN model takes the target sequences as input and predicts the binding efficiency between sgRNA and these
                        sequences.
                    </li>
                    <li>
                        The output of the model is a score indicating the predicted efficiency or suitability of the sgRNA for targeting the
                        corresponding sequence.
                    </li>
                </ul>
            </paragraph>

            <header2 text="4. Sort gRNAs in descending order of scores for efficient gRNA recommendation" />
            <paragraph :padding-top="50">
                <ul>
                    <li>Based on the scores predicted by the CNN model, the gRNAs can be sorted in descending order.</li>
                    <li>
                        This sorting helps identify and recommend the most efficient gRNAs for the target sequences, as higher scores correspond to
                        better binding efficiency.
                    </li>
                </ul>
            </paragraph>

            <paragraph class="mt-5">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-3.png"
                    alt=""
                    class="w-[300px] float-left my-5 mr-5"
                />
                <p>
                    After conducting validation using the dataset, we have discovered that the initial design results are not optimal. Despite our
                    efforts to fine-tune the model's hyperparameters, the Spearman correlation coefficient for the Cas9 and Cas12a datasets
                    consistently stays within the range of 0.5-0.6. Hence, it is necessary for us to enhance the methodology.More detail can be found
                    in Model.
                </p>
            </paragraph>

            <header1 text="GROW" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-4.png" alt="" class="w-[360px] float-right" />
                <p>
                    Later, by communicating with Prof.Chuai, we further improved our analysis methods. Given that epigenetic information significantly
                    influences the efficiency of sgRNA and target sequence binding, particularly chromatin accessibility, it is imperative to
                    incorporate epigenetic information of the target sequences into the training data. So based on the original model, we adopted an
                    additional chromatin accessibility integration layer right before the regression output layer.
                </p>
                <p>
                    Finally, We obtained DNase-seq narrow peak data of our training data from the Encyclopedia of DNA Elements (ENCODE). When feeding
                    the target sequence into the model, make sure to incorporate chromatin accessibility information for the target sequence as
                    accessible.
                </p>
            </paragraph>

            <header1 text="CoMplEtE DEsigN" />
            <paragraph>
                <p>In addition, we have further expanded our software applications.</p>
                <p>
                    After communicate with Prof.Dong of Delonix Bioworks Ltd, we recognize that, when faced with the multitude of existing viruses in
                    the world, it would be more convenient to have a readily available database for direct querying, rather than relying solely on our
                    software for gRNA design through calculations and wet lab validations. Furthermore, such a database can encompass additional
                    information about the viruses. With continuous updates, it holds the potential to provide a comprehensive, one-stop design service
                    for CRISPR virus detection.
                </p>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-5.png"
                    alt=""
                    class="w-[360px] float-left mr-3"
                />
                <p>
                    In order to streamline user access and eliminate redundant computations, we meticulously gathered genomic sequences from an
                    extensive pool of 3317 DNA viruses and 9121 RNA viruses sourced from the reputable NCBI database. Our cutting-edge tool was then
                    deployed to accurately predict the efficiency of sgRNA targeting these diverse viral genomes. Leveraging advanced visualization
                    techniques, we meticulously curated and organized the prediction outcomes. The culmination of these efforts resulted in the
                    creation of a highly intuitive and user-friendly database. This invaluable resource empowers users to swiftly and efficiently
                    retrieve sgRNAs that effectively target common DNA viruses.
                </p>
            </paragraph>

            <header1 text="TEst aNd ValidatioN" />
            <paragraph>
                <p>
                    After building the model, we have to improve the effectiveness of the model from validation. At the initial stage, the prediction
                    obtained by our model was not satisfactory. Then we analyzed the reasons made several improvements, and finally got satisfactory
                    results.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-engineering-6.png" alt="" class="w-9/12" />
                </Image>
                <p>
                    In conclusion, we verified the performance of CASleuth in terms of dataset validation, improvement effect, model characterization,
                    and comparison with other existing models. Based on this evidence, we can determine that CASleuth is a reliable tool. It can
                    accurately predict gRNAs for different Cas, thus improving the efficiency of virus detection.
                </p>
            </paragraph>

            <header1 text="IMPROVEMENT" />
            <paragraph>
                <p>After completing our project, we identified areas for improvement:</p>
            </paragraph>

            <header2 text="1.Advanced Deep Learning Architectures:" />
            <paragraph>
                <p>
                    Exploring more complex deep learning models, such as RNNs, LSTMs, transformer-based models, and attention mechanisms, could
                    enhance sgRNA binding efficiency prediction.
                </p>
            </paragraph>

            <header2 text="2.Additional Epigenetic Data:" />
            <paragraph>
                <p>Incorporating more epigenetic data like CTCF, H3K4me3, DNase, and RRBS could further improve the precision of our model.</p>
            </paragraph>

            <header2 text="3.Self-Distillation:" />
            <paragraph>
                <p>
                    To mitigate limited experimental data, employing self-distillation during training can enhance model generalization and
                    compression.
                </p>
            </paragraph>

            <header2 text="4.Deeper Pattern Interpretation:" />
            <paragraph>
                <p>
                    Experimental validation and in-depth analysis are needed to understand the practical significance of the patterns influencing
                    sgRNA binding efficiency.
                </p>
            </paragraph>

            <next-prev-page next-link="/contribution" next-title="PROJECT CONTRIBUTION" prev-link="/project/model" prev-title="PROJECT MODEL" />
        </template>
    </article-page>
</template>

<style scoped></style>
