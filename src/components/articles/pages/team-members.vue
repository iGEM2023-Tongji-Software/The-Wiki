<script setup lang="ts">
import ArticlePage from "@/components/articles/article-page.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import MemberCard from "@/components/articles/components/team-members/MemberCard.vue"
import { onMounted, ref } from "vue"
import AdvisorCard from "@/components/articles/components/team-members/AdvisorCard.vue"
import InstructorCard from "@/components/articles/components/team-members/InstructorCard.vue"

const tips = ref(true)

onMounted(() => {
    document.title = "CASleuth | Team | Members"
})
</script>

<template>
    <article-page title="MEMBERS">
        <template #default>
            <div v-if="tips" class="member-container p-5 w-[700px] mx-auto my-5 animate__animated animate__backInLeft">
                <div class="flex">
                    <span class="text-xl font-['Moul']">Tips</span>
                    <span class="text-xl font-['ABeeZee'] ml-4">Put your mouse over the photos to see their information!</span>
                </div>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/tips-team-members.png" alt="" class="w-full" />
                <div class="flex mt-3">
                    <div class="grow" />
                    <a href="javascript:0" @click="tips = false">Close</a>
                </div>
            </div>

            <header1 text="TEAM LEADER" />

            <div class="flex flex-col gap-5">
                <member-card
                    color="#E29D9A"
                    direction
                    name="Shiyi Zhou"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-shiyi-zhou-1.jpg"
                >
                    My hobbies include traveling, music, and food. I am very honored to participate in this iGem competition, which enables me to
                    learn and work with many great students and teachers. It honed my teamwork skills and allowed me to learn a lot about synthetic
                    biology. I hope our software and databases can be of help to you！
                </member-card>

                <member-card
                    color="#E29D9A"
                    name="Ziyang Zhang"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-ziyang-zhang-1.jpg"
                >
                    I come from the School of Life Sciences and Technology at Tongji University. My major is bioinformatics. I am very happy to
                    participate in the iGEM competition. During the competition, I experienced the charm of synthetic biology. In the process of
                    advancing the project, I gained a deeper understanding of the CRISPR-CAS system. I hope to continue to delve into and study
                    synthetic biology in the future.
                </member-card>

                <member-card
                    color="#7FBADB"
                    direction
                    name="Weida Wang"
                    school="School of Software Engineering"
                    major="Software Engineering"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-weida-wang-1.jpg"
                >
                    Joining the iGEM team has been an enlightening journey for me. As a part of the Tongji Software division, I've had the privilege
                    of collaborating with exceptional peers, refining my coding skills in real-world applications. From the initial stages of website
                    creation to managing server maintenance, each step was filled with learning and camaraderie. I am thankful for this platform that
                    pushed our boundaries and inspired resilience in the face of challenges. I'm excited for you to experience our software！
                </member-card>
            </div>

            <header1 text="TEAM MEMBER" />

            <div class="flex flex-col gap-5">
                <member-card
                    color="#E29D9A"
                    direction
                    name="Mohan Chen"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-mohan-chen.png"
                >
                    I primarily handle paper investigation, data processing, and pipeline construction. My involvement in iGEM has provided me with a
                    deep understanding of synthetic biology and has significantly improved my coding skills. Additionally, the diverse range of HP
                    activities associated with it has emphasized the practical importance of our knowledge in bioinformatics. Furthermore, the
                    competition has strengthened our bonds of friendship, leaving me with wonderful memories.
                </member-card>

                <member-card
                    color="#E29D9A"
                    name="Kairu Qv"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-kairu-qv-1.jpg"
                >
                    I have the characteristics of being rigorous and serious as a science student, as well as the emotional side. For example, in my
                    free time, I enjoy watching movies and musicals. Participating iGEM gives me a chance to bring my knowledge into practice and make
                    acquaintance with many excellent friends. I feel so honored to be a member of this team. And, I sincerely hope our software will
                    help in synthetic biology.
                </member-card>

                <member-card
                    color="#E29D9A"
                    direction
                    name="Xuanyi Liu"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-xuanyi-liu-1.jpg"
                >
                    It is a great honor for me to participate in iGEM and become a member of Tongji-Software. iGEM not only represents a competition
                    but also serves as an incredible platform that provides me with a golden opportunity to learn from others. Engaging with
                    stakeholders and sharing scientific knowledge in Human Practices and Education parts were experiences I had seldom encountered
                    before, but I challenged myself and improved a lot throughout the entire journey.
                </member-card>

                <member-card
                    color="#E29D9A"
                    name="Zirui Fan"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-zirui-fan-1.jpg"
                >
                    Mainly responsible for model building, data processing and coding in the team. This competition made me more familiar with
                    synthetic biology and made me grow my coding ability. I also gained a lot from my teammates' excellent professional ability in the
                    process of teamwork.
                </member-card>

                <member-card
                    color="#E29D9A"
                    direction
                    name="Zhibo Wang"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-zhibo-wang-1.jpg"
                >
                    I am a senior from the Department of Bioinformatics at Tongji University, and I am honored to join this team. This team has a
                    clear division of labor and comprehensive planning, and everyone is outstanding. We can learn a lot from them. This is a rigorous
                    and interesting competition, and I hope our project can have good results.
                </member-card>

                <member-card
                    color="#E29D9A"
                    name="Leyi Yu"
                    school="School of Life Sciences and Technology"
                    major="Biotech"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-leyi-yu-1.png"
                >
                    I am Yu Leyi from Biotechnology, and my goal is simply to live(lol). I am delighted to participate in this year's iGEM and become
                    an iGemer. iGEM allows us to gain a deeper understanding of emerging technologies and industries, and learn cutting-edge knowledge
                    and skills. We also hope that our research can bring fresh impetus to the industry.
                </member-card>

                <member-card
                    color="#7FBADB"
                    direction
                    name="Yuxuan Wang"
                    school="School of Software Engineering"
                    major="Software Engineering"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-yuxuan-wang-1.jpg"
                >
                    Applying my software skills to showcase biotechnology is truly fascinating. In our team, we have many colleagues from diverse
                    fields, which has also allowed me to experience the allure of teamwork and its significance to software development. I feel
                    honored to be a part of our team, and I won't cease my learning journey. Hoping our achievements can make a meaningful impact.
                </member-card>

                <member-card
                    color="#7FBADB"
                    name="Junxiao Lv"
                    school="School of Software Engineering"
                    major="Software Engineering"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-junxiao-lv-1.jpg"
                >
                    Hello,I'm an ordinary student from Tongji University and my major is Software Engineering.I like all kinds of interesting things,
                    especially those related to my major.Through the competition, I gained not only valuable programming experience,but also
                    interdisciplinary experience.All in all, I found the IGEM both interesting and informative.
                </member-card>

                <member-card
                    color="#7FBADB"
                    direction
                    name="Yutong Chen"
                    school="School of Software Engineering"
                    major="Software Engineering"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-yutong-chen-1.png"
                >
                    Hello everyone, my name is Chen Yutong, and I am a student from the School of Software Engineering at Tongji University. In this
                    edition of iGEM, I am a member of the Tongji-Software team, responsible for developing the wiki and software components. This
                    competition has indeed been demanding, involving countless meetings, discussions, and brainstorming sessions among team members.
                    However, witnessing the remarkable outcome we achieved together makes it all worthwhile. I feel a great sense of joy and
                    accomplishment.
                </member-card>

                <member-card
                    color="#7FBADB"
                    name="Yao Zhang"
                    school="School of Software Engineering"
                    major="Software Engineering"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-yao-zhang-1.jpg"
                >
                    Hi, I am Yao Zhang, who is passionate about full-stack development, spanning both front-end and back-end aspects of web
                    applications. Outside of the tech realm, I cherish my moments behind the camera. Photography is not just a hobby but a way I
                    capture the world in its raw essence. This year, I've had the incredible opportunity to serve as the Wiki Front-end Development
                    Engineer for our iGEM competition team which has been a profoundly enriching experience.
                </member-card>

                <member-card
                    color="#E7C27E"
                    direction
                    name="Yuanyi Lu"
                    school="College of Design and Innovation"
                    major="Media and Communication Design"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-yuanyi-lu.jpg"
                >
                    I love observing life and thinking about how to optimize the details through design. I have always lived the motto of our college:
                    to learn and create for the meaning of life and the future of the world.I am interested in multidisciplinary teamwork, which is
                    why I actively participate in the competition.Collaborating with fellow students spanning disciplines such as biological science
                    and computer science, I feel incredibly fortunate to be part of this competition.
                </member-card>

                <member-card
                    color="#E7C27E"
                    name="Xialu Chen"
                    school="College of Design and Innovation"
                    major="Media and Communication Design"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-xialu-chen-1.jpg"
                >
                    "if you decribe a guy with ♀, 155cm, o¦ˆ8ˆ¦o, i>e-ntj, Aries-Taurus cusp, a sprite, adventurous girl, intrepid soul, Industrial
                    Design Major… That guy could be me！ " Contributing to a plethora of tasks and unraveling intricate challenges is genuinely
                    rewarding. As one of the pivotal figures in the team's design direction, I aspire to embark on an unparalleled iGEM journey with
                    our team, with the goal of providing an extraordinary experience for all！
                </member-card>
            </div>

            <header1 text="ADVISOR" />

            <div class="flex flex-col gap-5">
                <advisor-card
                    color="#B692DA"
                    direction
                    name="Shixuan Zhou"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    year="2022"
                    team="Tongji_Software"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-shixuan-zhou-1.jpg"
                >
                    Casleuth, a project by the 2023 Tongji Software team, recommends the best guide rna for crispr-cas systems. The project can detect
                    viruses quickly and accurately, and has the advantages of low cost and easy operation. Therefore, this project has great
                    significance and application value, which is needed in the epidemic of infectious diseases.
                </advisor-card>

                <advisor-card
                    color="#B692DA"
                    name="Yanping Zhao"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    year="2021"
                    team="Tongji_Software"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-yanping-zhao-1.jpg"
                >
                    Smart，Self-drived people.
                </advisor-card>

                <advisor-card
                    color="#B692DA"
                    direction
                    name="Shiyu Li"
                    school="School of Life Sciences and Technology"
                    major="Bioinformatics"
                    year="2022"
                    team="Tongji_Software"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-shiyu-li-1.jpg"
                >
                    This year, each team member has demonstrated an incredible level of prowess, presenting countless outstanding ideas and innovative
                    concepts. The level of talent and creativity showcased is truly inspiring. I firmly believe that each participant will not only
                    contribute their utmost performance but will also gain immense learning and personal growth from this experience. The true essence
                    of the competition lies not only in the final outcome but also in the growth, transformation, and camaraderie cultivated
                    throughout the process.
                </advisor-card>
            </div>

            <header1 text="INSTRUCTOR" />

            <div class="flex flex-col gap-5">
                <instructor-card
                    color="#72B5A9"
                    name="Dr. Qi Liu | Primary PI"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-dr-qi-liu.png"
                >
                    <p>Professor</p>
                    <p>School of Life and Technology at Tongji University</p>
                    <br />
                    <p>
                        He helped us brainstorm and determine the core of our project. What's more, he gave a lot of useful suggestions in algorithms.
                    </p>
                </instructor-card>

                <instructor-card
                    color="#72B5A9"
                    direction
                    name="Dr. Jing Zhang | Primary PI"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-dr-jing-zhang.png"
                >
                    <p>Professor</p>
                    <p>School of Life and Technology at Tongji University</p>
                    <br />
                    <p>She has provided crucial assistance in project management and advancement, funding support, and team building.</p>
                </instructor-card>

                <instructor-card
                    color="#72B5A9"
                    name="Dr. Guohui Chuai | Secondary PI"
                    url="https://static.igem.wiki/teams/4787/wiki/img/article-res/team-members-dr-guohui-chuai.png"
                >
                    <p>Assistant Professor</p>
                    <p>School of Life and Technology at Tongji University</p>
                    <br />
                    <p>He helped us brainstorm the core of our project and gave us a lot of useful suggestions in model and data.</p>
                </instructor-card>
            </div>
        </template>
    </article-page>
</template>

<style scoped>
.member-container {
    border-radius: 60px;
    background: rgba(226, 219, 202, 0.66);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25) inset;
}
</style>
