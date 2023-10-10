<script setup>
import Poster from "@/components/home/Poster.vue"
import Abstract from "@/components/home/Abstract.vue"
import ScrollMagic from "scrollmagic"
import { onMounted, ref } from "vue"
import BriefIntro from "@/components/home/BriefIntro/BriefIntro.vue"
import $ from "jquery"

const controller = ref(new ScrollMagic.Controller())

onMounted(() => {
    let bi_tx = window.innerWidth * (-600 / 1217)
    $("#bi").css("transform", `translateY(${bi_tx}px)`)
})
</script>

<template>
    <Poster />
    <Abstract :controller="controller" />
    <BriefIntro id="bi" :controller="controller" />
    <div>
        <img src="https://static.igem.wiki/teams/4787/wiki/img/contacts-1x.png" style="width: 100vw" alt="Contact Us" />
    </div>
</template>

<style scoped></style>
