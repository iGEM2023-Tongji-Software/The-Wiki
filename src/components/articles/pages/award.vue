<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import { onMounted } from "vue"

onMounted(() => {
    document.title = "CASleuth | Award"
})
</script>

<template>
    <article-page title="AWARD">
        <template #default>
            <header1 text="BroNzE" />

            <header2 text="Completed all Competition Deliverables" />
            <paragraph style="padding-top: 50px">
                <ol>
                    <li>Wiki: we completed a well-designed and straightforward wiki to introduce our project.</li>
                    <li>
                        <span class="text-[#a22918]">Project Promotion Video</span>: we made an excellent promotion video to let people know about our
                        program through animation.
                    </li>
                    <li>
                        <span class="text-[#a22918]">Presentation Video</span>: we will address project presentation to judges and other iGEMers in
                        coming Jamboree.
                    </li>
                    <li><span class="text-[#a22918]">Judging Form</span>.</li>
                    <li><span class="text-[#a22918]">Judging Session</span>.</li>
                </ol>
            </paragraph>

            <header2 text="Project Attributions" />
            <paragraph style="padding-top: 50px">
                <p>Thanks all people for their effort and support to this project!</p>
                <p>Please click <a href="/team/attributions">Attributions</a> for more details.</p>
            </paragraph>

            <header2 text="Project Description" />
            <paragraph style="padding-top: 50px">
                <p>We introduced the background, inspiration, goals and so on.</p>
                <p>Please click <a href="/description">Description</a> for more details.</p>
            </paragraph>

            <header2 text="Contribution" />
            <paragraph style="padding-top: 50px">
                <p>
                    We settled a user-friendly website for researchers to analyze data and predict the activity of gRNA. In addition, we established a
                    useful database for researchers who are interested in Crispr Virus detection.
                </p>
                <p>Please click <a href="/contribution">Contribution</a> for more details.</p>
            </paragraph>

            <header1 text="SILVER" />

            <header2 text="Engineering Success" />
            <paragraph style="padding-top: 50px">
                <p>
                    We settled a user-friendly website for researchers to analyze data and predict the activity of gRNA. In addition, we established a
                    useful database for researchers who are interested in Crispr Virus detection.
                </p>
                <p>Please click <a href="/engineering">Engineering</a> for more details.</p>
            </paragraph>

            <header2 text="Human Practices" />
            <paragraph style="padding-top: 50px">
                <p>
                    During our project, we organized and participated in various activities with the goal to spread the word of Synthetic Biology,
                    iGEM, and our project to society.
                </p>
                <p>Please click <a href="/human-practices">Human Practices</a> for more details.</p>
            </paragraph>

            <header1 text="GOLD" />

            <header2 text="Model" />
            <paragraph style="padding-top: 50px">
                <p>
                    We investigated many modeling methods, including random forest, CNN and so on, to complete evaluation the efficiency of gRNA for 3
                    cas proteins. In the model, we fully considered biological significance such as epigenetic information and differences in CRISPR
                    systems, and improved the model architecture.
                </p>
                <p>Please click <a href="/project/model">Model</a> for more details.</p>
            </paragraph>

            <header2 text="Integrated Human Practices" />
            <paragraph style="padding-top: 50px">
                <p>
                    We brainstormed and identified stakeholders related to our project and communicated with them. We optimized our design, model and
                    analyzing pipeline to improve our project according to plenty of suggestions we received from them.
                </p>
                <p>Please click <a href="/human-practices/integrated-hp">Integrated HP</a> for more details.</p>
            </paragraph>

            <header2 text="Education" />
            <paragraph style="padding-top: 50px">
                <p>
                    Guided by the questionnaire, we organized both online and offline activities, which aimed at people of all age and from all walks
                    of life including people with specific impairment. Thousands of people have been included and we have received plenty of good
                    feedback from them.
                </p>
                <p>Please click <a href="/education">Education</a> for more details.</p>
            </paragraph>
        </template>
    </article-page>
</template>

<style scoped></style>
