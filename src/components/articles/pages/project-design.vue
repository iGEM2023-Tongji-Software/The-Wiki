<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import { integer, MersenneTwister19937 } from "random-js"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

const engine = MersenneTwister19937.autoSeed()
const h1_image = integer(1, 6)(engine)

onMounted(() => {
    document.title = "CASleuth | Project | Design"
})
</script>

<template>
    <article-page title="DESIGN">
        <template #default>
            <header1 :image="h1_image" text="BackgroUNd" />
            <paragraph>
                <p>Our program is inspired by the Crispr nucleic acid detection technology.</p>
                <p>
                    Over the past three years, the COVID-19 pandemic has affected people's lives around the world. Infectious diseases are global
                    health problems that affect billions of people. The development of rapid and sensitive diagnostic tools is key to successfully
                    control the plague. nucleic acid detection with PCR is very specific and sensitive, but are time-consuming and require expensive
                    laboratory environments and trained personnel; therefore, it is not available in resource-limited areas, for rapid mass screening
                    purposes, and in outbreak and epidemic situations. There is an urgent need to develop new, rapid and affordable tests for
                    immediate diagnosis.
                </p>
                <p>
                    Important features of CRISPR diagnostics are simplicity, component stability, no need to meet isothermal conditions for each step,
                    and minimal equipment. CRISPR diagnostics may fill a gap in the global healthcare system.
                </p>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-8.png"
                    alt=""
                    width="300"
                    class="float-right ml-5"
                />
                <p>
                    Simply put, in the CRISPR/Cas system, Cas protein and gRNA form a complex, and then under the guidance of the gRNA, bind to the
                    target nucleic acid sequence present in the environment, and then the Cas protein’s "incidental cleavage activity" will be
                    activated, which will fragment the fluorescent labeled probe in the system and emit a fluorescent signal, thus characterizing the
                    presence of the target sequence and achieving the purpose of virus detection. It can be found that the most important function in
                    this system is the gRNA that binds specifically to the viral nucleic acid sequence. We would like to investigate design methods
                    for efficient gRNAs for Cas9, Cas12a and Cas13a.
                </p>
            </paragraph>

            <header1 :image="h1_image" text="METHODS" />
            <paragraph>
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-9.png"
                    alt=""
                    width="300"
                    class="my-5 mr-5 float-left"
                />
                <p>
                    With a plenty of background investigations, we established the 'golden rule' of project analysis: Factors affecting gRNA binding
                    efficiency include gRNA sequence characteristics, RNA secondary structure, and the apparent characteristics of the target
                    sequence. We chose a deep learning-based approach to capture the relationship between these factors and gRNA binding efficiency.
                    It can be divided into the following four aspects: data collection and preprocessing, convolutional neural network model training,
                    feature interpretation, acquisition of candidate gRNAs and ranking of their binding efficiency. In addition, in order to provide
                    reliable gRNAs for the crispr detection of existing viruses, we constructed a database called VIRUSCUFFS.
                </p>
            </paragraph>

            <header2 text="Data Collection and Preprocessing" />
            <paragraph :padding-top="50">
                <p>
                    We first obtained large-scale data sets of cas12a activity at 16,292 lentivirally integrated target sequences from the literature
                    where authors use high-throughput method and guide sequences in HEK293T cells. The high-throughput experiments led to the
                    generation of data sets HT 1, which consist of target sequence compositions and corresponding indel frequencies.
                </p>
                <p>
                    In the same literature, we also obtained three independent data sets of cas12a activities at endogenous sites in two different
                    cell lines, HEK293T and HCT116 (data sets HEK-lenti, HEK-plasmid, and HCT-plasmid).
                </p>
                <p>
                    For data sets of cas13a activity, we collected a library of 19,209 unique LwaCas13a guide–target pairs from the literature. The
                    library has a sequence composition representative of viral diversity. The activity was defined as the logarithm of the
                    fluorescence growth rate. The dataset consists of target sequences compositions, gRNA sequences compositions, sequences
                    compositions of 20nt before and after target sequence and corresponding fluorescence growth rate.
                </p>
                <p>
                    For data sets of cas9 activity, we gathered experimental data from four cell lines, namely hct116 (Hart T et al. 2015), hela (Hart
                    T et al. 2015), hek293t (Doench JG et al. 2016), and hl60 (Wang T et al. 2014), where the CRISPR-Cas9 system was employed for gene
                    knockout to enable functional gene screening. This dataset was curated, non-redundant data was extracted, and a normalization
                    process was applied. This compilation yielded an on-target dataset encompassing 15,000 sgRNAs, targeting 1,071 distinct target
                    sequences (Gilbert et al. 2014).We aim to assess the efficacy of CRISPR-Cas9-mediated knockout using gRNAs as a measure of the
                    binding efficiency between gRNAs and target sequences.
                </p>
                <p>
                    To render data from distinct experimental systems comparable, we performed a normalization procedure. We employed a collaborative
                    filtering-based normalization approach. Then, we performed rank normalization on the normalized data.
                </p>
                <p>
                    For the cas9 and cas12a proteins, it is important to include epigenetic information of the target sequences in the training data.
                    We obtained DNase-seq narrow peak data from the Encyclopedia of DNA Elements (ENCODE). We aligned the positions of the target
                    sequences in the experimental data to the narrow peaks on the chromosomes.
                </p>
            </paragraph>

            <header2 text="Convolutional Neural Network Model Training" />
            <paragraph :padding-top="50">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-10.png"
                    alt=""
                    width="300"
                    class="m-5 float-right"
                />
                <p>We employed a one-hot encoding approach for both the nucleotide sequences and chromatin accessibility levels of the data.</p>
                <p>
                    We trained the proposed model in two main steps. (1) Model selection and pre-training of the entire architecture and (2)
                    fine-tuning with endogenous target data considering an additional chromatin accessibility input, which led to the development of
                    the model. For the three cas proteins, we constructed three different convolutional neural networks.
                </p>
                <p>
                    In both steps, we optimized the loss function using the Adam optimizer. For the cas12a and cas13a datasets, we define the loss
                    function as the mean square error, and for the cas9 dataset, we define the loss function as SmoothL1Loss.
                </p>
                <p>First we split the dataset by dividing it into training set and test set.</p>
                <p>
                    Then, to setup hyperparameters, for the cas12a and cas13a datasets, we used a five-fold cross-validation method. For the cas9
                    dataset, we initially used the optuna package for parameter tuning in the hope of selecting the optimal optimizer, but our
                    subsequent studies found that the tuning of these parameters had a minimal impact on the model's accuracy has a negligible effect.
                </p>
                <p>After the training loop concludes, the model's Spearman correlation coefficient is calculated to assess its performance.</p>
                <p>
                    For cas9 and cas12a, to take chromatin accessibility as well as the learned sequence representations into account, we adopted an
                    additional chromatin accessibility integration layer right before the regression output layer.
                </p>
            </paragraph>

            <header2 text="Feature Interpretation" />
            <paragraph :padding-top="50">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-11.png"
                    alt=""
                    width="300"
                    class="mr-5 float-left"
                />
                <p>
                    To understand which features in the dataset are important for Cas protein activity, we used Salience Maps to visualize model
                    features. The basic principle of this approach is to compute the loss of mean square error between the model predictions and the
                    target output, obtain the gradient between the predictions and the input sequence, and consider that the larger the absolute value
                    of the gradient, the more important the feature is.
                </p>
            </paragraph>

            <header2 text="Acquisition of Candidate gRNAs and Ranking of their Binding Efficiency" />
            <paragraph :padding-top="50">
                <p>
                    Upon completing the model training, we established a streamlined script to automate the process. This script is designed to accept
                    a FASTA-format file as input. It systematically identifies potential protospacer adjacent motif (PAM) sites suitable for the
                    CRISPR-Cas9 system and CRISPR-Cas12a system within the provided sequences to generate target sequences. For CRISPR-Cas13a system,
                    it automatically recognizes 28-nt DNA sequences as target sequences through a sliding window. Following the principles of base
                    complementarity, corresponding single-guide RNA (sgRNA) sequences are generated.
                </p>
                <p>
                    Subsequently, these sgRNA sequences are fed into our pre-trained convolutional neural network (CNN) model. The script then
                    automates the collection of regression scores provided by the CNN for each input sequence. The collected scores are organized in
                    descending order, resulting in an output file containing three columns: sequence, index, and score. Additionally, the script
                    displays the top 10 results on the screen.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-3.png" alt="" width="526" />
                </Image>
            </paragraph>

            <header2 text="VIRUSCUFFS Construction" />
            <paragraph :padding-top="50">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-12.png"
                    alt=""
                    width="250"
                    class="m-5 float-right"
                />
                <p>
                    At this stage, we have developed a convolutional neural network (CNN)-based tool capable of predicting the efficiency of gRNA and
                    target sequence binding. To facilitate user access and prevent redundant computations, we gathered genomic sequences from 3317 DNA
                    viruses and 9121 RNA viruses from the NCBI database. We then employed our tool to predict the efficiency of sgRNA targeting these
                    viruses. The prediction outcomes were visually processed and organized, culminating in the construction of a user-friendly
                    database. This database serves as a resource for efficiently retrieving sgRNAs targeting common DNA viruses.
                </p>
            </paragraph>

            <header1 :image="h1_image" text="RESULT" style="margin-top: 80px" />
            <header2 text="1.CNN-Based sgRNA Binding Efficiency Prediction Model Achieves High Accuracy" />
            <paragraph :padding-top="50">
                <p>
                    As for model of Cas9,following 800 EPOCHs,we successfully generated a CNN model with a Spearman correlation coefficient of
                    0.88.The training loss was 0.008865698240697384, and the test loss was 0.014979960230234.Furthermore,our model demonstrated
                    excellent generalization performance on various validation sets.
                </p>
                <p>
                    For Cas12a, we downloaded the fasta sequence files of 929 retroviruses from the NCBI website (
                    <a href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/"> https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/ </a>) and used them as
                    script input to obtain the recommended gRNAs for each virus. The results (recommended gRNA, position index, score) were written to
                    a csv file for database construction.
                </p>
                <p>
                    For Cas13a, we built a database containing 9121 RNA viruses from the website mentioned above. Each RNA vrius was given the
                    appropriate gRNA, score, etc. by the deep learning model we have built and tested.
                </p>
            </paragraph>

            <header2 text="2.CNN-Based sgRNA Binding Efficiency Prediction Model Reveals Sequence Features Affecting Efficiency" />
            <paragraph :padding-top="50">
                <p>
                    The pattern of sgRNA sequence features and binding efficiency are revealed by our models. The overview is in the following table.
                </p>
                <table>
                    <tbody>
                        <tr>
                            <th colspan="2" style="text-align: center">Pattern of sequence features and binding efficiency</th>
                        </tr>
                        <tr style="text-align: center">
                            <th>Categories of Cas</th>
                            <th>Efficient features</th>
                        </tr>
                        <tr>
                            <th>Cas9</th>
                            <th>
                                Preference for A at 9-16nt<br />Preference for G at 20nt<br />Preference for C at the Third Position of the PAM
                                (CGG)<br />High CG Content from Positions 15 to 20
                            </th>
                        </tr>
                        <tr>
                            <th>Cas12a</th>
                            <th>Downstream position of PAM is quite important<br />Low indel frequencies TTTT as the PAM</th>
                        </tr>
                        <tr>
                            <th>Cas13</th>
                            <th>Positions around the PFS site are relatively crucial</th>
                        </tr>
                    </tbody>
                </table>
                <p>
                    For pattern of Cas9.We extracted feature information from the trained model and visualized it using a heatmap. This heatmap
                    unveiled essential characteristics influencing sgRNA binding efficiency. These findings align with Vasileios Konstantakos et al.'s
                    report from 2022.
                </p>
            </paragraph>

            <header2 text="3.Database" />
            <paragraph :padding-top="50">
                <p>
                    We gathered genomic sequences from 3317 DNA viruses and 9115 Refseq Nucleotides from the NCBI database. We then employed our tool
                    to predict the efficiency of sgRNA targeting these viruses. The prediction outcomes were visually processed and organized,
                    culminating in the construction of a user-friendly database.
                </p>
                <p>
                    For Cas9, The established database encompasses predictive outcomes for efficient sgRNAs targeting 3317 DNA viruses. Furthermore, a
                    comprehensive retrieval mechanism has been implemented, offering a user-friendly visualization interface. (To be completed)
                </p>
                <p>
                    For Cas12a, we downloaded the fasta sequence files of 929 retroviruses from the NCBI website
                    (https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/) and used them as script input to obtain the recommended gRNAs for each virus.
                    The results (recommended gRNA, position index, score) were written to a csv file for database construction.
                </p>
                <p>For Cas13. (To be completed)</p>
            </paragraph>

            <header1 :image="h1_image" text="Discussion" />
            <paragraph>
                <p>
                    After completing our project, we also made reflections on our analytical approach during the study and proposed further
                    improvements that can be applied to update the database and also enhance the reliability of the software's prediction function.
                </p>
            </paragraph>

            <header2 text="1.Potential Application of Complex and Modern Deep Learning Architectures for sgRNA Binding Efficiency Prediction" />
            <paragraph :padding-top="50">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-13.png"
                    alt=""
                    width="300"
                    class="mr-5 my-5 float-left"
                />
                <p>
                    While our current study presents a relatively simple CNN-based deep neural network model, the realm of deep learning offers an
                    array of intricate and contemporary architectures awaiting exploration for enhancing the prediction of sgRNA binding efficiency.
                    Architectures such as recurrent neural networks (RNNs), long short-term memory networks (LSTMs), transformer-based models, and
                    attention mechanisms have exhibited exceptional performance across diverse domains. Incorporating these architectures into our
                    framework has the potential to capture intricate sequence patterns and dependencies, ultimately leading to improved predictive
                    capabilities.
                </p>
            </paragraph>

            <header2 text="2.Enhanced Accuracy through Integration of More Epigenetic Data" />
            <paragraph :padding-top="50">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-design-14.png"
                    alt=""
                    width="300"
                    class="ml-5 my-5 float-right"
                />
                <p>
                    According to the report by Vasileios Konstantakos et al. (2022), epigenetic features like CTCF, H3K4me3, DNase, and RRBS influence
                    the binding efficiency of sgRNA and target sequences, particularly concerning chromatin accessibility. In our research, we have
                    already accounted for the influence of chromatin accessibility and observed a significant enhancement in model accuracy with its
                    inclusion. Thus, it stands to reason that epigenetic data is a crucial factor in explaining sgRNA binding efficiency. Providing
                    additional epigenetic data holds the potential to further elevate the precision of our model.
                </p>
            </paragraph>

            <header2 text="3.Potential Mitigation of Limited Experimental Data and Enhanced Generalization through Self-Distillation" />
            <paragraph :padding-top="50">
                <p>
                    The amount of experimental data reflecting gRNA binding efficiency collected from published papers and public datasets is
                    relatively scarce. For the three models we have trained, the scale of the training set is roughly in the range of tens of
                    thousands of records. This remains insufficient for a deep learning model. Therefore, in future training efforts, employing
                    self-distillation could be advantageous. This involves training an initial teacher model with a certain level of accuracy,
                    followed by training a precision prediction model that forecasts the teacher model's accuracy. Subsequently, the precision
                    prediction model is used to select superior data generated by the teacher model, which is then used to train a student model with
                    the same architecture as the teacher model. Through self-distillation, the student model benefits not only from training with true
                    labels but also from additional insights derived from the teacher model's predictions. This aids in enhancing the student model's
                    generalization on unlabeled data and, in some cases, could surpass the performance of the teacher model. Moreover,
                    self-distillation contributes to model compression, given that student models generally possess fewer parameters than teacher
                    models.
                </p>
            </paragraph>

            <header2 text="4.Further Interpretation of Patterns Revealed by the Model Influencing gRNA Binding Efficiency" />
            <paragraph :padding-top="50">
                <p>
                    Through deep learning, we have identified a range of patterns that impact gRNA binding efficiency. However, the practical
                    significance of these patterns necessitates further experimental validation. Additionally, a deeper interpretation of these
                    patterns is essential, addressing their chemical and physical underpinnings to ascertain their precise influence on gRNA binding
                    efficiency.
                </p>
            </paragraph>

            <next-prev-page
                next-link="/project/implementation"
                next-title="PROJECT IMPLEMENTATION"
                prev-link="/description"
                prev-title="PROJECT DESCRIPTION"
            />
        </template>
    </article-page>
</template>

<style scoped></style>
