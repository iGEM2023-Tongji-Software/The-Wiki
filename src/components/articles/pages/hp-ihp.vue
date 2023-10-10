<script setup lang="ts">
import NextPrevPage from "../components/NextPrevPage.vue"
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import ScrollMagic from "scrollmagic"
import { onMounted, reactive } from "vue"
import anime from "animejs"
import Header1 from "@/components/articles/components/Header1.vue"
import MoonBall from "@/components/articles/components/education/MoonBall.vue"
import TimeLine from "../components/hp-ihp/TimeLine.vue"
import Image from "@/components/articles/components/Image.vue"
import Quote from "@/components/articles/components/Quote.vue"

let controller = new ScrollMagic.Controller()

let shows = reactive(new Array(20).fill(false))

onMounted(() => {
    new ScrollMagic.Scene({
        triggerElement: "#mouse",
        triggerHook: 0.7,
        duration: 100,
    })
        .on("enter", () => {
            anime({
                targets: "#wordCloud",
                opacity: 1,
                duration: 1000,
                easing: "easeInSine",
            })
        })
        .addTo(controller)

    for (let i = 0; i < 17; i++) {
        new ScrollMagic.Scene({
            triggerElement: `#e${i + 1}`,
            triggerHook: 0.5,
            duration: 100,
        })
            .on("enter", () => {
                shows[i] = true
            })
            .addTo(controller)
    }

    document.title = "CASleuth | HP | Integrated HP"
})
</script>

<template>
    <article-page title="INTEGRATED HP">
        <template #default>
            <quote>
                <p>"Human Practices is the study of how your work affects the world, and how the world affects your work."</p>
                <p class="text-right mt-4">——Peter Carr</p>
            </quote>
            <paragraph class="mt-5">
                <p>
                    A crucial aspect of scientific research is to explore the impact of research on society and explicitly define its potential
                    consequences. This holds particularly true in the field of life sciences. Therefore, we have fully considered the impact of our
                    project on the world throughout the entire process. We identified and interviewed stakeholders and reached out to relevant
                    professors within our reach to explore the connection between our project and the world. We have done everything within our
                    capacity to ensure that our project truly benefits humanity while causing no harm to the environment. In this part, we presented
                    all the relevant activities we had done during the whole process.
                </p>
            </paragraph>

            <div class="mt-5 relative">
                <div
                    class="w-[200px] h-[200px] mx-auto rounded-full bg-orange-300 flex justify-center items-center"
                    style="box-shadow: 6px 5px 2px 0 rgba(0, 0, 0, 0.25) inset"
                    id="mouse"
                >
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-1.png" alt="" class="w-8/12" />
                </div>
                <div class="absolute top-[-120px] left-[700px] opacity-[0]" id="wordCloud">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-2.png" alt="" class="w-[400px]" />
                </div>
            </div>

            <header1 text="stakEholdErs iNdENtificatioN" />
            <div class="mt-5">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-32.svg" alt="" class="w-full" />
            </div>
            <paragraph class="mt-5">
                <p>
                    We conducted brainstorming sessions to identify stakeholders related to our project and conducted detailed stakeholder analysis.
                    We carefully selected individuals from various professions and backgrounds, including doctors, some specific companies and other
                    iGEMers, who are relevant stakeholders in our project. The picture above shows all the stakeholders related to our project in our
                    opinions.
                </p>
            </paragraph>

            <header1 text="stakEholdErs aNd ExpErts ENgagEMENt" />
            <paragraph>
                <p>
                    After identifying the stakeholders, we made every effort to establish contact with them. We used a combination of online and
                    offline approaches to engage in thorough communication. During these interactions, we presented our project and conducted
                    interviews to understand their perspectives. Based on their feedback, we made improvements to our project. Fortunately, they were
                    willing to participate in the interviews and provided us with valuable suggestions, enabling us to better understand people's
                    needs and enhance our project.
                </p>
            </paragraph>

            <div class="relative" id="tl">
                <time-line class="absolute left-0 top-0 z-0" />
                <div class="relative z-10 min-h-[8000px]">
                    <div class="mt-[50px] flex items-center" id="start">
                        <div class="image-container mr-[25px] flex flex-col gap-3 opacity-0" />
                        <moon-ball title="START" />
                        <div class="description-container ml-[25px] font-['ABeeZee'] opacity-0" />
                    </div>

                    <div id="e1" v-show="!shows[0]" class="h-[200px]" />
                    <div v-show="shows[0]" class="mt-[120px] flex items-center" id="start">
                        <div class="image-container mr-[25px] flex flex-col gap-3 opacity-0" />
                        <moon-ball title="APRIL" class="animate__animated animate__rotateIn" />
                        <div class="description-container ml-[25px] font-['ABeeZee'] opacity-0" />
                    </div>

                    <div v-show="shows[0]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-3.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-4.png" alt="" class="images" />
                        </div>
                        <moon-ball title="JUNE" class="opacity-0" />
                        <div class="description-container bg-[#81433c] ml-[25px] font-['ABeeZee'] animate__animated animate__backInRight">
                            <div class="flex">
                                <span class="desc-date">April 7th,2023</span>
                                <span class="desc-name ml-5">2021 Tongji-Software</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                Tongji-Software 2021 got a gold medal as well as the best software, which was the best results of our team among
                                recent years. Their experience was extremely important to us.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We contacted the leader of 2021 Tongji-Software via Wechat and asked her about the issue of deciding our project. She
                                encouraged us to find something that we are interested in and just start working together. She thought we will get a
                                good result as long as our project is complete.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Although we need to have an overall grasp of the project, we don't need to get too caught up in the details. Once we
                                get started, we will know what to do for the next step and find the direction eventually.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                We decided to find something we are all interested in and started our project soon due to her advice. It definitely
                                shortened the time in the early stages of our projects and lit up our passion for the project.
                            </p>
                        </div>
                    </div>

                    <div id="e2" v-show="!shows[1]" class="h-[200px]" />
                    <div v-show="shows[1]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#81433c] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">April 28th,2023</span>
                                <span class="desc-name ml-5">Attend CCiC networking events </span>
                                <div class="grow" />
                                <span class="desc-date text-right">Group</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this group?</h3>
                            <p>
                                CCiC (Conference of China iGEMer Community) is comprised of almost all the 2023 iGEM teams in China and is led by
                                outstanding former iGEM team members. The activities organized by them are a valuable reference for us.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We attend CCiC networking events on April 28th for the first time and attend three events in total. Some outstanding
                                former team members and experts gave explanations on the 2023 iGEM new standards, human practices, model, and software
                                in each CCiC networking event, elaborating on their understanding in these areas.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Through the CCiC networking events, we have gained a better understanding of the iGEM standards and also learned how
                                to carry out related work such as human practices.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                Based on their experience and advice, we have re-evaluated our project and further contemplated the overall planning
                                of the project. Some of their words provided us with inspiration and assistance for the development of our project
                                afterwards.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-5.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-6.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-7.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e3" v-show="!shows[2]" class="h-[200px]" />
                    <div v-show="shows[2]" class="mt-[50px] flex items-center">
                        <div class="w-[305px] flex flex-col gap-3 animate__animated animate__backInRight"></div>
                        <moon-ball title="MAY" class="animate__animated animate__rotateIn" />
                        <div class="w-[200px] font-['ABeeZee'] animate__animated animate__backInLeft"></div>
                    </div>

                    <div v-show="shows[2]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-8.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#81433c] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">May 9th, 2023</span>
                                <span class="desc-name ml-5">Dr. Guohui Chuai</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Expert</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this person?</h3>
                            <p>
                                Dr. Guohui Chuai is an expert in applying AI methods in CRISPR related problems and has wrote several famous papers in
                                this field. We assumed that he was helpful to our project.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We went to the lab of Biological and Medical Big Data Mining Group to communicate with Dr. Guohui Chuai. He was kind
                                and inspiring. He provided us with valuable advice and guidance in terms of model selection, data processing, and
                                other aspects, which helped us overcome our confusion and challenges.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                He explained to us why we don't need to consider the off-target issue and suggested building a database that includes
                                as many viruses as possible. Through this conversation, we gained clarity on the model selection and the development
                                of the final software. We also found the way to visualize model features.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                The choice of the model is an important step in our project. His advice helped us find suitable models as well as
                                feature interpretation methods, and it also enriched the functions of our software.
                            </p>
                        </div>
                    </div>

                    <div id="e4" v-show="!shows[3]" class="h-[200px]" />
                    <div v-show="shows[3]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#81433c] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">May 9th, 2023</span>
                                <span class="desc-name ml-5">2022 Tongji-Software </span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                2022 Tongji-Software is the immediate predecessor of our team. They picked us for the competition this year among all
                                the students interested in iGEM in our university so we have close contact with them.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We consulted them many questions through out the whole process and they were patient to answer all of them. They gave
                                us many advice on software and wiki but the one that we appreciate most was that their suggestion on the server.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                We were confused about the various choices of server and wondered which one was affordable and able to run our machine
                                learning models. Luckily, they listed some possible solutions and we finally solved the problems of renting a suitable
                                server.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                With their help, we knew when and how to finish the whole project and found the suitable server to help us run our
                                model with large data sets successfully.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-9.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-10.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e5" v-show="!shows[4]" class="h-[200px]" />
                    <div v-show="shows[4]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-11.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-12.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#81433c] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">May 18th, 2023</span>
                                <span class="desc-name ml-5">
                                    Tongji iGEM Communicating<br />
                                    Conference
                                </span>
                                <div class="grow" />
                                <span class="desc-date text-right">Expert</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why were these experts?</h3>
                            <p>
                                There are many excellent experts who are specialize in bioinformatics and some other biology field. We believe that
                                communicating with them helps us view our project from a comprehensive biological perspective, enabling us to rectify
                                any mistakes or errors in the biological aspects.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We invited 8 professors in School of Life Sciences and Technology, Tongji University. Tongji-China and Tongji-Software
                                introduced their respective projects and raised potential issues they may encounter. Afterwards, the teachers provided
                                us with advice and possible solutions based on our project progress and the difficulties we have faced.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Among them, Professor Qi Liu suggested that we focus on RNA viruses in virus selection and hoped that we could
                                accelerate the progress of the project as much as possible. Professors Yaozu Xiang, Ye Leng, and Jing Zhang helped us
                                resolve the issues we encountered in human practices.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                They knew detail of our project and examined it from various perspectives within the field of biology, ensuring the
                                correctness of our project in terms of biology. They have also provided us with avenues to establish connections with
                                other companies.
                            </p>
                        </div>
                    </div>

                    <div id="e6" v-show="!shows[5]" class="h-[200px]" />
                    <div v-show="shows[5]" class="mt-[50px] flex items-center">
                        <div class="w-[305px] flex flex-col gap-3 animate__animated animate__backInRight"></div>
                        <moon-ball title="JUNE" class="animate__animated animate__rotateIn" />
                        <div class="w-[200px] font-['ABeeZee'] animate__animated animate__backInLeft"></div>
                    </div>

                    <div v-show="shows[5]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#A55850] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">June 3rd, 2023</span>
                                <span class="desc-name ml-5">Shanghai East Hospital </span>
                                <div class="grow" />
                                <span class="desc-date text-right">Hospital</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this hospital?</h3>
                            <p>
                                Hospital is a suitable place to judge whether our project really benefit people. Shanghai East Hospital is one of the
                                best hospitals in Shanghai which consists of thousands of medical experts and serves millions of patients every year.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We conducted several doctors about the possible needs of our software. They approved our project and expressed the
                                desire for our software to include as many viruses as possible. We also communicated with some patients infected by
                                viruses like HPV. They all expressed their appreciation on our job and believed it would definitely be helpful.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Through the communication, we further felt the large number of patients disturbed by viral diseases, which confirmed
                                our thought that there is an urgent need of creating our software. Also, we knew what doctors and experts truly need
                                when dealing with problems of virus diseases.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                After interacting with the hospital, we adjusted our project to match people’s needs. We increase the virus variety to
                                cover as many as diseases to meet.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-13.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-14.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e7" v-show="!shows[6]" class="h-[200px]" />
                    <div v-show="shows[6]" class="mt-[50px] flex items-center">
                        <div class="w-[663px]"></div>
                        <moon-ball title="JULY" class="animate__animated animate__rotateIn" />
                    </div>
                    <div v-show="shows[6]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-15.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#A55850] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 2nd, 2023</span>
                                <span class="desc-name ml-5"> Tongji-China </span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                Tongji-China is another team in our university, and got gold medals every year. We communicated a lot every year and
                                this year is no exception.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We two teams communicated on a regular basis and discussed many problems. One of the communication we appreciated most
                                was the exchanged ideas of human practices. Also, we discussed the responsibility problems together.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Some of their ideas of human practices gave us some inspirations and helped us to organized these activities better.
                                We have also given more consideration to responsibility issues due to their advice.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                We gained a more comprehensive understanding of stakeholders, and considered issues of informed consent and privacy
                                protection for participants during the questionnaire and interviews.
                            </p>
                        </div>
                    </div>

                    <div id="e8" v-show="!shows[7]" class="h-[200px]" />
                    <div v-show="shows[7]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#A55850] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 8th-11th, 2023</span>
                                <span class="desc-name ml-5">10th CCiC</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Group</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                10th CCiC (Conference of China iGEMer Community) is comprised of almost all the 2023 iGEM teams in China. In this
                                national conference, more than 1500 candidates participated in it including members from 90 teams as well as several
                                experts.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We shared our project with all the participates in the conference. We connected with all the teams that have
                                similarities with us and kept communicating with them in a long run. We also built a group of CRISPR related teams as
                                well as a group of software related teams.
                                <a class="underline text-blue-400 cursor-pointer" data-bs-toggle="modal" data-bs-target="#ccicModal">Click here</a> to
                                see our slides in the conference.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                CCiC is the best way for us to find teams on similar topics in China. We knew the wonderful projects and current
                                progress of other teams from the connection. We also gained some advice from other teams.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                We reflected on our project progress and make our project more complete by comparing with other teams. It helped us
                                build solid partnership with several teams which gave us useful advice.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-16.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e9" v-show="!shows[8]" class="h-[200px]" />
                    <div v-show="shows[8]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-17.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#A55850] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 8th, 2023</span>
                                <span class="desc-name ml-5">CJUH-JLU-China</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                The project of CJUH-JLU-China is to detect microRNA related to breast carcinoma and evaluated the stability of several
                                crRNAs with dry lab work. We were surprised to find our project was quite similar to theirs.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We shared our projects together and exchanged our thoughts. They expressed their expectations for our project. We also
                                gave them some advice on their project.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                After interacting with them, we realized the application of CRISPR in breast cancer and confirmed our belief in
                                designing a useful software in CRISPR related diagnoses.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                After communicating with them, we upgraded our project to enable scoring of a wider range of sequences and helped them
                                score their target sequences.
                            </p>
                        </div>
                    </div>

                    <div id="e10" v-show="!shows[9]" class="h-[200px]" />
                    <div v-show="shows[9]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#A55850] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 20th,2023</span>
                                <span class="desc-name ml-5">Delonix Bioworks</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Company</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this company?</h3>
                            <p>
                                Delonix Bioworks is a company specializing in synthetic biology. Its CEO was also an iGEMer, who participated in iGEM
                                in 2007. We believe that communicating with staff in this company can definitely help our project keep in the right
                                direction in terms of synthetic biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We visited the company and had discussions with the technical staff, Dr. Dong Chen. We introduced our project to them
                                and share our purpose of our project. We also discussed the potential for commercializing our project.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                They offered us advice about both the scientific research applications and commercial aspects of our project. This
                                also provided us with ideas for optimizing our project. By visiting the company, we gained a thorough understanding of
                                the principles of synthetic biology.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                They provided us with valuable suggestions, which allowed us to further improve our project and align it more closely
                                with the principles of synthetic biology and the iGEM competition.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-18.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-19.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e11" v-show="!shows[10]" class="h-[200px]" />
                    <div v-show="shows[10]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-20.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-21.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#A55850] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 27th, 2023</span>
                                <span class="desc-name ml-5">CRISPR&Synbio<br />online meeting</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Group</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this group?</h3>
                            <p>
                                There are several iGEM teams focusing on CRISPR related problems in China this year, so we decided to build a group of
                                CRISPR related teams and hold a meeting of it.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                Over twenty members from 6 teams participate in the meeting. Each team introduced their own project, especially the
                                part related to CRISPR. Then we discussed on our projects as well as the past and future of CRISPR and synthetic
                                biology. After that, the idea of making a brochure on the topic of CRISPR-Cas system together hit us and we discussed
                                some relevant details.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                After the meeting, we knew that our project is quite similar to that of WHU-China and CJUH-JLU-China. With the
                                communication with these teams, we got better understanding of the use of CRISPR.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                Based on our extensive knowledge of CRISPR and its utilization in synthetic biology, we have implemented specific
                                enhancements to our project. Their opinions also proved our project is useful and beneficial to humans.
                            </p>
                        </div>
                    </div>

                    <div id="e12" v-show="!shows[11]" class="h-[200px]" />
                    <div v-show="shows[11]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#A55850] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">July 30th,2023</span>
                                <span class="desc-name ml-5">WHU-China</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                WHU-China made an efficiency prediction and and design tool for Cas9 sgRNA, which was similar to our project. Our
                                communication can benefit two teams in terms of software.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                We both participated in CCiC and CRISPR&Synbio online meeting and keep connection all the time. We discussed details
                                of both software on Wechat and considered relevant problems together.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                We thought about generalization effects based on the assumption that the data sets are different due to the
                                communication with their team.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                Their design tools are somewhat similar to ours, so they have provided us with some valuable insights. The process of
                                communication and collaboration has further prompted us to contemplate the software's design and functions.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-row animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-22.png" alt="" class="images rounded-0 w-1/2" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-23.png" alt="" class="images rounded-0 w-1/2" />
                        </div>
                    </div>

                    <div id="e13" v-show="!shows[12]" class="h-[200px]" />
                    <div v-show="shows[12]" class="mt-[50px] flex items-center">
                        <div class="w-[663px]"></div>
                        <moon-ball title="AUG." class="animate__animated animate__rotateIn" />
                    </div>
                    <div v-show="shows[12]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-24.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-25.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#A55850] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">August 8th,2023</span>
                                <span class="desc-name ml-5">Synbio Plus AI</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Group</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this group?</h3>
                            <p>
                                With the development of AI, an increasing number of people are beginning to explore the connection between biology and
                                AI. This year, many iGEM teams in China have also chosen projects that are related to AI and synthetic biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                SYSU-Software organized "Synbio Plus AI" and invited us to participate. During the conference, we had discussions on
                                various topics related to AI, including its essence and other AI-related issues. We also explored together the ways in
                                which AI and synthetic biology can be integrated in the future, as well as the prospects for their combined
                                development.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                This conference provided us with an opportunity to understand the perspectives of other teams on the relationship
                                between AI and synthetic biology. Through our interactions, we also gained insights into the projects of other
                                relevant teams.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                We explored the relevant issues of AI and synthetic biology with other teams, which further enhanced the application
                                of AI in our project.
                            </p>
                        </div>
                    </div>

                    <div id="e14" v-show="!shows[13]" class="h-[200px]" />
                    <div v-show="shows[13]" class="mt-[50px] flex items-center">
                        <div class="w-[663px]"></div>
                        <moon-ball title="SEP." class="animate__animated animate__rotateIn" />
                    </div>
                    <div v-show="shows[13]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#CD6C61] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">September 22th,2023</span>
                                <span class="desc-name ml-5">GenScript</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Company</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this company?</h3>
                            <p>
                                The cPass&trade; SARS-CoV-2 Neutralization Antibody Detection Kit, developed by GenScript, has been granted the first
                                patent authorization for a neutralizing antibody testing method in the United States. This achievement has made
                                significant contributions.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                After communicating on Wechat, they agreed to have an online meeting with us, discussing our project. They expressed
                                approval of our project and suggested that we could consider putting our software on their website to increase users.
                                They also gave us advice on entrepreneurship.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                We gained a comprehensive understanding of the virus detection company's overall situation. This further solidified
                                our belief in the great significance of our project.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                They confirmed the significance of our project and provided us with several potential directions for future
                                improvements.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-26.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e15" v-show="!shows[14]" class="h-[200px]" />
                    <div v-show="shows[14]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-27.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-28.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-29.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#CD6C61] ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">September 24th,2023</span>
                                <span class="desc-name ml-5">SJTU-Software</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                SJTU-Software is another team in Shanghai that focuses on software. We have discovered many similarities between our
                                projects this year. Since we are both located in Shanghai, we believe that offline communication is essential.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                Our two teams met at Shanghai Jiao Tong University. We gave them our brochures to help them understand our project.
                                Our two teams discussed the projects and current progress of both teams. We also explored together what needs to be
                                done next. development.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Their project is very interesting and it has shown us the application of AI in Directed Evolution. They raised some
                                questions about our project, which allowed us to better contemplate future improvement directions.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                Our communication with them helped us to improve our project and also gave us more confidence in the application of AI
                                in our project.
                            </p>
                        </div>
                    </div>

                    <div id="e16" v-show="!shows[15]" class="h-[200px]" />
                    <div v-show="shows[15]" class="mt-[50px] flex items-center">
                        <div
                            class="description-container bg-[#CD6C61] mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">September 30th,2023</span>
                                <span class="desc-name ml-5">NJU-China</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                This year, their team's dry lab experiments also utilized deep learning methods, sharing some similarities with our
                                project.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                Since getting acquainted at the CCIC conference, our two teams have maintained close contact. Together, we
                                participated in the synbio Plus AI conference organized by SYSU-Software. In late September, we also had online
                                discussions and exchanges regarding project experiments and HP.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Their project has enlightened us about the application of transfer learning in synthetic biology. Their suggestions
                                have also been tremendously helpful to us.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>Their suggestions have allowed us to further refine our software in early October, making it more user-friendly.</p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-33.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e17" v-show="!shows[16]" class="h-[200px]" />
                    <div v-show="shows[16]" class="mt-[50px] flex items-center">
                        <div class="w-[305px]" />
                        <moon-ball title="OCT." class="animate__animated animate__rotateIn" />
                    </div>
                    <div v-show="shows[16]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-ihp-30.png" alt="" class="images" />
                        </div>
                        <div
                            class="description-container bg-[#CD6C61] ml-[75px] font-['ABeeZee'] animate__animated animate__backInLeft"
                            style="width: 700px"
                        >
                            <div class="flex">
                                <span class="desc-date">October 7th,2023</span>
                                <span class="desc-name ml-5">Tsinghua-A</span>
                                <div class="grow" />
                                <span class="desc-date text-right">Team</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this team?</h3>
                            <p>
                                Tsinghua-A is also a team in AI&software village this year. They build an extensive homologous library of antibody FRs
                                and CDRs from various species.
                            </p>
                            <h3 class="desc-h1 mt-3">What happened?</h3>
                            <p>
                                As we were getting closer to completing our project, we invited their team to an online meeting for further
                                discussion. They eagerly accepted the invitation. During the meeting, both teams had a thorough discussion on the
                                project.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                They showed us how to adapt multi-dimensional scoring tools, which was interesting and worth trying. We were so
                                delighted to see their fantastic project.
                            </p>
                            <h3 class="desc-h1 mt-3">How did it affect our project?</h3>
                            <p>
                                Our communication with them proved invaluable in enhancing our project and understanding possible future improvement
                                of our project.
                            </p>
                        </div>
                    </div>

                    <div class="mt-[50px] flex items-center">
                        <div class="w-[305px]"></div>
                        <moon-ball title="END" />
                    </div>
                </div>
            </div>

            <header1 text="OVERALL CONCLUSION" />
            <paragraph>
                <p>
                    In conclusion, our Human Practices(HP) efforts are not standalone social activities detached from our project. From the outset of
                    devising our plan, we aimed to integrate it with the project's design and promotion. Following team discussions, we established
                    the fundamental concept of our HP: using questionnaires to guide our subsequent communication strategies, enhancing our project's
                    design based on the gathered information, refining our model, and gaining insights into the practical requirements of virus
                    detection through HP interactions. It is important to note that all our HP activities strictly adhere to relevant safety
                    guidelines.
                </p>
                <p>
                    During the process of our Human Practices, we made sure to listen to various groups of people while also sharing our own knowledge
                    and accomplishments in the field of virus detection. We understand the profound and interconnected nature of scientific research
                    projects and their impact on the wider community. Moving forward, our programs will strive towards more comprehensive and targeted
                    objectives, with a focus on applying our achievements in medical and industrial applications. Our journey is boundless and
                    ever-evolving.
                </p>
            </paragraph>

            <Image bare class="mt-10">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/ack-3.png" alt="" class="w-full" />
            </Image>

            <next-prev-page
                next-title="COMMUNICATION"
                next-link="/human-practices/communication"
                prev-title="OVERVIEW"
                prev-link="/human-practices"
            />
        </template>
    </article-page>

    <div class="modal fade modal-xl" id="ccicModal" tabindex="-1" aria-labelledby="ccicModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="ccicModalLabel">CCIC Slide</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="flex">
                        <div class="grow" />
                        <object type="application/pdf" data="/ccic.pdf" width="1024" height="700">
                            Looks like your browser doesn't support PDF Preview. <a href="/ccic.pdf" target="_blank">Click here</a> to get a copy of
                            the PDF.
                        </object>
                        <div class="grow" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.quote-container {
    border-radius: 40px;
    background: #e2d6b9;
    box-shadow: 0 8px 4px 0 rgba(0, 0, 0, 0.25) inset;

    color: #000;
    font-family: Moul, serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
}

.image-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 350px;

    padding: 2em;

    background-color: #e7c27e;
    border-radius: 32px;
    overflow: hidden;

    box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.25) inset;
}

.images {
    @apply rounded-xl transition ease-in-out hover:scale-110 duration-200;
}

.description-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 600px;

    padding: 2em;

    border-radius: 32px;
    overflow: hidden;

    box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.25) inset;
}

.desc-date {
    color: #ecc780;
    text-shadow: 0 6px 2px rgba(0, 0, 0, 0.25);
    font-family: Moul, serif;
    font-size: 17px;
}

.desc-type {
    color: #ecc780;
    text-shadow: 0 6px 2px rgba(0, 0, 0, 0.25);
    font-family: Moul, serif;
    font-size: 17px;
}

.desc-name {
    color: #fff;
    text-shadow: 0 6px 2px rgba(0, 0, 0, 0.25);
    font-family: Moul, serif;
    font-size: 17px;
}

.description-container h3 {
    @apply text-orange-300 italic text-xl;
}

.description-container p {
    @apply text-white tracking-wide;
}
</style>
