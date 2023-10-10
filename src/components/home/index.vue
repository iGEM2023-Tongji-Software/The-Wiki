<script setup>
import $ from "jquery"
import HomePage from "@/components/home/HomePage.vue"
import LoadingScreen from "@/components/helper/LoadingScreen.vue"
import { onMounted, ref } from "vue"
import WarningToast from "@/components/helper/WarningToast.vue"
import { Toast } from "bootstrap"
import BriefIntro from "@/components/home/BriefIntro/BriefIntro.vue"

const loading = ref(true)
const loadingFinished = ref(false)
let img_loads = ref(0)
const loading_comp = ref(null)
const lds = ref(loading_comp)

const img_loaded = () => {
    console.log("Img loaded")
    img_loads.value += 1
    if (img_loads.value >= 5) {
        lds.value.simpleBeforeUnmount()
        $("#preload-img").empty()
        loading.value = false
        loadingFinished.value = true
    }
}

let width = $(window).width()
let height = $(window).height()

$(window).on("resize", debounce(resizeHandler, 100))

function debounce(fn, delay) {
    let timer = null
    return function () {
        const context = this,
            args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, delay)
    }
}

function resizeHandler() {
    if ($(window).width() !== width) {
        // 宽度变化的处理
        const toastObject = document.getElementById("width-change-toast")
        const toast = new Toast(toastObject)
        toast.show()

        if ($(window).width() > 2000) {
            const toastObject = document.getElementById("width-max-toast")
            const toast = new Toast(toastObject)
            toast.show()
        }
        if ($(window).width() < 1024) {
            const toastObject = document.getElementById("width-min-toast")
            const toast = new Toast(toastObject)
            toast.show()
        }
    }

    // 更新宽高变量
    width = $(window).width()
    height = $(window).height()
}

onMounted(() => {
    if ($(window).width() > 2000) {
        const toastObject = document.getElementById("width-max-toast")
        const toast = new Toast(toastObject)
        toast.show()
    }
    if ($(window).width() < 1024) {
        const toastObject = document.getElementById("width-min-toast")
        const toast = new Toast(toastObject)
        toast.show()
    }
    document.title = "CASleuth"
})
</script>

<template>
    <div class="content">
        <LoadingScreen v-if="loading" @finish="loading = false" ref="loading_comp" />
        <HomePage v-if="loadingFinished" />
        <div hidden id="preload-img">
            <img src="https://static.igem.wiki/teams/4787/wiki/img/home-newspaper.png" alt="1" @load="img_loaded" />
            <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-1small.png" alt="2" @load="img_loaded" />
            <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-3small.png" alt="3" @load="img_loaded" />
            <img src="https://static.igem.wiki/teams/4787/wiki/img/home-bg-news-4small.png" alt="4" @load="img_loaded" />
            <img src="https://static.igem.wiki/teams/4787/wiki/img/abstract-small.png" alt="5" @load="img_loaded" />
        </div>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <WarningToast id="width-change-toast" title="Sorry!"
                >The elements in this web page cannot respond to browser width changes in real time. Please refresh the page and continue
                viewing.</WarningToast
            >
            <WarningToast id="width-max-toast" title="Sorry!"
                >Our web pages look best on browsers with a width of less than 2000 pixels. You can reduce the width of your browser window and
                continue browsing.</WarningToast
            >
            <WarningToast id="width-min-toast" title="Sorry!"
                >Our web pages look best on browsers with a width of larger than 1024 pixels. You can expand the width of your browser window or use a
                computer and continue browsing.</WarningToast
            >
        </div>
    </div>
</template>

<style scoped>
.content {
    background: #dcd2bb;
    min-height: 100vh;
}
</style>

<script></script>
