<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import Header2 from "@/components/articles/components/Header2.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Image from "@/components/articles/components/Image.vue"
import { onMounted, ref } from "vue"
import * as echarts from "echarts/core"
import { PieChart } from "echarts/charts"
import { TitleComponent } from "echarts/components"
import { LabelLayout, UniversalTransition } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"
import NextPrevPage from "../components/NextPrevPage.vue"

echarts.use([PieChart, LabelLayout, UniversalTransition, CanvasRenderer, TitleComponent])

const option = {
    title: {
        text: "TIME\nLOOP",
        left: "center",
        top: "center",
        textStyle: {
            color: "#41201C",
            fontFamily: "Luckiest Guy",
            fontSize: 50,
        },
    },
    series: [
        {
            name: "Access From",
            type: "pie",
            z: 1,
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: "#dcd2bb",
                borderWidth: 2,
            },
            label: {
                show: true,
                position: "inside",
                rotate: "tangential",
                color: "#fff",
                fontSize: 25,
                fontFamily: "Luckiest Guy",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 600, name: "MARCH ~ MAY", itemStyle: { color: "#81433C" } },
                { value: 550, name: "JUNE ~ AUGUST", itemStyle: { color: "#A55850" } },
                { value: 450, name: "SEPTEMBER ~ NOVEMBER", itemStyle: { color: "#CD6C61" } },
                { value: 400, name: "FUTURE", itemStyle: { color: "#FF8F83" } },
            ],
        },
        {
            name: "Access From",
            type: "pie",
            z: 0,
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: "#dcd2bb",
                borderWidth: 2,
            },
            label: {
                show: true,
                position: "outside",
                rotate: "tangential",
                color: "#000",
            },
            labelLayout: {
                hideOverlap: false,
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: true,
            },
            data: [
                { value: 150, name: "1.Build a diverse team", itemStyle: { color: "#81433C" } },
                { value: 150, name: "2.Build on past iGEM success", itemStyle: { color: "#81433C" } },
                { value: 150, name: "3.Explore our content", itemStyle: { color: "#81433C" } },
                { value: 150, name: "4.Brainstorm broadly", itemStyle: { color: "#81433C" } },
                { value: 183, name: "5.Document progress", itemStyle: { color: "#A55850" } },
                { value: 183, name: "6.Integrate insights", itemStyle: { color: "#A55850" } },
                { value: 184, name: "7.Close the loop", itemStyle: { color: "#A55850" } },
                { value: 225, name: "8.Present evidence", itemStyle: { color: "#CD6C61" } },
                { value: 225, name: "9.Connect and share", itemStyle: { color: "#CD6C61" } },
                { value: 400, name: "10.Carry it forward", itemStyle: { color: "#FF8F83" } },
            ],
        },
    ],
}

interface TimeLoopData {
    title: string
    content: string
    color: string
}

const timeLoopData = ref<TimeLoopData[]>([
    {
        title: "1.Build a diverse team",
        content:
            "Before initiating the project, we built our team, Tongji-Software. Our team is composed of 14 individuals from three different departments. Each team member possesses unique strengths. With clear divisions of work, we complement each other's advantages and finished our project together.",
        color: "#81433C",
    },
    {
        title: "2.Build on past igem success",
        content:
            "In the early phases of our project, we thoroughly examined the wiki of past iGEM teams, deriving a wealth of inspiration from their work. These insights proved invaluable in successfully completing our own project. Apart from this, we also consulted with previous teams from our university, who provided us with helpful suggestions regarding topic selection and project progress. We express our sincere appreciation for their valuable contributions as well as advice.",
        color: "#81433C",
    },
    {
        title: "3.Explore our content",
        content:
            "In order to identify our project topic, we consulted more than 10 professors, as well as numerous teachers and fellow students specializing in biology. We also extensively reviewed recent literature related to our field. Eventually, we determined our topic and explored relevant content through literature review and activities in human practices.",
        color: "#81433C",
    },
    {
        title: "4.Brainstorm broadly",
        content:
            "After deciding our project topic, we embarked on extensive brainstorming sessions. We regularly organized meetings for brainstorming sessions and sought the guidance of professors and advisors to facilitate our brainstorming process. These brainstorming sessions greatly assisted in identifying the direction of our project and enabled us to commence its execution effectively.",
        color: "#81433C",
    },
    {
        title: "5.Document progress",
        content:
            "We extensively reviewed relevant literature to determine the optimal approach for completing the project. We finally decided to choose convolutional neural network methods to accomplish our project by comparing some other methods. We engaged in communication with numerous stakeholders to ensure that our project is beneficial to society.",
        color: "#A55850",
    },
    {
        title: "6.Integrate insights",
        content:
            "We comprehensively integrated the information we gathered, the project content, and the organization and participation in relevant activities. Based on our project, we designed the style of the wiki and organized related popular science activities. Subsequently, we documented and compiled everything we accomplished, creating the content for the wiki.",
        color: "#A55850",
    },
    {
        title: "7.Close the loop",
        content:
            "During the later stages of the project, we engaged in follow-up discussions with advisors, professors, and other stakeholders to reinforce the positive impact of our project on both individuals and society. Furthermore, we revisited our initial ideas and values, meticulously evaluating our progress to ensure that we successfully translated our vision into reality.",
        color: "#A55850",
    },
    {
        title: "8.Prevent evidence",
        content:
            "After completing our project, we conducted a thorough review and reflection of the entire process. We pondered upon how to better showcase our achievements and related activities to the public. We created videos and slides to showcase our ideas well.",
        color: "#CD6C61",
    },
    {
        title: "9.Connect and share",
        content:
            "We communicate with several teams and shared our project with them. They showed great interest in understanding our project and provided valuable suggestions for improvement. In addition, we registered to participate in iGEM jamboree, the largest synthetic biology event worldwide, to effectively share our project with a wider audience.",
        color: "#CD6C61",
    },
    {
        title: "10.Carry it forward",
        content:
            "Despite achieving our initial goals with the project, we continue to strive for further optimization. Our aim is to ensure that our project better serves the interests of stakeholders and contributes more to the fields of synthetic biology and virus detection. We will definitely carry it forward even after the competition.",
        color: "#FF8F83",
    },
])

const currentTimeLoop = ref(0)
const showTips = ref(true)

const onHover = (p: echarts.ECElementEvent) => {
    if (p.seriesIndex === 1) {
        if (showTips.value) {
            let tip = document.getElementById("tip")
            tip?.classList.add("animate__animated", "animate__bounceOutRight")
            tip!.onanimationend = () => {
                showTips.value = false
            }
        }
        if (currentTimeLoop.value !== p.dataIndex) {
            currentTimeLoop.value = p.dataIndex
            let detail = document.getElementById("detail")
            detail?.classList.add("animate__animated", "animate__swing")
            detail!.onanimationend = () => {
                detail?.classList.remove("animate__animated", "animate__swing")
            }
        }
    }
}

onMounted(() => {
    let chart = echarts.init(document.getElementById("loop-chart"))
    chart.setOption(option)
    chart.on("mouseover", onHover)

    document.title = "CASleuth | Human Practices"
})
</script>

<template>
    <article-page title="OVERVIEW">
        <template #default>
            <header1 text="SUMMARY" />
            <header2 text="What did we think about?" />
            <paragraph :padding-top="50">
                <p>
                    Many people are affected by viral infections, and some even lose their lives. This harsh reality has made us deeply aware of the
                    need to minimize the harm caused by viral infections. Therefore, our values are rooted in the belief that every individual
                    deserves to live a healthy life. We hope that everyone can have access to timely and reliable virus detection methods, regardless
                    of their background or circumstances.
                </p>
            </paragraph>

            <header2 text="What did we do?" />
            <paragraph :padding-top="50">
                <p>
                    Our project, Casleuth, is designed to contribute towards addressing the problems of virus detection, which aligns with our values.
                    In addition, we have actively engaged with stakeholders and experts in the field. We have also taken proactive steps to organize
                    various activities, including raising awareness about the importance of early detection. This collaborative approach allows us to
                    gather valuable insights and feedback, which ensures that our project remains focused on our values as well as the concept of
                    human practices. It is through these precious interactions that we have been able to improve our project, making it more aligned
                    with the needs of humans.
                </p>
                <p>In summary, we have tried our best to make sure that our project serves its intended purpose by interacting with society.</p>
            </paragraph>
            <Image caption="Fig. Brief Summary of Human Practices" bare>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-1.png" alt="" class="w-[800px] mt-5" />
            </Image>

            <header1 text="qUEstioNNairE" />
            <Image caption="Fig. Composition of the questionnaire respondents.">
                <div class="flex flex-wrap gap-3 w-[850px] justify-center">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-2.png" alt="" class="w-[400px] object-contain" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-3.png" alt="" class="w-[400px] object-contain" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-4.png" alt="" class="w-[400px] object-contain" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-5.png" alt="" class="w-[400px] object-contain" />
                </div>
            </Image>
            <paragraph class="mt-5">
                <p>
                    Knowing the public's awareness of virus detection is essential in engagement with the community. Therefore, during the initial
                    phase of our project, we designed a comprehensive questionnaire and utilized a mix of online and offline approaches to gather
                    responses. This approach ensured participation from a diverse range of individuals and enhanced the accuracy of our questionnaire.
                </p>
                <p>
                    We designed 16 questions in our questionnaire, including the understanding level of virus detecting system and synthetic biology.
                    In order to rich a broader audience, we have released the questionnaire online. We also included fundamental knowledge about
                    synthetic biology and virus detection in the questionnaire to enhance people's relevant understanding. Within approximately four
                    months after releasing the questionnaire, we collected 582 responses in total. Relevant data indicates that the collected
                    questionnaire responses originate from more than 20 provinces in China. Furthermore, the survey respondents exhibit a wide
                    distribution in terms of age, occupation, and educational background, with a balanced gender ratio. The questionnaire results
                    indicate that more than half of the respondents lack a good understanding of virus detection, synthetic biology, and related
                    knowledge. Hence, we can infer that many people have limited knowledge in this field in China. Also, based on the questionnaire
                    results, it is evident that people hold optimistic views regarding the future applications of CRISPR virus detection tools. As a
                    result, we are committed to carrying out this project and strive to enhance public awareness of this knowledge through human
                    practices and education activities and endeavor to develop tools that resonate with the public's viewpoints.
                </p>
                <p>
                    It is worth mentioning that we clearly stated the purpose of our surveys and assured respondents that their personal privacy would
                    not be compromised. At the beginning of each survey, we emphasized that participation was voluntary and individuals had the choice
                    to skip any questions they were uncomfortable with. In fact, our surveys did not include any sensitive personal information that
                    most people would consider private.
                </p>
            </paragraph>
            <Image class="mt-5" caption="Fig. Public understanding level of relevant knowledge">
                <div class="flex flex-col w-[850px] gap-3 items-center">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-7.png" alt="" class="w-[800px] object-contain" />
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/hp-overview-6.png" alt="" class="w-[800px] object-contain" />
                </div>
            </Image>

            <header1 text="TIME LOOP" />
            <div class="w-full h-[700px] -mt-20" id="loop-chart" />
            <div class="time-loop-detail w-10/12 mx-auto p-5" id="detail">
                <h2 class="font-['Moul'] text-orange-300" style="text-shadow: 0 6px 2px rgba(0, 0, 0, 0.25)">
                    {{ timeLoopData[currentTimeLoop].title }}
                </h2>
                <p class="text-white font-['ABeeZee'] mt-4 ml-3">
                    {{ timeLoopData[currentTimeLoop].content }}
                </p>
            </div>
            <div class="flex mt-2 items-center w-10/12 mx-auto" id="tip" v-if="showTips">
                <div class="grow" />
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/tips-hp-overview.png"
                    class="w-[200px] border-white border-solid border-2 object-contain"
                    alt=""
                />
                <div class="ml-3 flex items-center">
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/tips.png" class="w-[32px] object-contain" alt="" />
                    <span class="font-['ABeeZee']">Tips: put your mouse on the label of the pie chart to learn about other periods.</span>
                </div>
            </div>

            <next-prev-page next-title="INTEGRATED HP" next-link="/human-practices/integrated-hp" />
        </template>
    </article-page>
</template>

<style scoped>
.time-loop-detail {
    border-radius: 40px;
    background: v-bind(timeLoopData [currentTimeLoop].color);
    box-shadow: 0 8px 2px 0 rgba(0, 0, 0, 0.25) inset;
}
</style>
