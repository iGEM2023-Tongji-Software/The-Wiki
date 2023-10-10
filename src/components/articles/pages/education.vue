<script setup lang="ts">
import { onMounted, ref } from "vue"
import ArticlePage from "@/components/articles/article-page.vue"
import Paragraph from "@/components/articles/components/Paragraph.vue"
import Image from "@/components/articles/components/Image.vue"
import Header1 from "@/components/articles/components/Header1.vue"
import MoonBall from "@/components/articles/components/education/MoonBall.vue"
import TimeLine from "@/components/articles/components/education/TimeLine.vue"
import ScrollMagic from "scrollmagic"

let controller = new ScrollMagic.Controller()

let shows = ref(Array(10).fill(false))

onMounted(() => {
    for (let i = 0; i < 9; i++) {
        new ScrollMagic.Scene({
            triggerElement: `#e${i + 1}`,
            duration: 200,
            triggerHook: 0.5,
            reverse: false,
        })
            .on("enter", function () {
                shows.value[i] = true
            })
            .addTo(controller)
    }

    document.title = "CASleuth | Education"
})
</script>

<template>
    <article-page title="EDUCATION">
        <template #default>
            <div class="quote-container p-5 animate__animated animate__backInLeft">
                <p>
                    Diversity is essential in science communication. Popularizing science should not only be limited to written text but also
                    encompass other forms of expression.
                </p>
                <p class="text-right mt-4">——Yisheng Mao</p>
            </div>

            <paragraph class="mt-5">
                <p>
                    We firmly believe that education among the society is the fundamental pillar of Science, a way to build bridges to link science to
                    society. Despite lots of efforts scientists and researchers have made for it, we realized there is still so much misunderstanding
                    and knowledge gap between research community and public. As fellow researchers, we found it our responsibility to spread
                    scientific knowledge related to synthetic biology and our project to the public in an easy to understand form. So we adopted
                    various ways targeted different groups in the whole process, introducing our projects as well as CRISPR and synthetic biology
                    knowledge.
                </p>
            </paragraph>

            <div class="mt-5">
                <Image>
                    <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-1.png" alt="" class="w-[900px]" />
                </Image>
            </div>

            <header1 text="QUESTIONNAIRE" />
            <paragraph>
                <p>
                    We firmly believe that education among the society is the fundamental pillar of Science, a way to build bridges to link science to
                    society. Despite lots of efforts scientists and researchers have made for it, we realized there is still so much misunderstanding
                    and knowledge gap between research community and public. As fellow researchers, we found it our responsibility to spread
                    scientific knowledge related to synthetic biology and our project to the public in an easy to understand form. So we adopted
                    various ways targeted different groups in the whole process, introducing our projects as well as CRISPR and synthetic biology
                    knowledge.
                </p>
            </paragraph>

            <div class="mt-5">
                <Image caption="Fig. Results of questionnaire No.13~16">
                    <div class="flex flex-col">
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-2.png" alt="" class="w-[700px]" />
                        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-3.png" alt="" class="w-[700px] mt-4" />
                    </div>
                </Image>
            </div>

            <header1 text="Time linE" />
            <div class="relative" id="tl">
                <time-line class="absolute left-0 top-0 z-0" />
                <div class="relative z-10 min-h-[8000px]">
                    <div class="mt-[50px] flex items-center" id="start">
                        <div class="image-container mr-[25px] flex flex-col gap-3 opacity-0" />
                        <moon-ball title="START" />
                        <div class="description-container ml-[25px] font-['ABeeZee'] opacity-0" />
                    </div>

                    <div id="e1" v-show="!shows[0]" class="h-[200px]" />
                    <div v-show="shows[0]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-4.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-5.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-6.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-7.png" alt="" class="images" />
                        </div>
                        <moon-ball title="JUNE" class="animate__animated animate__rotateIn" />
                        <div class="description-container ml-[25px] font-['ABeeZee'] animate__animated animate__backInRight">
                            <div class="flex">
                                <span class="desc-date">June 6th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Tongji Synbio Academic Salon</span>
                            </div>
                            <h3 class="desc-h1 mt-5">Why was this activity?</h3>
                            <p>
                                We discovered that many of our classmates at school have a keen interest in synthetic biology. However, they have
                                limited opportunities to access relevant knowledge. Therefore, we thought it was necessary to organize an academic
                                salon event on synthetic biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We sent out a push notification on our official account, and we attracted approximately 30 people to attend our
                                activity. We introduced our project to everyone, along with the relevant knowledge of synthetic biology and iGEM.
                                Furthermore, everyone received a cultural and creative product made by us.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                After the science popularization event, we randomly interviewed several students who participated in the activity.
                                These students expressed that they gained a good understanding of synthetic biology and our project, as well as the
                                content of the iGEM competition.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                This event has helped us understand that there are many students in our school who are eager to receive popular
                                science knowledge related to synthetic biology. As a result, we should hold similar activities more frequently.
                            </p>
                        </div>
                    </div>

                    <div id="e2" v-show="!shows[1]" class="h-[200px]" />
                    <div v-show="shows[1]" class="mt-[50px] flex items-center">
                        <div class="description-container mr-[25px] font-['ABeeZee'] animate__animated animate__backInLeft">
                            <div class="flex">
                                <span class="desc-date">July 15th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Community Synbio<br />popularization activities</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                We knew that most children have little knowledge about basic biology, let alone synthetic biology. Fushunlu Community
                                composed of a large number of children, whose parents are busy with work. Organizing popular science activities in
                                this community can not only help parents take care of their children but also spread knowledge related to synthetic
                                biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We introduce synthetic biology to them using simple language and some vivid pictures. Through interactive Q&A
                                sessions, we have engaged them effectively to ensure their understanding.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                The community children ranged from 5 to 11 years old, so initially we were concerned about whether they would be able
                                to understand our content. However, their positive response put our worries at ease. They all expressed their desire
                                to see us again for the next session.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Good science communication means making the content understandable for everyone. Through this activity, we made
                                efforts to ensure that even young children could understand our content. It has taught us how to improve our science
                                communication skills in the future.
                            </p>
                        </div>
                        <moon-ball title="JULY" class="animate__animated animate__rotateIn" />
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-8.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-9.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e3" v-show="!shows[2]" class="h-[200px]" />
                    <div v-show="shows[2]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-10.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-11.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-12.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-13.png" alt="" class="images" />
                        </div>
                        <div class="description-container ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight" style="width: 700px">
                            <div class="flex">
                                <span class="desc-date">July 20th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">
                                    Middle School Student<br />
                                    Science Camp
                                </span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                Based on our personal experience, we had very little knowledge about synthetic biology during our high school years.
                                Therefore, we believe that popularizing relevant knowledge among high school students is highly important.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                At Middle School Student Science Camp, we let more teenagers know about “CRISPR-Cas” system as well as synthetic
                                biology in a form that they can understand. Of note is that we combine the Chinese traditional culture with biology,
                                we prepared sugar painting materials. Sugar painting is a form of traditional Chinese folk art using hot, liquid sugar
                                to create objects. We encourage them to use sugar painting to create artwork related to biology, in order to stimulate
                                their interest in biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                They found our science outreach methods engaging and easy to understand. They told us they had learned a lot they
                                wouldn't typically encounter in school in an interview afterwards.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Their positive response gave us the courage to continue conducting science outreach for students of other age groups.
                                It also makes us think about how to better integrate traditional culture into science popularization.
                            </p>
                        </div>
                    </div>

                    <div id="e4" v-show="!shows[3]" class="h-[200px]" />
                    <div v-show="shows[3]" class="mt-[50px] flex items-center">
                        <div class="description-container mr-[25px] font-['ABeeZee'] animate__animated animate__backInLeft">
                            <div class="flex">
                                <span class="desc-date">August 20th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Mini Game</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                The results of the questionnaire indicate that the majority of people prefer to acquire relevant knowledge through
                                games. Therefore, we believe that designing a related mini-game would be an effective way to popularize science
                                knowledge.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We aim to use this game as a way for everyone to understand the process of assembling an SNP. The game aligns with our
                                theme of 'detective,' and we've set the game's scenario within a “detective laboratory”. The game takes the form of a
                                strategy game, where players aim to complete as many tasks as possible within a designated time frame. You can see the
                                introduction of our mini-game
                                <a class="underline text-blue-400 cursor-pointer" data-bs-toggle="modal" data-bs-target="#miniGameModal">here</a>.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                We invited many people to play our game and plan to release it on Steam for more users to download and play. Those who
                                have played our game believe that it is well-designed and explains biological concepts efficiently. They find this
                                "edutainment" approach very suitable.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Through the design and production of this game, we have learned that science outreach should not be limited to
                                lectures alone. Games are an excellent form of science communication, and this realization has given us more
                                confidence to explore other diverse forms of science outreach.
                            </p>
                        </div>
                        <moon-ball title="AUG." class="animate__animated animate__rotateIn" />
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-14.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-15.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-16.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-17.png" alt="" class="images" />
                        </div>
                    </div>

                    <div id="e5" v-show="!shows[4]" class="h-[200px]" />
                    <div v-show="shows[4]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-col gap-3 animate__animated animate__backInLeft">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-18.png" alt="" class="images" />
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-19.png" alt="" class="images" />
                            <div class="flex gap-2">
                                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-20.png" alt="" class="images w-1/2" />
                                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-21.png" alt="" class="images w-1/2" />
                            </div>
                        </div>
                        <div class="description-container ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight" style="width: 700px">
                            <div class="flex">
                                <span class="desc-date">August 29th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right"> Brochure of CRISPR&synbio </span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                The results of the questionnaire survey indicate that many people are not familiar with CRISPR and synthetic biology,
                                or have only heard of them. We believe that it is crucial to popularize these concepts among the general public.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We have designed and produced a brochure that introduces the concept of CRISPR and its applications in synthetic
                                biology with WHU-China, SMBU-China, CJUH-JLU-China. We made it easy to be understood with simple language and
                                illustrations.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                We interviewed some people who have read the brochure, and they all mentioned that their understanding of CRISPR and
                                synthetic biology deepened after reading it. They found the brochure to be not only easy to understand but also
                                comprehensive.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                After producing the brochure, we gained a deeper understanding of CRISPR and synthetic biology, as well as learned how
                                to create informative and easy-to-understand educational brochures.
                            </p>
                        </div>
                    </div>

                    <div id="e6" v-show="!shows[5]" class="h-[200px]" />
                    <div v-show="shows[5]" class="mt-[50px] flex items-center">
                        <div class="description-container mr-[25px] font-['ABeeZee'] animate__animated animate__backInLeft">
                            <div class="flex">
                                <span class="desc-date">September 10th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Video</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                Bilibili is the Chinese version of YouTube. We believe that publishing popular science videos on this platform will
                                allow more people to gain in-depth knowledge about our project and synthetic biology.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We have created several videos related to our project and have uploaded them to Bilibili. Many people viewed our
                                videos and even followed us.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                Some people texted us on Bilibili that our videos are well done and quite fun. They urged us to uploaded more videos
                                on Bilibili about CRISPR and synbio.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Bilibili is a popular entertainment especially among young people. Uploading videos related to synthetic biology can
                                help them learn some biology knowledge while relaxing and it is a job worth doing.
                            </p>
                        </div>
                        <moon-ball title="SEP." class="animate__animated animate__rotateIn" />
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-22.png" alt="" class="images rounded-0" />
                        </div>
                    </div>

                    <div id="e7" v-show="!shows[6]" class="h-[200px]" />
                    <div v-show="shows[6]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-row gap-3 animate__animated animate__backInLeft">
                            <img
                                src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-23.png"
                                alt=""
                                class="images w-[150px] object-contain rounded-0"
                            />
                            <div class="flex flex-col gap-3">
                                <img
                                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-24.png"
                                    alt=""
                                    class="images w-[120px] rounded-0"
                                />
                                <img
                                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-25.png"
                                    alt=""
                                    class="images w-[120px] rounded-0"
                                />
                            </div>
                        </div>
                        <div class="description-container ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight" style="width: 700px">
                            <div class="flex">
                                <span class="desc-date">September 11th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Wechat Official Account</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                WeChat Official Accounts are one of the important ways for Chinese people to access information. However, we have
                                noticed that most of the articles on WeChat Official Accounts are about international news, and there are very few
                                articles related to science.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We have written several articles with a beautifully designed layout and published them on our official account. We
                                have shared our daily activities, project introductions, and updates on the account. We now have over 50 followers,
                                and one of our articles has received over 500 reads.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                After reading our articles, some people have connected to us and expressed great interest in our project. They feel
                                that our content showcases our project effectively and, as a result, have participated in activities organized by our
                                team.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                We are surprised by the large number of reads our articles. Through this experience, we have learned how to present
                                biological knowledge in a visual and textual format, effectively attracting more readers.
                            </p>
                        </div>
                    </div>

                    <div id="e8" v-show="!shows[7]" class="h-[200px]" />
                    <div v-show="shows[7]" class="mt-[50px] flex items-center">
                        <div class="description-container mr-[75px] font-['ABeeZee'] animate__animated animate__backInLeft" style="width: 700px">
                            <div class="flex">
                                <span class="desc-date">September 13th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Broadcast</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                We knew that many people have visual impairments or prefer not to acquire knowledge through text or video formats. So
                                broadcast is a good way to spread knowledge in our opinions.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                Therefore, we created an official account on Himalaya, a popular podcasting platform in China, and regularly post
                                podcast audio related to our project to enrich our popular science communication in a different format.
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                People who have listened to our podcasts believe that they have gained a lot of knowledge about biology and have
                                developed a deeper understanding of synthetic biology. They hope that we can produce more podcasts in the future.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                This is our first attempt at creating podcasts. During the process of producing podcast audio, we have come to
                                understand that using sound as a medium for popular science communication is different from other media formats.
                            </p>
                        </div>
                        <div class="image-container ml-[25px] flex flex-col gap-3 animate__animated animate__backInRight">
                            <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-26.png" alt="" class="images rounded-0" />
                        </div>
                    </div>

                    <div id="e9" v-show="!shows[8]" class="h-[200px]" />
                    <div v-show="shows[8]" class="mt-[50px] flex items-center">
                        <div class="image-container mr-[25px] flex flex-row gap-3 animate__animated animate__backInLeft">
                            <img
                                src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-23.png"
                                alt=""
                                class="images w-[150px] object-contain rounded-0"
                            />
                            <div class="flex flex-col gap-3">
                                <img
                                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-24.png"
                                    alt=""
                                    class="images w-[120px] rounded-0"
                                />
                                <img
                                    src="https://static.igem.wiki/teams/4787/wiki/img/article-res/education-25.png"
                                    alt=""
                                    class="images w-[120px] rounded-0"
                                />
                            </div>
                        </div>
                        <div class="description-container ml-[75px] font-['ABeeZee'] animate__animated animate__backInRight" style="width: 700px">
                            <div class="flex">
                                <span class="desc-date">September 16th,2023</span>
                                <div class="grow" />
                                <span class="desc-name text-right">Popular science picture book</span>
                            </div>
                            <h3 class="desc-h1 mt-4">Why was this activity?</h3>
                            <p>
                                In China, there is a lack of biology popular science picture books specifically designed for preschool and early
                                elementary school students. We wanted to help solve the problem.
                            </p>
                            <h3 class="desc-h1 mt-3">What did we do?</h3>
                            <p>
                                We collaborated with members from Fudan, ShanghaiTech, and NUDT-China to create a popular science picture book aimed
                                at pupils. We added interactive elements such as mazes into the picture books to make them more engaging and
                                entertaining. Click
                                <a class="underline text-blue-400 cursor-pointer" data-bs-toggle="modal" data-bs-target="#pictureBookModal">here</a>
                                to see our picture book
                            </p>
                            <h3 class="desc-h1 mt-3">What is their feedback?</h3>
                            <p>
                                We showed our picture books to some pupils and had discussions with them about the content. We were pleased to find
                                that they were able to understand the content of the picture books very well and found them to be highly enjoyable.
                            </p>
                            <h3 class="desc-h1 mt-3">What have we learned?</h3>
                            <p>
                                Creating picture books is indeed challenging because we need to consider the comprehension abilities of pupils.
                                However, it is also very rewarding. We have realized that we can contribute to changing the current situation of
                                limited popular science picture books and we look forward to creating more high-quality picture books in the future.
                            </p>
                        </div>
                    </div>
                </div>
                <!--                <div class="edu-mask" />-->
            </div>

            <Image bare>
                <img src="https://static.igem.wiki/teams/4787/wiki/img/article-res/ack-4.png" alt="" class="w-full" />
            </Image>
        </template>
    </article-page>

    <div class="modal fade modal-xl" id="pictureBookModal" tabindex="-1" aria-labelledby="pictureBookModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="pictureBookModalLabel">Picture Book</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="flex mt-4">
                        <div class="grow" />
                        <object type="application/pdf" data="https://static.igem.wiki/teams/4787/wiki/picture-book.pdf" width="1024" height="700">
                            Looks like your browser doesn't support PDF Preview.
                            <a href="https://static.igem.wiki/teams/4787/wiki/picture-book.pdf" target="_blank">Click here</a>
                            to get a copy of the PDF.
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

    <div class="modal fade modal-xl" id="miniGameModal" tabindex="-1" aria-labelledby="miniGameModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="pictureBookModalLabel">Introduction to our Mini Game</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="flex mt-4">
                        <div class="grow" />
                        <iframe
                            title="Tongji-Software: Introduction to our mini game (2023) [English]"
                            width="560"
                            height="315"
                            src="https://video.igem.org/videos/embed/e62cd9c9-86e0-43ac-8aee-af27bdd95ca5"
                            frameborder="0"
                            allowfullscreen=""
                            sandbox="allow-same-origin allow-scripts allow-popups"
                        ></iframe>
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

<style scoped lang="scss">
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

    background-color: #a55850;
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

.edu-mask {
    @apply absolute bottom-0 left-0 w-full z-20;
    height: 100%;
    background-color: #dcd2bb;
}
</style>
