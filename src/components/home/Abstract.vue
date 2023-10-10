<script setup lang="ts">
import anime, { AnimeParams } from "animejs"
import ScrollMagic from "scrollmagic"
import Typed from "typed.js"
import $ from "jquery"
import { onMounted } from "vue"

const props = defineProps({
    controller: ScrollMagic.Controller,
})

/****TIMELINE****/

let tl1 = anime.timeline({ autoplay: false })

// 底图

const w1 = window.innerWidth * (2959 / 3116)
const h1 = w1 * (2652 / 2959)
const x1 = 78 * (window.innerWidth / 3116)
const y1 = 107 * (window.innerWidth / 3116)

let a1: AnimeParams = {
    targets: "#abs-img",
    width: w1,
    height: h1,
    translateX: x1,
    translateY: y1,
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 4000,
}

// 漫画

const w2 = window.innerWidth * (1986 / 3116)
const h2 = w2 * (1270 / 1986)
const r2 = 157 * (1986 / 3116) * 0.5
const x2 = 582 * (window.innerWidth / 3116)
const y2 = -2000 * (window.innerWidth / 3116)

let a2: AnimeParams = {
    targets: "#manga-div",
    width: w2,
    height: h2,
    translateX: x2,
    translateY: y2,
    borderRadius: r2,
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 2000,
}

// 左右图形

const w4 = window.innerWidth * (80 / 3116)
const h4 = w4 * (222 / 319)
const x4 = 470 * (window.innerWidth / 3116)
const y4 = -2400 * (window.innerWidth / 3116)

let a4: AnimeParams = {
    targets: "#manga-left-polygon",
    width: [w4, w4],
    height: [h4, h4],
    translateX: [x4, x4],
    translateY: [y4, y4],
    opacity: [0, 1],
    rotateY: 180,
    easing: "easeOutCubic",
    duration: 2000,
}

const w5 = window.innerWidth * (80 / 3116)
const h5 = w5 * (222 / 319)
const x5 = 2607 * (window.innerWidth / 3116)
const y5 = -2455 * (window.innerWidth / 3116)

let a5: AnimeParams = {
    targets: "#manga-right-polygon",
    width: [w5, w5],
    height: [h5, h5],
    translateX: [x5, x5],
    translateY: [y5, y5],
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 2000,
}

// 漫画下面的字

let now = 0
let active: Typed | null = null

const processPolygon = () => {
    if (now === 1) {
        $("#manga-left-polygon").hide(200)
        $("#manga-right-polygon").show(200)
    } else if (now === 6) {
        $("#manga-left-polygon").show(200)
        $("#manga-right-polygon").hide(200)
    } else {
        $("#manga-left-polygon").show(200)
        $("#manga-right-polygon").show(200)
    }
}

const w3 = window.innerWidth * (2200 / 3116)
const h3 = w3 * (242 / 1986)
const x3 = 460 * (window.innerWidth / 3116)
const y3 = -1975 * (window.innerWidth / 3116)
const t3 = 18 * (window.innerWidth / 3116)

let a3: AnimeParams = {
    targets: "#manga-text-div",
    width: w3,
    height: h3,
    translateX: x3,
    translateY: y3,
    fontSize: t3,
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 100,
    complete: function (_a) {
        setTimeout(() => {
            if (now === 0) {
                now = 1
                new Typed(".typing", {
                    strings: [
                        " In 2072,  a certain infectious disease suddenly broken out. Many people were infected and a long line formed at the hospital gate.",
                    ],
                    typeSpeed: 10,
                    showCursor: false,
                    onBegin(self: Typed) {
                        processPolygon()
                        if (active) {
                            active.stop()
                        }
                        active = self
                    },
                })
            }
        }, 1500)
    },
}

// 漫画切换

let tl2 = anime.timeline({ autoplay: false })

let l2a0: AnimeParams = {
    targets: "#manga-1",
    opacity: 1,
    duration: 400,
    update: function (anim) {
        if (now !== 1 && anim.progress > 0 && anim.progress < 100) {
            now = 1
            new Typed(".typing", {
                strings: [
                    " In 2072,  a certain infectious disease suddenly broken out. Many people were infected and a long line formed at the hospital gate.",
                ],
                typeSpeed: 10,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

let l2a1: AnimeParams = {
    targets: "#manga-1",
    opacity: [1, 0],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a2: AnimeParams = {
    targets: "#manga-2",
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a3: AnimeParams = {
    targets: "#manga-2",
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 400,
    update: function (anim) {
        if (now !== 2 && anim.progress > 0 && anim.progress < 100) {
            now = 2
            new Typed(".typing", {
                strings: [
                    "However, this viral infection produced symptoms that were not very different from the common cold, and doctors needed to determine the condition through precise testing. So they used the traditional PCR method to detect the virus.",
                ],
                typeSpeed: 5,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

let l2a4: AnimeParams = {
    targets: "#manga-2",
    opacity: [1, 0],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a5: AnimeParams = {
    targets: "#manga-3",
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a6: AnimeParams = {
    targets: "#manga-3",
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 400,
    update: function (anim) {
        if (now !== 3 && anim.progress > 0 && anim.progress < 100) {
            now = 3
            new Typed(".typing", {
                strings: [
                    "Unfortunately, PCR methods needed to be operated by trained health care workers in a tightly controlled laboratory environment and involved expensive machinery. This prevented the detection from being performed quickly and efficiently.\n" +
                        "More and more patients were waiting for treatment. At this time, the idea of applying the CRISPR-Cas system for virus detection emerged in the minds of scientists.",
                ],
                typeSpeed: 0,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

let l2a7: AnimeParams = {
    targets: "#manga-3",
    opacity: [1, 0],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a8: AnimeParams = {
    targets: "#manga-4",
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a9: AnimeParams = {
    targets: "#manga-4",
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 400,
    update: function (anim) {
        if (now !== 4 && anim.progress > 0 && anim.progress < 100) {
            now = 4
            new Typed(".typing", {
                strings: ["The scientist identified three proteins used in the CRISPR-Cas system: Cas9, Cas12, and Cas13."],
                typeSpeed: 5,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

let l2a10: AnimeParams = {
    targets: "#manga-4",
    opacity: [1, 0],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a11: AnimeParams = {
    targets: "#manga-5",
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a12: AnimeParams = {
    targets: "#manga-5",
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 400,
    update: function (anim) {
        if (now !== 5 && anim.progress > 0 && anim.progress < 100) {
            now = 5
            new Typed(".typing", {
                strings: [
                    "When the Cas protein was assembled into the gRNA corresponding to the virus, it can recognize the corresponding virus and detect it.\n" +
                        "Through practice, it was indeed found that CRISPR detection methods can efficiently detect viruses.",
                ],
                typeSpeed: 0,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

let l2a13: AnimeParams = {
    targets: "#manga-5",
    opacity: [1, 0],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a14: AnimeParams = {
    targets: "#manga-6",
    opacity: [0, 1],
    easing: "easeInOutCubic",
    duration: 100,
}

let l2a15: AnimeParams = {
    targets: "#manga-6",
    opacity: 1,
    easing: "easeInOutCubic",
    duration: 400,
    update: function (anim) {
        if (now !== 6 && anim.progress > 0 && anim.progress < 100) {
            now = 6
            new Typed(".typing", {
                strings: [
                    "For this reason, scientists had set up a DETECTIVE AGENCY,which specializes in checking and detecting different viruses.\n\n" +
                        "The core of virus detection was to synthesize the gRNA corresponding to the virus, and the core sign of the DETECTIVE AGENCY was the software/system that synthesizes the gRNA corresponding to the virus. That system is CASLEUTH, which is our project.",
                ],
                typeSpeed: 0,
                showCursor: false,
                onBegin(self: Typed) {
                    processPolygon()
                    if (active) {
                        active.stop()
                    }
                    active = self
                },
            })
        }
    },
}

onMounted(() => {
    tl1.add(a1).add(a2, "500").add(a3, "500").add(a4, "2000").add(a5, "2000")

    /****SCENE****/
    let played = false
    new ScrollMagic.Scene({
        triggerElement: "#abstract-container",
        duration: 500,
        triggerHook: 0.5,
        reverse: true,
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            if (!played) {
                tl1.play()
                played = true
            }
        })
        .addTo(props.controller)

    if ($(window).width() < 1400) {
        $(".typing").css("font-size", "2em")
    } else {
        $(".typing").css("font-size", "1.5em")
    }

    tl2.add(l2a0)
        .add(l2a1)
        .add(l2a2)
        .add(l2a3)
        .add(l2a4)
        .add(l2a5)
        .add(l2a6)
        .add(l2a7)
        .add(l2a8)
        .add(l2a9)
        .add(l2a10)
        .add(l2a11)
        .add(l2a12)
        .add(l2a13)
        .add(l2a14)
        .add(l2a15)

    new ScrollMagic.Scene({
        triggerElement: "#abstract-container",
        duration: 3400,
        offset: window.innerWidth * (1986 / 3116) * (1270 / 1986),
        triggerHook: 0.5,
        reverse: true,
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("progress", function (event) {
            tl2.seek(tl2.duration * event["progress"])
        })
        .setPin("#abstract-container")
        .addTo(props.controller)
})
</script>

<template>
    <div id="abstract-container">
        <div id="abs-img" class="abs">
            <img src="https://static.igem.wiki/teams/4787/wiki/img/abstract-small.png" alt="Abstract" class="inner-img" />
        </div>
        <div id="manga-div" class="manga">
            <img
                src="https://static.igem.wiki/teams/4787/wiki/img/manga-6-small.png"
                id="manga-6"
                style="opacity: 0"
                alt="Manga Page 6"
                class="manga-img"
            />
            <img
                src="https://static.igem.wiki/teams/4787/wiki/img/manga-5-small.png"
                id="manga-5"
                style="opacity: 0"
                alt="Manga Page 5"
                class="manga-img"
            />
            <img
                src="https://static.igem.wiki/teams/4787/wiki/img/manga-4-small.png"
                id="manga-4"
                style="opacity: 0"
                alt="Manga Page 4"
                class="manga-img"
            />
            <img
                src="https://static.igem.wiki/teams/4787/wiki/img/manga-3-small.png"
                id="manga-3"
                style="opacity: 0"
                alt="Manga Page 3"
                class="manga-img"
            />
            <img
                src="https://static.igem.wiki/teams/4787/wiki/img/manga-2-small.png"
                id="manga-2"
                style="opacity: 0"
                alt="Manga Page 2"
                class="manga-img"
            />
            <img src="https://static.igem.wiki/teams/4787/wiki/img/manga-1-small.png" id="manga-1" alt="Manga Page 1" class="manga-img" />
        </div>
        <div id="manga-text-div">
            <span class="typing manga-text"></span>
        </div>
        <div id="manga-left-polygon" class="manga-polygon">
            <img src="https://static.igem.wiki/teams/4787/wiki/img/polygon.png" id="polygon-left" alt="" class="inner-img" />
        </div>
        <div id="manga-right-polygon" class="manga-polygon">
            <img src="https://static.igem.wiki/teams/4787/wiki/img/polygon.png" id="polygon-right" alt="" class="inner-img" />
        </div>
    </div>
</template>

<style scoped>
#abstract-container {
    position: relative;
    min-height: 100vh;
    z-index: 10;
}

.abs {
    opacity: 0;
}

.inner-img {
    width: 100%;
}

#manga-div {
    position: relative;
    border: 7px solid #000;
    border-radius: 157px;
    width: 1194px;
    height: 834px;
    overflow: hidden;
    z-index: 12;
}

.manga-img {
    position: absolute;
    width: 100%;
}

#manga-text-div {
    position: relative;
    opacity: 0;
    z-index: 11;
}

.manga-text {
    font-family:
        Gravitas One,
        serif;
}

#manga-left-polygon {
    position: relative;
    transform: rotateX(180deg);
}

#manga-right-polygon {
    position: relative;
}
</style>
