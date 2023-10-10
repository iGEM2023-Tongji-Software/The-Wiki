<script setup lang="ts">
import anime, { AnimeParams } from "animejs"
import $ from "jquery"
import { onMounted } from "vue"
import Line from "@/components/home/BriefIntro/Line.vue"
import ScrollMagic, { Scene } from "scrollmagic"
import Eye from "./Eye.vue"

const props = defineProps({
    controller: ScrollMagic.Controller,
})

const animation = () => {
    const w1 = window.innerWidth * (2700 / 3116)
    const h1 = w1 * (654 / 3072)
    const x1 = 200 * (window.innerWidth / 3116)
    const y1 = 0.1 * (window.innerWidth / 3116)

    anime({
        targets: "#banner-img",
        width: w1,
        height: h1,
        translateX: x1,
        translateY: y1,
        opacity: [0, 1],
        easing: "easeOutCubic",
        duration: 2000,
    })

    const x2 = 660 * (window.innerWidth / 3116)
    const y2 = 400 * (window.innerWidth / 3116)
    const s2 = 72 * (window.innerWidth / 3116)
    $("#banner-text").css("font-size", `${s2}px`)

    anime({
        targets: "#banner-text",
        translateX: x2,
        translateY: y2,
        opacity: [0, 1],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 便笺动画（背景）
     */
    const w3 = window.innerWidth * (1823.3 / 3116)
    const h3 = w3 * (1288.27 / 1823.3)
    const x3 = 2000 * (window.innerWidth / 3116)
    const y3 = 1500 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-bg-1",
        width: w3,
        height: h3,
        translateX: x3,
        translateY: y3,
        rotate: -58,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    const w4 = window.innerWidth * (1823.3 / 3116)
    const h4 = w4 * (1288.27 / 1823.3)
    const x4 = -411 * (window.innerWidth / 3116)
    const y4 = 1500 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-bg-2",
        width: w4,
        height: h4,
        translateX: x4,
        translateY: y4,
        rotate: 3,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    const w5 = window.innerWidth * (1644.97 / 3116)
    const h5 = w5 * (1251.16 / 1644.97)
    const x5 = 1200 * (window.innerWidth / 3116)
    const y5 = 300 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-bg-3",
        width: w5,
        height: h5,
        translateX: x5,
        translateY: y5,
        rotate: 3.16,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    const w19 = window.innerWidth * (4000 / 3116)
    const h19 = w19 * (1251.16 / 1644.97)
    const x19 = -1200 * (window.innerWidth / 3116)
    const y19 = -2200 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-bg-4",
        width: w19,
        height: h19,
        translateX: x19,
        translateY: y19,
        rotate: 30,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 1号便签
     */

    const w6 = window.innerWidth * (1363.634 / 3116)
    const h6 = w6 * (963.485 / 1363.634)
    const x6 = -266 * (window.innerWidth / 3116)
    const y6 = 1900 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-fg-stk-1",
        width: w6,
        height: h6,
        translateX: x6,
        translateY: y6,
        rotate: -2.693,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 2号便签
     */

    const w8 = window.innerWidth * (1536.842 / 3116)
    const h8 = w8 * (1462.889 / 1536.842)
    const x8 = 1700 * (window.innerWidth / 3116)
    const y8 = -50 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-fg-stk-3",
        width: w8,
        height: h8,
        translateX: x8,
        translateY: y8,
        rotate: -2.693,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 3号便签
     */

    const w7 = window.innerWidth * (1706.57 / 3116)
    const h7 = w7 * (1211.869 / 1706.57)
    const x7 = 340 * (window.innerWidth / 3116)
    const y7 = 1670 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-fg-stk-2",
        width: w7,
        height: h7,
        translateX: x7,
        translateY: y7,
        rotate: 2.594,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 4号便签
     */

    const w9 = window.innerWidth * (1274 / 3116)
    const h9 = w9 * (969 / 1274)
    const x9 = 2000 * (window.innerWidth / 3116)
    const y9 = -300 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-fg-stk-4",
        width: w9,
        height: h9,
        translateX: x9,
        translateY: y9,
        rotate: 3.168,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 连接线
     */

    const w10 = window.innerWidth * (2177.5 / 3116)
    const h10 = w10 * (1385.5 / 2177.5)
    const x10 = 420 * (window.innerWidth / 3116)
    const y10 = 2130 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-the-line",
        width: w10,
        height: h10,
        translateX: x10,
        translateY: y10,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    // /**
    //  * the eye
    //  */
    //
    // const x19 = 420 * (window.innerWidth / 3116);
    // const y19 = 2130 * (window.innerWidth / 3116);
    //
    // anime({
    //   targets: "#the-eye",
    //   translateX: x19,
    //   translateY: y19,
    //   opacity: [0,0],
    //   easing: 'easeOutCubic',
    //   duration: 2000
    // })

    /**
     * 1号便签文本
     */

    const x11 = 130 * (window.innerWidth / 3116)
    const y11 = 2250 * (window.innerWidth / 3116)
    const w11 = 642 * (window.innerWidth / 3116)
    const s11 = 36 * (window.innerWidth / 3116)
    $(".stk-note-text").css("font-size", `${s11}px`)

    anime({
        targets: "#bi-stk-txt-1",
        translateX: x11,
        translateY: y11,
        width: w11,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 2号便签文本
     */

    const x12 = 2050 * (window.innerWidth / 3116)
    const y12 = 2200 * (window.innerWidth / 3116)
    const w12 = 755 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-txt-2",
        width: w12,
        translateX: x12,
        translateY: y12,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 3号便签文本
     */

    const x13 = 870 * (window.innerWidth / 3116)
    const y13 = 2600 * (window.innerWidth / 3116)
    const w13 = 813 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-txt-3",
        translateX: x13,
        translateY: y13,
        width: w13,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 4号便签文本
     */

    const x14 = 2380 * (window.innerWidth / 3116)
    const y14 = 2870 * (window.innerWidth / 3116)
    const w14 = 580 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-txt-4",
        width: w14,
        translateX: x14,
        translateY: y14,
        opacity: [0, 0],
        rotate: 1.813,
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 1号便签圆圈
     */

    const x15 = 515 * (window.innerWidth / 3116)
    const y15 = 1750 * (window.innerWidth / 3116)
    const r15 = 430 * (window.innerWidth / 3116)
    const f15 = 128 * (window.innerWidth / 3116)
    $(".stk-note-circle-text").css("font-size", `${f15}px`)

    anime({
        targets: "#bi-stk-crc-1",
        translateX: x15,
        translateY: y15,
        height: r15,
        width: r15,
        borderRadius: r15,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 2号便签圆圈
     */

    const x16 = 1450 * (window.innerWidth / 3116)
    const y16 = 2100 * (window.innerWidth / 3116)
    const r16 = 430 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-crc-2",
        translateX: x16,
        translateY: y16,
        height: r16,
        width: r16,
        borderRadius: r16,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 3号便签圆圈
     */

    const x17 = 2600 * (window.innerWidth / 3116)
    const y17 = 1150 * (window.innerWidth / 3116)
    const r17 = 430 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-crc-3",
        translateX: x17,
        translateY: y17,
        height: r17,
        width: r17,
        borderRadius: r17,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })

    /**
     * 4号便签圆圈
     */

    const x18 = 2700 * (window.innerWidth / 3116)
    const y18 = 2600 * (window.innerWidth / 3116)
    const r18 = 430 * (window.innerWidth / 3116)

    anime({
        targets: "#bi-stk-crc-4",
        translateX: x18,
        translateY: y18,
        height: r18,
        width: r18,
        borderRadius: r18,
        opacity: [0, 0],
        easing: "easeOutCubic",
        duration: 2000,
    })
}

onMounted(() => {
    $("#bi").css("min-height", String(window.innerWidth * 1.2 * (4096 / 2731) * 0.55) + "px")
    animation()
    initScrollAnimation()
})

/** TimeLine & Anime **/

/** Anime 0 **/
let l0a1: AnimeParams = {
    targets: ["#bi-bg-1", "#bi-bg-2", "#bi-bg-3", "#bi-bg-4"],
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 2000,
}

let l0a2: AnimeParams = {
    targets: ["#bi-the-line", "#bi-the-eye"],
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 2000,
}

/** SC 0 **/
let tl0 = anime.timeline({ autoplay: false })

/** Anime 1 **/
let l1a1: AnimeParams = {
    targets: "#bi-fg-stk-1",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

let l1a2: AnimeParams = {
    targets: "#bi-stk-crc-1",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 500,
}

let l1a3: AnimeParams = {
    targets: "#bi-stk-crc-txt-1",
    innerHTML: [0, 3],
    easing: "linear",
    duration: 1000,
    round: 1,
}

let l1a4: AnimeParams = {
    targets: "#bi-stk-txt-1",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

/** SC 1 **/
let tl1 = anime.timeline({ autoplay: false })

/** Anime 2 **/
let l2a1: AnimeParams = {
    targets: "#bi-fg-stk-2",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

let l2a2: AnimeParams = {
    targets: "#bi-stk-crc-2",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 500,
}

let l2a3: AnimeParams = {
    targets: "#bi-stk-crc-txt-2",
    innerHTML: [0, 10000],
    easing: "linear",
    duration: 1000,
    round: 1,
}

let l2a4: AnimeParams = {
    targets: "#bi-stk-txt-2",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

/** SC 2 **/
let tl2 = anime.timeline({ autoplay: false })

/** Anime 3 **/
let l3a1: AnimeParams = {
    targets: "#bi-fg-stk-3",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

let l3a2: AnimeParams = {
    targets: "#bi-stk-crc-3",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 500,
}

let l3a3: AnimeParams = {
    // targets: "#bi-stk-crc-txt-3",
    // innerHTML: "CNN",
    // easing: "linear",
    // duration: 1000,
    // round: 1,
}

let l3a4: AnimeParams = {
    targets: "#bi-stk-txt-3",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

/** SC 3 **/
let tl3 = anime.timeline({ autoplay: false })

/** Anime 4 **/
let l4a1: AnimeParams = {
    targets: "#bi-fg-stk-4",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

let l4a2: AnimeParams = {
    targets: "#bi-stk-crc-4",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 500,
}

let l4a3: AnimeParams = {
    targets: "#bi-stk-crc-txt-4",
    innerHTML: [0, 0.8],
    easing: "linear",
    duration: 1000,
    round: 10,
}

let l4a4: AnimeParams = {
    targets: "#bi-stk-txt-4",
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 1000,
}

/** SC 4 **/
let tl4 = anime.timeline({ autoplay: false })

let tl0_played = false
let tl1_played = false
let tl2_played = false
let tl3_played = false
let tl4_played = false

const initScrollAnimation = () => {
    tl0.add(l0a1).add(l0a2)
    tl1.add(l1a1).add(l1a2).add(l1a3).add(l1a4, "-=1300")
    tl2.add(l2a1).add(l2a2).add(l2a3).add(l3a4, "-=1300")
    tl3.add(l3a1).add(l3a2).add(l3a3).add(l2a4, "-=1300")
    tl4.add(l4a1).add(l4a2).add(l4a3).add(l4a4, "-=1300")

    let scene0 = new Scene({
        triggerElement: "#banner-img",
        duration: 100,
        triggerHook: "onCenter",
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!tl0_played) {
                tl0.play()
                tl0_played = true
            }
        })

    let scene1 = new Scene({
        triggerElement: "#bi-fg-stk-1",
        duration: 100,
        triggerHook: "onCenter",
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!tl1_played) {
                tl1.play()
                tl1_played = true
            }
        })

    let scene2 = new Scene({
        triggerElement: "#bi-fg-stk-2",
        duration: 100,
        triggerHook: "onCenter",
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!tl2_played) {
                tl2.play()
                tl2_played = true
            }
        })

    let scene3 = new Scene({
        triggerElement: "#bi-fg-stk-3",
        duration: 100,
        triggerHook: "onCenter",
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!tl3_played) {
                tl3.play()
                tl3_played = true
            }
        })

    let scene4 = new Scene({
        triggerElement: "#bi-fg-stk-4",
        duration: 100,
        triggerHook: "onCenter",
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!tl4_played) {
                tl4.play()
                tl4_played = true
            }
        })

    // let path1 = anime.path("#bi-the-line path")
    // let l5a1:AnimeParams = {
    //   targets: "#bi-the-eye",
    //   translateX: path1('x'),
    //   translateY: path1('y'),
    //   easing: 'linear',
    //   duration: 2000
    // }
    // let tl5 = anime.timeline({autoplay: false});
    // tl5.add(l5a1)
    //
    // let scene5 = new Scene({
    //   triggerElement: "#bi-fg-stk-1",
    //   duration: 500,
    //   triggerHook: "onCenter",
    // }).on("progress", function (event) {
    //   tl5.seek(tl5.duration * event["progress"]);
    // })

    scene0.addTo(props.controller)
    scene1.addTo(props.controller)
    scene2.addTo(props.controller)
    scene3.addTo(props.controller)
    scene4.addTo(props.controller)
    // scene5.addTo(props.controller)
}
</script>

<template>
    <div id="brief-intro-container">
        <div>
            <div id="banner-img">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/banner-small.png" alt="" class="box-shadow" style="width: 100%" />
            </div>
            <div id="banner-text"><span class="title">Brief introduction to the CASleuth project</span></div>
        </div>
        <div class="background-images">
            <div id="bi-bg-1">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-01-2.png"
                    style="opacity: 0.5"
                    alt=""
                    class="background-images-img"
                />
            </div>
            <div id="bi-bg-2">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-01-2.png"
                    style="opacity: 0.5"
                    alt=""
                    class="background-images-img"
                />
            </div>
            <div id="bi-bg-3">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-03-1.png"
                    style="opacity: 0.5"
                    alt=""
                    class="background-images-img"
                />
            </div>
            <div id="bi-bg-4">
                <img
                    src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-03-1.png"
                    style="opacity: 0.5"
                    alt=""
                    class="background-images-img"
                />
            </div>
        </div>
        <div class="foreground-images">
            <div id="bi-fg-stk-1">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-01-2.png" alt="" class="background-images-img" />
            </div>
            <div id="bi-fg-stk-2">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-01-2.png" alt="" class="background-images-img" />
            </div>
            <div id="bi-fg-stk-3">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-02.png" alt="" class="background-images-img" />
            </div>
            <div id="bi-fg-stk-4">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/stick-note-03-1.png" alt="" class="background-images-img" />
            </div>
        </div>
        <div class="the-line">
            <Line id="bi-the-line" />
        </div>
        <!--  <div class="the-eye">-->
        <!--    <Eye id="bi-the-eye" style="width: 262px; height: 139px; transform: rotate(-27.581deg);"/>-->
        <!--  </div>-->
        <div class="stk-note-text">
            <div id="bi-stk-txt-1">
                <div class="font-bold font-[Gravitas\ One]">3 kinds of CAS proteins</div>
                <br />
                <div class="font-[ABeeZee]">CASleuth can accurately predict gRNAs for 3 kinds of Cas proteins, Cas9, Cas12a, Cas13a.</div>
            </div>
            <div id="bi-stk-txt-2">
                <div class="font-bold font-[Gravitas\ One]">An effective model</div>
                <br />
                <div class="font-[ABeeZee]">We used a trained CNN model to provide a score for each input sequence.</div>
            </div>
            <div id="bi-stk-txt-3">
                <div class="font-bold font-[Gravitas\ One]">10000 kinds of viruses</div>
                <br />
                <div class="font-[ABeeZee]">We gathered genomic sequences from 3317 DNA viruses and 9121 RNA viruses.</div>
            </div>
            <div id="bi-stk-txt-4">
                <div class="font-bold font-[Gravitas\ One]">High training results</div>
                <br />
                <div class="font-[ABeeZee]">The Spearman Correlation Coefficient of our model reaches 0.88, 0.87 and 0.73 respectively.</div>
            </div>
        </div>
        <div class="stk-note-circles">
            <div id="bi-stk-crc-1" class="stk-note-circle">
                <div class="stk-note-circle-text" id="bi-stk-crc-txt-1">0</div>
            </div>
            <div id="bi-stk-crc-2" class="stk-note-circle">
                <div class="stk-note-circle-text" id="bi-stk-crc-txt-2">0</div>
            </div>
            <div id="bi-stk-crc-3" class="stk-note-circle">
                <div class="stk-note-circle-text" id="bi-stk-crc-txt-3">CNN</div>
            </div>
            <div id="bi-stk-crc-4" class="stk-note-circle">
                <div class="stk-note-circle-text" id="bi-stk-crc-txt-4">0</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    color: #101010;
    font-family:
        Gravitas One,
        serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

#banner-img {
    position: absolute;
    z-index: 20;
}

#banner-text {
    position: absolute;
    z-index: 21;
}

.background-images {
    position: absolute;
    z-index: 21;
}

.background-images-img {
    width: 100%;
}

.foreground-images {
    position: absolute;
    z-index: 22;
}

.the-line {
    position: absolute;
    z-index: 24;
}

.the-eye {
    position: absolute;
    z-index: 26;
}

.stk-note-text {
    position: absolute;
    z-index: 23;

    color: #101010;
    font-family:
        Gravitas One,
        serif;
    font-weight: 400;
}

.stk-note-circles {
    position: absolute;
    z-index: 25;
}

.stk-note-circle {
    background: #b39a85;
    box-shadow: 0 14px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.stk-note-circle-text {
    font-family: "Hanalei Fill", serif;
    color: white;
    font-weight: 400;
}
</style>
