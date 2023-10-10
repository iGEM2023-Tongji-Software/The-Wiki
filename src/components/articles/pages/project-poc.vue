<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Proof of Concept"
})
</script>

<template>
    <article-page title="PROOF OF CONCEPT">
        <template #default>
            <header1 text="ThEorEtical sUpport" />
            <header2 text="CRISPR Structures and Mechanisms" />
            <paragraph :padding-top="50">
                <p>
                    CRISPR(clustered regularly interspaced short palindromic repeats) is an RNA-mediated immune system in bacteria and archaea, which
                    could defend against phage infections and plasmid transfer. Cas9, part of Type II CRISPR, encodes guide RNA (gRNA) for precise DNA
                    cleavage. Cas12 and Cas13 offer additional research prospects with collateral cleavage abilities. Cas13, in particular, binds RNA
                    directly, broadening CRISPR's potential applications. Researchers have refined gRNA for specific genomic targeting, enabling virus
                    detection, genome editing, and more.
                </p>
            </paragraph>

            <header2 text="Effectiveness of Applying CRISPR-Cas to Virus Detection" />
            <paragraph :padding-top="50">
                <p>
                    Through Cas protein modification, various CRISPR systems are now applicable for virus detection, offering rapid, sensitive, and
                    cost-effective solutions. Take Sherlock, based on CRISPR-Cas13a, for instance[2]. Cas13a exhibits collateral RNAse activity during
                    target recognition, which the researchers harnessed alongside isothermal amplification to create CRISPR-based diagnostics. This
                    enables swift detection of DNA or RNA with attomolar sensitivity and single-base mismatch specificity. By designing crRNAs with
                    synthetic mismatches in the spacer sequence, they detected specific strains of ZIKV (Zika virus) and DENV (Dengue virus) chain 1
                    or 3 from Africa or the Americas with superior signals compared to off-target strains, enabling single-mismatch-based
                    detection(Fig 1).
                </p>
                <Image caption="Fig1 Sensitivity of Cas13a">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-1.png" alt="" class="w-[600px]" />
                </Image>
            </paragraph>

            <header1 text="TEst aNd validatioN" />
            <paragraph>
                <p>
                    Software teams must test models with experimental data, especially in CNN training, to avoid overfitting biases. We used the
                    Spearman correlation coefficient to assess our model's performance on test data because it focuses on data ordering rather than
                    specific values. The Spearman Correlation Coefficient of our model reaches 0.88, 0.87 and 0.73 respectively.
                </p>
                <p>
                    It is worth noting that we have added epigenetic information, which improves the effectiveness of our models. After pretraining
                    and hyperparameter optimization, our model's Spearman correlation coefficients were modest. Fine-tuning with binary chromatin
                    accessibility information significantly enhanced the model, achieving Spearman correlations of 0.82 and 0.87 when tested on
                    HEK-plasmid and HCT-plasmid datasets.
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-2.png" alt="" class="w-[600px]" />
                </Image>
                <p>
                    To understand the significance of gRNA positions for activity, we employ Salience Maps in CNN. This method calculates mean square
                    error loss, obtains gradients of predicted values concerning input sequences, and identifies important features based on gradient
                    magnitude.
                </p>
                <p>
                    For cas9, although the network weights are randomly initialized, the non-G bases in the last two positions of the PAM also have
                    weights, but this does not affect the other results of the network. Bases 19,20 have a large positive impact, while bases 17,18
                    have a large negative impact. (Fig. 3(a) Average gradient of all bases; Fig. 2(b) Most positive base; Fig. 2(c) Most negative
                    base).
                </p>
                <Image caption="Fig3 Cas9a feature map">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-3.png" alt="" class="w-[200px]" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-4.png" alt="" class="w-[200px]" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-5.png" alt="" class="w-[200px]" />
                </Image>
                <p>
                    For cas12a, Fig 4 shows the one-hot encoding and feature heatmap of one sequence suggesting the downstream position of PAM is
                    quite important and indel frequencies were very low when we used TTTT as the PAM.
                </p>
                <Image caption="Fig 4 Cas12a feature map">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-6.png" alt="" class="w-[400px]" />
                </Image>
                <p>
                    For Cas13a, Although it does not have a PAM, it is shown as H (non-G) at the PFS (protospacer flanking site) in the Fig 5.
                    Otherwise, if there is a mismatch in positions 5-8 of the "seed" region of the gRNA spacer region, it greatly reduces the cleavage
                    rate of cas13a, but if the mismatch occurs in the middle region (positions 9-12), it boosts the rate.
                </p>
                <Image caption="Fig5 Cas13a feature map">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-7.png" alt="" class="w-[360px]" />
                </Image>
                <p>
                    Furthermore, the utility of a model needs to be compared with other similar models. For example, in the case of Cas9, we assessed
                    our model against existing deep learning gRNA efficiency predictors [3,4,5,6] using an independent validation set from the
                    original data. CASleuth exhibited the highest Spearman correlation coefficient across four cell lines and mixed data. Its
                    correlation coefficients were evenly distributed across cell lines, not fitting any one cell line's data significantly,
                    demonstrating strong overall performance.
                </p>
                <table class="my-5 w-11/12">
                    <tbody class="text-center">
                        <tr>
                            <th></th>
                            <th class="font-bold">HCT116</th>
                            <th class="font-bold">HEK293T</th>
                            <th class="font-bold">HELA</th>
                            <th class="font-bold">HL60</th>
                            <th class="font-bold">ALL</th>
                        </tr>
                        <tr>
                            <th class="font-bold">CASleuth</th>
                            <th>0.853</th>
                            <th>0.882</th>
                            <th>0.907</th>
                            <th>0.909</th>
                            <th>0.887</th>
                        </tr>
                        <tr>
                            <th class="font-bold">C-RNNCrispr</th>
                            <th>0.724</th>
                            <th>0.665</th>
                            <th>0.685</th>
                            <th>0.577</th>
                            <th>0.663</th>
                        </tr>
                        <tr>
                            <th class="font-bold">DeepCRISPR</th>
                            <th>0.654</th>
                            <th>0.874</th>
                            <th>0.501</th>
                            <th>0.262</th>
                            <th>0.601</th>
                        </tr>
                        <tr>
                            <th class="font-bold">SeqDeepCpf1</th>
                            <th>0.672</th>
                            <th>0.655</th>
                            <th>0.651</th>
                            <th>0.558</th>
                            <th>0.637</th>
                        </tr>
                        <tr>
                            <th class="font-bold">DeepCas9</th>
                            <th>0.603</th>
                            <th>-0.116</th>
                            <th>0.418</th>
                            <th>0.118</th>
                            <th>0.256</th>
                        </tr>
                    </tbody>
                </table>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-poc-8.png" alt="" class="w-[450px]" />
                </Image>
            </paragraph>

            <paragraph class="mt-10">
                <h2 class="text-yellow-700 text-[32px] font-normal font-['ABeeZee']">Reference:</h2>
                <ol class="list-none ml-[-2em]">
                    <li>
                        [1] Manghwar H, Lindsey K, Zhang X, Jin S. CRISPR/Cas System: Recent Advances and Future Prospects for Genome Editing. Trends
                        Plant Sci. 2019;24(12):1102-1125. doi:10.1016/ j.tplants.2019.09.006
                    </li>
                    <li>
                        [2] Gootenberg JS, Abudayyeh OO, Lee JW, et al. Nucleic acid detection with CRISPR-Cas13a/C2c2. Science.
                        2017;356(6336):438-442. doi:10.1126/science.aam9321
                    </li>
                    <li>
                        [3]Abudayyeh, O. O., Gootenberg, J. S., Essletzbichler, P., Han, S., Joung, J., Belanto, J. J., Verdine, V., Cox, D. B. T.,
                        Kellner, M. J., Regev, A., Lander, E. S., Voytas, D. F., Ting, A. Y., & Zhang, F. (2017). RNA targeting with CRISPR-Cas13.
                        Nature, 550(7675), 280-C284. https://doi.org/10.1038/nature24049
                    </li>
                    <li>
                        [4]Omar O. Abudayyeh et al. ,C2c2 is a single-component programmable RNA-guided RNA-targeting CRISPR
                        effector.Science353,aaf5573(2016).DOI:10.1126/science.aaf5573
                    </li>
                    <li>
                        [5] Guishan Zhang, Zhiming Dai, Xianhua Dai, C-RNNCrispr: Prediction of CRISPR/Cas9 sgRNA activity using convolutional and
                        recurrent neural networks, Computational and Structural Biotechnology Journal, Volume 18, 2020, Pages 344-354, ISSN
                        2001-0370,https://doi.org/10. 1016/j.csbj.2020.01.013.
                    </li>
                    <li>
                        [6] Chuai, G., Ma, H., Yan, J. et al. DeepCRISPR: optimized CRISPR guide RNA design by deep learning. Genome Biol 19, 80
                        (2018). https://doi.org/10.1186/s13059-018-1459-4
                    </li>
                    <li>
                        [7] Kim, H., Min, S., Song, M. et al. Deep learning improves prediction of CRISPR-CCpf1 guide RNA activity. Nat Biotechnol 36,
                        239-C241 (2018). https://doi.org/10.1038/nbt.4061
                    </li>
                    <li>
                        [8] J. Chem. Inf. Model. 2019, 59, 1, 615-C624Publication Date:November 28, 2018. https://doi.org/10.1021/acs.jcim.8b00368
                    </li>
                </ol>
            </paragraph>

            <next-prev-page prev-title="PROJECT SAFETY" prev-link="/project/safety" />
        </template>
    </article-page>
</template>

<style scoped></style>
