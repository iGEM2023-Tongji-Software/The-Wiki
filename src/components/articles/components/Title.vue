<script setup lang="ts">
import { computed, onMounted, ref } from "vue"

interface Props {
    text: string
}

const props = defineProps<Props>()

const beanType = computed(() => {
    if (props.text.length <= 10) {
        return Math.floor(Math.random() * 3)
    } else {
        return Math.floor(Math.random() * 2)
    }
})
</script>

<template>
    <div class="title-container my-5 mx-auto animate__animated animate__backInDown">
        <div class="title-up">
            <span>{{ text }}</span>
        </div>
        <div class="title-down">
            <span>{{ text }}</span>
        </div>
        <div v-if="beanType === 0" class="bean-1" />
        <div v-else-if="beanType === 1" class="bean-2" />
        <div v-else-if="beanType === 2" class="bean-3" />
    </div>
</template>

<style scoped>
.title-container {
    width: 800px;
    height: 208px;
    background-image: url("https://static.igem.wiki/teams/4787/wiki/img/article-title.svg");
    background-size: contain;
    background-repeat: no-repeat;
}

.title-up {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 80px;
    color: #688c99;
    text-align: center;
    transform: translateY(20px) translateX(-20px);
}

.title-down {
    font-family: "Luckiest Guy", sans-serif;
    font-size: 80px;
    color: #688c9900;
    text-align: center;
    transform: translateY(-40px) translateX(-20px);
    -webkit-text-stroke: 1px #688c99;
}

.bean-1 {
    width: 100px;
    height: 150px;
    background-image: url("https://static.igem.wiki/teams/4787/wiki/img/bean-yellow-small.png");
    background-size: contain;
    background-repeat: no-repeat;

    position: relative;
    bottom: 150px;
    left: -20px;
}

.bean-2 {
    width: 100px;
    height: 150px;
    background-image: url("https://static.igem.wiki/teams/4787/wiki/img/bean-green-small.png");
    background-size: contain;
    background-repeat: no-repeat;

    position: relative;
    bottom: 150px;
    right: -700px;
}

.bean-3 {
    width: 100px;
    height: 150px;
    background-image: url("https://static.igem.wiki/teams/4787/wiki/img/bean-green-small.png");
    background-size: contain;
    background-repeat: no-repeat;

    position: relative;
    top: -280px;
    left: 80px;
}
</style>
