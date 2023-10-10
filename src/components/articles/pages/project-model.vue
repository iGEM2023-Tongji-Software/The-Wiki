<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import Image from "@/components/articles/components/Image.vue"
import NextPrevPage from "@/components/articles/components/NextPrevPage.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Project | Model"
})
</script>

<template>
    <article-page title="MODEL">
        <template #default>
            <header1 text="OVERVIEW" />
            <paragraph>
                <p>
                    Our project used a deep learning framework based on convolutional neural networks to analytically compute the relationship between
                    gRNA sequence, target sequence and gRNA activity. After training, we developed a gRNA design tool applied to Crispr virus
                    detection to recommend gRNAs that can efficiently detect the target virus. We finally put the recommended results into the
                    database we constructed.
                </p>
                <p>Our analysis process can be divided into 5 parts:</p>
            </paragraph>

            <header2 text="1. Collect guide RNA sequences, target sequences and corresponding activity data of different cas proteins" />
            <paragraph :padding-top="50">
                <p>We collect gRNAs, target sequences and corresponding activity data of cas13a from the literature.</p>
                <p>
                    Due to the limited data on cas12a and cas9 for virus detection, we obtained large-scale data sets of cas12a and cas9 activity in
                    different cell lines from the literature and chromatin accessibility in ENCODE to simulate virus detection situation.
                </p>
            </paragraph>

            <header2 text="2. Build and train a deep learning model based on CNN" />
            <paragraph :padding-top="50">
                <p>
                    According to the data structure and the characteristics of different cas proteins, we constructed three deep learning models based
                    on convolutional neural networks and use the collected data to train to predict the activity of gRNA.
                </p>
            </paragraph>

            <header2 text="3. Explain the features extracted by the convolutional neural network" />
            <paragraph :padding-top="50">
                <p>We use Salience Maps as an explanation of the model to determine which positions are important for the model.</p>
            </paragraph>

            <header2 text="4. Establish procedural script" />
            <paragraph :padding-top="50">
                <p>We designed a procedural script to accept a FASTA-format file as input and output top10 gRNAs for virus.</p>
            </paragraph>

            <header2 text="5. Construct a database of different viruses and their corresponding efficient gRNAs applied to Crispr virus detection" />
            <paragraph :padding-top="50">
                <p>
                    We collect the gene sequences of different viruses and extract the target sequence and the corresponding candidate gRNAs from the
                    gene sequences of different viruses. Then use our designed gRNA design tool to obtain gRNA that can detect the above virus
                    efficiently. Finally put the recommended results into the database we constructed.
                </p>
            </paragraph>

            <header1 text="DATA COLLECTION" />
            <header2 text="Cas 9" />
            <paragraph :padding-top="50">
                <p>
                    Due to the lack of experimental data of gRNA targeting efficiency against viral genomes, we chose to use experimental data on gRNA
                    from human genomes. The targeting knockout efficiency of Crispr-Cas9 gRNA was obtained from experiments on four human cell types:
                    hct116[1], hek293t[2], hela[1], and hl60[3]. The binary chromatin accessibility information for these cell lines was obtained from
                    the Encyclopedia of DNA Elements(ENCODE).
                </p>
                <p>
                    After calculating the normalized on-target efficiency values, a rank-based normalization is performed[2] to obtain the final
                    numeric labels.
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-1.png" alt="" width="300" />
                </Image>
                <p>
                    We divided the resulting dataset into separate training and validation sets at a ratio of 9:1. Since the training data consisted
                    of only 13,000 gRNAs, we augmented the data by randomly mutating the first two bases of each gRNA four times to enhance the train
                    dataset.
                </p>
            </paragraph>

            <header2 text="Cas 12" />
            <paragraph :padding-top="50">
                <p>
                    Like cas9 protein, we also collects data of cas12a protein from the human cells from the literature[7] for training the model. The
                    large-scale data sets(n=16,292) is generated by high-throughput experiments in HEK293T cells, which consist of 34bp target
                    sequence compositions and corresponding indel frequencies. In the same literature, we also obtained three independent data sets of
                    cas12a activities at endogenous sites in two different cell lines, HEK293T and HCT116 (data sets HEK-lenti, HEK-plasmid, and
                    HCT-plasmid). The collection method for chromatin accessibility data is the same as for cas9 protein.
                </p>
                <p>
                    We split data set HT 1 into data sets HT 1-1 (n = 15,000) and HT 1-2 (n = 1,292) by random sampling. In order to remove the
                    dimensionality of data from different dimensions, we normalize the indel frequencies and map it between 0 and 1.
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-2.png" alt="" width="300" />
                </Image>
            </paragraph>

            <header2 text="Cas 13a" />
            <paragraph :padding-top="50">
                <p>
                    We evaluate Cas13's application in virus detection from its cleavage activity in literature[8] and construct the dataset includes
                    19209 unique guide-target pairs after excluding samples with too low synthetic concentrations or designed non-matching controls.
                    Concerning the experimental target sequences, every 30nt harbored a change, inducing either a single mismatch in each target or a
                    +1 or +2 shift in the protospacer-flanking sequence (PFS) between prototype sequences.
                </p>
                <p>
                    After library construction, we needed to measure the activity of its viral assay. During each pair of reactions, the intact
                    reporter gene decays exponentially due to Cas13a cleavage, so we used the negative value of the decay to model the change in
                    fluorescence over time and determine its growth rate. The fluorescent reporter gene is cleaved over time and its cleavage follows
                    one-level kinetics. Therefore, we fit a curve for each guide-target complex of the form:
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-3.png" alt="" />
                </Image>
                <p>
                    Here, C and B represent the saturation point and background fluorescence respectively. k represents the rate at which the reporter
                    gene is cleaved, which is proportional to the catalytic efficiency of the particular guide-target complex.Each set of guide-target
                    pairs designed was tested 10 times, so a total of sets of data were obtained. 70% of the data are train and validation, and 30%
                    are test.
                </p>
            </paragraph>

            <header1 text="Early AttEMpt" />
            <paragraph>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-4.png" alt="" class="w-[300px] float-right ml-5" />
                <p>
                    Initially, we chose machine learning models to fit the targeting efficiency of Guide RNA.We collected and summarized common
                    features used to assess gRNA efficiency. We tried to use chi2 method in sklearn for feature selection. These selected features
                    were input into an SVM (Support Vector Machine) that underwent a grid search to adjust the optimum parameters. However, the loss
                    of training is extremely high and the correlation coefficient is also low.
                </p>
                <p>
                    We also tried to replace the filtering feature method with LassoCV and replace the model with RF (Random Forest), results remained
                    poor. Current results seem to indicate that the features we summarized are not sufficient to fit the targeting efficiency of Guide
                    RNA. So we turned our attention to another method that does not require feature extraction - Deep Learning.
                </p>
            </paragraph>

            <header1 text="CoNvolUtioNal NEUral NEtwork" />
            <paragraph>
                <p>
                    We finally chose CNN (Convolutional Neural Networks) to predict gRNA efficiency. CNN is multilayer perceptron similar to
                    artificial neural networks. Traditional convolutional neural networks consist of an Input Layer, Convolution Layer, Activation
                    Layer, Pooling Layer, Full-connected Layer, and Output Layer and many variations of network structures can be derived from it. In
                    this network, the convolutional layer is the most important part of feature extraction. The feature extractor in the convolutional
                    layer is called a filter. Usually, the size of a filter is much smaller than the size of the input and extract feature by sliding
                    through the input matrix.
                </p>
            </paragraph>

            <header2 text="One-hot encoding" />
            <paragraph :padding-top="50">
                <p>
                    Since CNNs can capture and extract spatial relationships in inputs, we employed one-hot encoding for input sequences. This method
                    encodes the nucleotide in each position as a four-dimensional binary vector, in which each element represents the type of
                    nucleotide: A, C, G, and T. The encoding layer then concatenates the binary vectors into a 4-by-given length dimensional binary
                    matrix representing the whole target sequence.
                </p>
                <p>
                    One-hot encoding(2D) has made some improvements on the original. Take cas13a as an example. The input dimension is (48, 8),
                    obtained by concatenating the encoded sequences of target and guide. Each element () is a vector [xi,t, xi,g].
                </p>
            </paragraph>

            <header2 text="Convolutional Layer" />
            <paragraph :padding-top="50">
                <p>
                    Convolutions involve calculating the dot product between regions of the input image and the weight matrix of a filter, producing
                    the output of the layer. The filters slide along only one axis (sequence length) of the one-hot encoded matrix. Convolutions
                    reduce the number of parameters to be trained and help prevent overfitting.
                </p>
                <p>
                    The convolution layer then applies the rectified linear unit (ReLU) nonlinear function to the convolution outputs. ReLU's
                    computation is simple and it can output zero, making it particularly suitable for optimizing networks that are linear or nearly
                    linear.
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-5.png" alt="" class="w-[360px]" />
                </Image>
            </paragraph>

            <header2 text="Batch Normalization" />
            <paragraph :padding-top="50">
                <p>
                    As the input data at each layer of the network is constantly changing, the data distribution is altered, a situation known as
                    "Internal Covariate Shift". To solve this problem, we add a batch normalization layer before each layer of the network.
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-6.png" alt="" />
                </Image>
                <p>
                    xi is the ith element in the batch input, μ and σ are the mean and variance of the batch input, respectively, and ε is a tiny
                    positive number used to avoid division by zero.
                </p>
            </paragraph>

            <header2 text="Loss Function" />
            <paragraph :padding-top="50">
                <p>
                    The Cas9 model uses the SmoothL1 loss function, while Cas12a and Cas13a models use the MSE.MSE means mean square error,the formula
                    for MSE is as follows:
                </p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-7.png" alt="" class="w-[300px]" />
                </Image>
                <p>The formula for SmoothL1 is as follows:</p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-8.png" alt="" class="w-[500px]" />
                </Image>
            </paragraph>

            <header2 text="Optimizer" />
            <paragraph :padding-top="50">
                <p>We use the Adam optimizer for all model optimizations updates the parameters as follows:</p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-14.png" alt="" class="w-[400px]" />
                </Image>
                <p>
                    Here, <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-9.png" alt="^mi" class="h-[1em]" /> is the
                    bias-corrected first moment estimate, accounting for the fact that
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-10.png" alt="mt" class="h-[1em]" /> approaches 0
                    under zero initial values;
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-11.png" alt="^vt" class="h-[1em]" /> is the
                    bias-corrected second moment estimate, accounting for the fact that
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-12.png" alt="vt" class="h-[1em]" /> approaches 0
                    under zero initial values; represents the learning rate, and the
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-13.png" alt="a" class="h-[1em]" /> represents the
                    corresponding parameter.
                </p>
            </paragraph>

            <header2 text="1. Cas9" />
            <paragraph :padding-top="50">
                <p>We used Pytorch to write the Crispr-cas9 model and training code, an overview of the model is shown below.</p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-15.jpg" alt="" class="w-[500px]" />
                </Image>
                <p>
                    We use a convolutional 2D neural network to predict the targeting efficiency of CRISPR-Cas9 guide RNAs.The Guide RNA is encoded in
                    the shape of (5, 1, 23), the first demention is five channels,which is consisted of deoxyribonucleotides' one-hot encoding in the
                    first four channels and chromosome accessibility in the last channel.
                </p>
                <p>
                    Due to the insufficient amount of data, we construct a CNN consisting of an encoder and decoder of gRNA. 1.5 million gRNAs from
                    human and DNA viruses were fed into the network to pre-learn the features of gRNA. Then the network weights of the encoder are
                    used to initialize partial weights of our regression model.
                </p>
                <p>
                    Network model is consisted of 7 Convolution Layers and 2 Fully Connected Layer, and each convolutional layer is followed by a ReLU
                    activation function to ensure that the model is able to fit nonlinear functions. The neural network has a total of 2500033
                    parameters.Otherwise,the network's Dropout setting was set to 0.5 (randomly deactivating 50% of the neurons in each training
                    session) to ensure the model's generalization ability.
                </p>
            </paragraph>

            <header2 text="2. Cas12a" />
            <paragraph>
                <p>The model was implemented using TensorFlow and Keras. Figure 1 shows an overview of the model, which proceeds in five stages.</p>
                <Image caption="Figure 1 model structure">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-16.png" alt="" class="w-[800px]" />
                </Image>
                <p>(1) Through one-hot encoding, we gain a 4-by-34 dimensional binary matrix representing the whole 34-bp target sequence.</p>
                <p>
                    (2) The convolution layer performs one-dimensional convolution operations with 80 filters of length 7. The pooling layer computes
                    the average in each of the non-overlapping windows of size 2, providing invariance to local shifts and reducing the number of
                    parameters.
                </p>
                <p>
                    (3)The model uses three fully connected layers with 80, 40, and 40 units, respectively. Each unit in the fully connected layers
                    performs linear transformations of the outputs of the previous layer, and applies the rectified linear unit nonlinear function.
                    Multiple nonlinear layers enable the model to learn hierarchical representations of data with increasing levels of abstraction.
                </p>
                <p>
                    (4)The chromatin accessibility integration layer incorporates the sequence representations with the chromatin accessibility
                    information of the target sequence. It uses another fully connected layer with 40 units to transform the one-dimensional binary
                    chromatin accessibility input to a 40-dimensional real vector, which matches the output shape of the last fully connected layer.
                    Then, it integrates the 40-dimensional chromatin accessibility and sequence representation vectors by performing element-wise
                    multiplication.
                </p>
                <p>
                    (5) The last stage, the regression output layer, performs a linear transformation of the outputs of the chromatin accessibility
                    integration layer and makes a prediction of cas12a activity.
                </p>
                <p>
                    We trained the proposed model in two main steps. (1) Model selection and pre-training of the entire architecture and (2)
                    fine-tuning with endogenous target data considering an additional chromatin accessibility input, which led to the development of
                    the model. In both steps, we optimized the mean squared error loss function using the Adam optimizer and used dropout for the
                    model regularization with a 0.3 dropout rate.
                </p>
                <p>
                    First, we split data set HT 1 into data sets HT 1-1 (n = 15,000) and HT 1-2 (n = 1,292) by random sampling; HT 1-1 was used for
                    model selection and pre-training, and HT 1-2 was only used to evaluate the performance of model and never used in the training. We
                    conducted the nested CV procedure with the data set HT 1-1. In the inner loop of this procedure, we performed 5-fold CV to set the
                    values of model hyperparameters. (we prepare the 180 model candidates with different hyperparameter configurations, and selected
                    the model that showed the minimum average validation loss.) In the outer loop, we performed 10-fold CV to train and validate the
                    model selected from the inner loop. We then pre-trained the final model (102,681 free parameters) again with data set HT 1-1,
                    learning informative representations of target sequences relevant to cas12a activity profiles.
                </p>
                <p>
                    To take chromatin accessibility as well as the learned sequence representations into account, we adopted an additional chromatin
                    accessibility integration layer right before the regression output layer. During the fine-tuning, we optimized the mean squared
                    error loss function, only updating the weight parameters in the last two layers (121 free parameters). By fixing the weight
                    parameters in the other layers, model could avoid overfitting and effectively learn to incorporate the sequence representations
                    with the chromatin accessibility information.
                </p>
            </paragraph>

            <header2 text="3. Cas13a" />
            <paragraph>
                <p>
                    For Cas13, we constructed a CNN model using Python 3.8.1 and TensorFlow 2.5.0. In constructing the model, we chose multiple sets
                    of parameters to be varied iteratively and compared parameter performance on validation tests. Figure 1 shows the overall
                    construction of our optimal model:
                </p>
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-17.png" alt="" class="w-[800px]" />
                </Image>
                <p>(1) We employed one-hot (2D) encoding for input sequences, thus converting the one sequence into a (48,8) matrix.</p>
                <p>
                    (2) We utilized two different kernel sizes: one with a size of 1x1 and the other with a size of 2x2, to extract distinct features.
                </p>
                <p>
                    (3) Pooling layers filter information on a CNN, reducing the feature space dimensions while maintaining depth. We employed max
                    pooling, selecting the maximum value as the output for each 2x2 region.
                </p>
                <p>
                    (4) In the local connectivity layer, nodes in the convolutional layer are only connected to a subset of nodes from the previous
                    layer. This is useful for learning local features, reducing the number of parameters and computational complexity. We used two
                    local connectivity layers with different sizes and both utilized ReLU as the activation function. The outputs were then
                    concatenated to merge multiple local feature maps into a more global feature representation, facilitating higher-level feature
                    extraction and pattern recognition.
                </p>
                <p>
                    (5) In the fully connected layer, we flattened the output from the last convolutional layer and connected each node in the current
                    layer to another node in the next layer. The final score output used a linear function.
                </p>
                <p>The training process can be divided into two parts: hyperparameter tuning and weight optimization.</p>
                <p>
                    As previously mentioned, for the first part, we did not fix hyperparameters but instead assigned partial ranges based on
                    pre-training results. We employed k-fold cross-validation to obtain optimal parameters. This method involves splitting the
                    training data into k folds, with (k-1) folds used for training and the remaining fold for validation. This process is repeated k
                    times. Finally, the performance score of a specific set of hyperparameters is calculated by averaging the scores and calculating
                    the standard deviation of all K models trained.
                </p>
                <p>In the second part, within each parameter iteration, we optimized the parameters using the Adam algorithm.</p>
                <Image bare>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/project-model-18.png" alt="" class="w-[300px]" />
                </Image>
                <p>
                    The training results are measured using mean squared error.Applying the optimal parameters and hyperparameters from training to
                    the training set, the Spearman result is 0.73.
                </p>
            </paragraph>

            <header1 text="DatabasE" />
            <paragraph>
                <p>
                    In order to facilitate CRISPR virus detection research, we establish a virus-gRNA database, which includes efficient gRNAs, target
                    sequences and predicted scores of over 12438 viruses, providing convenience for relevant researchers.
                </p>
                <p>
                    The virus sequences used in the database are all from NCBI (<a href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/"
                        >https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/</a
                    >). Using this as input, our designed tool can give efficient gRNAs that can detect these viruses. For example, cas12a protein can
                    extract 34bp target sequences upstream and downstream of PAM sequence(5’TTTN) as candidate sequences for predicting efficient
                    gRNAs used for detecting retroviruses; cas9 protein can extract target sequences based on another PAM(3’NGG) to detect DNA virus;
                    in terms of cas13a, because of no PAM, it can select target sequences from the entire sequence through a sliding window to detect
                    RNA virus.
                </p>
                <p>
                    After obtaining the scores of all candidate gRNAs, we map them to a range of 0 to 1, and select the top ten gRNAs of each virus in
                    descending order to output and place them in the database.
                </p>
            </paragraph>
            <paragraph class="mt-10">
                <h2 class="text-yellow-700 text-[32px] font-normal font-['ABeeZee']">Reference:</h2>
                <ol class="list-none ml-[-2em]">
                    <li>
                        [1] Hart T, Chandrashekhar M, Aregger M, Steinhart Z, Brown KR, MacLeod G, Mis M, Zimmermann M, Fradet-Turcotte A, Sun S.
                        High-resolution CRISPR screens reveal fitness genes and genotype-specific cancer liabilities. Cell. 2015;163:1515-C26.
                    </li>
                    <li>
                        [2] Doench JG, Fusi N, Sullender M, Hegde M, Vaimberg EW, Donovan KF, Smith I, Tothova Z, Wilen C, Orchard R. Optimized sgRNA
                        design to maximize activity and minimize off-target effects of CRISPR-Cas9. Nat Biotechnol. 2016:34(2):184-91.
                    </li>
                    <li>
                        [3] Wang T, Wei JJ, Sabatini DM, Lander ES. Genetic screens in human cells using the CRISPR-Cas9 system. Science.
                        2014;343:80-C4.
                    </li>
                    <li>
                        [4] Chuai, G., Ma, H., Yan, J. et al. DeepCRISPR: optimized CRISPR guide RNA design by deep learning. Genome Biol 19, 80
                        (2018). https://doi.org/10.1186/s13059-018-1459-4.
                    </li>
                    <li>
                        [5] Wang H, Gu Q, Wei J, Cao Z, Liu Q. Mining drug-Cdisease relationships as a complement to medical genetics-based drug
                        repositioning: where a recommendation system meets genome-wide association studies. Clin Pharmacol Ther. 2015;97:451-C4.
                    </li>
                    <li>
                        [6] Badaro G, Hajj H, El-Hajj W, Nachman L. A hybrid approach with collaborative filtering for recommender systems. In:
                        Wireless Communications and Mobile Computing Conference (IWCMC), 2013 9th International: IEEE; Sardinia, Italy, 2013. p.
                        349-C54.
                    </li>
                    <li>
                        [7] Luo J, Chen W, Xue L, Tang B. Prediction of activity and specificity of CRISPR-Cpf1 using convolutional deep learning
                        neural networks. BMC Bioinformatics. 2019;20(1):332. Published 2019 Jun 13. doi:10.1186/s12859-019-2939-6.
                    </li>
                    <li>
                        [8] Metsky, H.C., Welch, N.L., Pillai, P.P. et al. Designing sensitive viral diagnostics with machine learning. Nat Biotechnol
                        40, 1123-C1131 (2022). https://doi.org/10.1038/s41587-022-01213-5.
                    </li>
                </ol>
            </paragraph>

            <next-prev-page
                next-link="/tongji-software/engineering"
                next-title="PROJECT ENGINEERING"
                prev-link="/tongji-software/project/implementation"
                prev-title="PROJECT IMPLEMENTATION"
            />
        </template>
    </article-page>
</template>

<style scoped></style>
