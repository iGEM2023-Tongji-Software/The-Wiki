<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Image from "@/components/articles/components/Image.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Team | Partnership"
})
</script>

<template>
    <article-page title="PARTNERSHIP">
        <template #default>
            <paragraph>
                <p>
                    At varying stages and levels, we engaged in thorough discussions with WHU-CHINA, SJTU-Software and NJU-China teams, resulting in
                    mutually beneficial outcomes through our collaborative efforts.
                </p>
            </paragraph>

            <header1 text="SJTU-SOFTWARE" />

            <paragraph>
                <Image class="float-left mr-10 mt-3">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-partnership-1.png" alt="" class="h-[180px]" />
                </Image>
                <p>
                    We got contact with Junjie Zhu and Xinyu Qian of SJTU-Software in May. This year, the topic of their project is Directed Ago
                    Renewal With Ideal protein thermal-Stability(DARWINS). They did so much work that their project was fantastic. We have helped each
                    other in many aspects since May 2023, because of our similar role as software teams and similar background in biological and
                    computer. You can click <a href="https://2023.igem.wiki/sjtu-software/description">here</a> for jump to SJTU-Software.
                </p>
            </paragraph>

            <header2 text="Initial idea" />
            <paragraph style="padding-top: 50px">
                <p>
                    After getting in touch with them, we discussed the main focus of our projects for this year. To our surprise, we discovered that
                    our teams had very similar projects. Both of our projects involved the use of AI-related models and were related to screening. As
                    a result, we delved into our projects and initiated a collaborative relationship.
                </p>
            </paragraph>

            <header2 text="Progress" />
            <paragraph style="padding-top: 50px">
                <p>
                    We maintained contact throughout the entire project process. At the end of September, we finally had the opportunity to meet in
                    person and discuss the model methods used by our respective teams. Although our models were not identical, as we both work in the
                    field of bioinformatics, we were able to understand each other's projects well and offer valuable suggestions to one another. They
                    expressed appreciation and recognition for the progress and success of our project.
                </p>
                <p>Please click <a href="/tongji-software/human-practices/integrated-hp">Integrated HP</a> for more information.</p>
            </paragraph>

            <header2 text="Human Practices& Education" />
            <paragraph style="padding-top: 50px">
                <p>
                    In May, we reached out to Junjie Zhu and Xinyu Qian of SJTU-Software, and were surprised to discover that our project themes
                    shared remarkable similarities. Both teams operate in the software domain with overlapping backgrounds in biology and computer
                    science. As a result, we exchanged numerous suggestions for project design and algorithms, offering valuable assistance to one
                    another.
                </p>
                <p>
                    In fact, our collaboration transcends the mere definition of cooperation, encompassing a deep level of mutual support and shared
                    goals. Please click <a href="/tongji-software/team/partnership">Partnership</a> for more information.
                </p>
            </paragraph>

            <header1 text="WHU-CHINA" />

            <paragraph>
                <p>
                    We learned at the CCiC conference that WHU-China's dry lab this year has some similarities to our project. Their project focuses
                    on the efficiency prediction and design tool for Cas9 sgRNA, which closely resembles our own project. Despite the distance between
                    our two teams, we have maintained regular contact and engaged in numerous online exchanges. You can click
                    <a href="https://2023.igem.wiki/whu-china/description">here</a> for jump to WHU-China.
                </p>
                <Image class="">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-partnership-2.png" alt="" class="h-[300px]" />
                </Image>
            </paragraph>

            <header2 text="Model" />
            <paragraph style="padding-top: 50px">
                <p>
                    Our team organized a CRISPR&Synbio online meeting where they provided a detailed overview of their dry lab work, leaving a deep
                    impression on us. Through this meeting, we discovered many similarities in the models and methods used by our two teams. Despite
                    targeting different host organisms, our thought processes were quite similar. As a result, we offered them a lot of advice, shared
                    our unified dataset methodology with them, and suggested they explore generalization effects across different species. We also
                    encouraged them to consider factors such as epigenetics and chromatin accessibility.
                </p>
            </paragraph>

            <header2 text="Human Practices" />
            <paragraph style="padding-top: 50px">
                <p>
                    We attended the CCiC conference together, and they took the initiative to contact us. We then formed a CRISPR WeChat group and an
                    AI & software WeChat group to facilitate further communication among relevant teams. Their team also took part in our organized
                    CRISPR&Synbio online meeting, where we had many productive exchanges.
                </p>
                <p>Please click <a href="/tongji-software/human-practices/integrated-hp">Integrated HP</a> for more information.</p>
            </paragraph>

            <header2 text="Education" />
            <paragraph style="padding-top: 50px">
                <p>
                    We proposed the idea of jointly creating a promotional brochure for offline education and shared it with them. They were highly
                    supportive of our idea. In the end, we collaborated on writing a brochure related to CRISPR. Their team was responsible for the
                    CRISPR-Cas9 section, while our team focused on the application of CRISPR in synthetic biology.
                </p>
                <p>Please click <a href="/tongji-software/education">Education</a> for more information.</p>
            </paragraph>

            <header1 text="NJU-CHINA" />

            <paragraph>
                <Image class="float-right ml-10">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-partnership-3.png" alt="" class="h-[150px]" />
                </Image>
                <p>
                    We get connected with NJU-China during CCiC meeting, and communicated with each other frequently after that. We built a solid
                    partnership with them this year. They built an AI based on the paradigm of transfer learning called Pymaker, which was kind of
                    similar to ours. You can click <a href="https://2023.igem.wiki/nju-china/description">here</a> for jump to NJU-China.
                </p>
            </paragraph>

            <header2 text="Model" />
            <paragraph style="padding-top: 50px">
                <p>
                    On the Synbio plus AI meeting, they knew the details of our model. They suggested us employing self-distillation during training
                    can enhance model generalization and compression to mitigate limited experimental data. We appreciate their suggestions and have
                    adopted them to improve our project. In turn, we provided them with some suggestions regarding deep learning methods. They also
                    adopted our suggestions and improved their methods. So our communication on model benefit our two teams.
                </p>
            </paragraph>

            <header2 text="Human Practices" />
            <paragraph style="padding-top: 50px">
                <p>
                    At the synbio plus AI conference, we had discussions on ethical issues of AI, legal supervision system on AI and its application
                    in synthetic biology. These discussions have enabled us to better consider the impact of our project on the society and the globe.
                    We both gave suggestions of organizing activities to ensure our project is really good to the whole environment. Thanks for their
                    useful advice, we created more colorful activities related to human practices part.
                </p>
            </paragraph>

            <Image bare class="mt-10">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/ack-1.png" alt="" class="w-full rounded-2xl" />
            </Image>
        </template>
    </article-page>
</template>

<style scoped></style>
