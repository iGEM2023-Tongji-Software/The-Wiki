<script setup>
import { onMounted } from "vue"
import anime from "animejs"
import $ from "jquery"

const animation = () => {
    /***报纸***/
    const w = window.innerWidth * 1.1
    const h = w * (4096 / 2731)
    const scale = w / 2731
    const x = -100 * scale
    const y = -70 * scale

    anime({
        targets: "#fg",
        width: w,
        height: h,
        opacity: [0, 1],
        translateX: [-1000, x],
        translateY: [-1000, y],
        easing: "easeOutCubic",
        duration: 2000,
    }).finished.then(() => {})

    background()
}

const background = () => {
    /***右上***/

    const w1 = window.innerWidth * (2200 / 3116)
    const h1 = w1 * (1979 / 1900)
    const x1 = 1701 * (window.innerWidth / 3116)
    const y1 = -100 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-1",
        width: w1,
        height: h1,
        translateX: [-2000, x1],
        translateY: y1,
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })

    /***右下***/

    const w2 = window.innerWidth * (2000 / 3116)
    const h2 = w2 * (2764 / 1900)
    const x2 = 1200 * (window.innerWidth / 3116)
    const y2 = 470 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-2",
        width: w2,
        height: h2,
        translateX: [-2000, x2],
        translateY: y2,
        rotate: 28.645,
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })

    /***左上***/

    const w3 = window.innerWidth * (2000 / 3116)
    const h3 = w3 * (2400 / 2000)
    const x3 = -1005 * (window.innerWidth / 3116)
    const y3 = -1166 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-3",
        width: w3,
        height: h3,
        translateX: [x3, x3],
        translateY: [y3, y3],
        rotate: [-90, 28.645],
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })

    /***左下***/

    const w4 = window.innerWidth * (1920 / 3116)
    const h4 = w4 * (1702 / 1900)
    const x4 = -342 * (window.innerWidth / 3116)
    const y4 = 1250 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-4",
        width: w4,
        height: h4,
        translateX: [-2000, x4],
        translateY: y4,
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })

    /***左下2***/

    const w6 = window.innerWidth * (1920 / 3116)
    const h6 = w6 * (1702 / 1900)
    const x6 = 642 * (window.innerWidth / 3116)
    const y6 = 1850 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-6",
        width: w6,
        height: h6,
        translateX: [-2000, x6],
        translateY: y6,
        rotate: 40,
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })

    /***Special***/

    const w5 = window.innerWidth * (5236.659 / 3116) * 0.85
    const h5 = w5 * (3320.409 / 1900) * 0.85
    const x5 = 432 * (window.innerWidth / 3116)
    const y5 = 89 * (window.innerWidth / 3116)

    anime({
        targets: "#bg-5",
        width: w5,
        height: h5,
        translateX: [4000, x5],
        translateY: y5,
        rotate: 26.491,
        opacity: 1,
        easing: "easeOutCubic",
        delay: 1000,
        duration: 2000,
    })
}

onMounted(() => {
    $("#home-container").css("min-height", String(window.innerWidth * 1.1 * (4096 / 2731) * 0.55) + "px")
    setTimeout(() => {
        animation()
    }, 500)
})
</script>

<template>
    <div id="home-container">
        <div id="ic-1-bg">
            <div id="bg-6" class="bg">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-3-small.png" alt="background-4" id="bg-4-img" class="bg-img" />
            </div>
            <div id="bg-1" class="bg">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-1-small.png" alt="background-1" id="bg-1-img" class="bg-img" />
            </div>
            <div id="bg-2" class="bg">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-3-small.png" alt="background-2" id="bg-2-img" class="bg-img" />
            </div>
            <div id="bg-3" class="bg">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-3-small.png" alt="background-3" id="bg-3-img" class="bg-img" />
            </div>
            <div id="bg-4" class="bg">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-4-small.png" alt="background-4" id="bg-4-img" class="bg-img" />
            </div>
            <div id="bg-5" class="bg-sp">
                <img src="https://static.igem.wiki/teams/4787/wiki/img/home-newspaper-small.png" alt="background-special" id="bg-sp-img" class="bg-img" />
            </div>
        </div>
        <div id="fg">
            <img src="https://static.igem.wiki/teams/4787/wiki/img/home-newspaper-small.png" alt="header" id="fg-img" />
        </div>
    </div>
</template>

<style scoped>
#home-container {
    overflow: hidden;
}

#fg {
    position: absolute;
    box-sizing: border-box;
    transform: rotate(3.321deg);
    opacity: 0;
    flex-shrink: 0;
    z-index: 6;
}

#fg-img {
    width: 100%;
}

.bg {
    position: absolute;
    box-sizing: border-box;
    opacity: 0;
    z-index: 4;
}

.bg-sp {
    position: absolute;
    box-sizing: border-box;
    opacity: 0;
    z-index: 5;
}

.bg-img {
    width: 100%;
    filter: blur(5px);
}
</style>
