<script setup>
import { computed } from "vue"

const props = defineProps({
    title: String,
    isLast: Boolean,
    isCurrent: Boolean,
})

const style = computed(() => (props.isCurrent ? "color: #E36C66" : "color: #dcd2bb"))
</script>

<template>
    <div class="mt-2 mx-2 text-center">
        <a :href="`#${encodeURI(title)}`">
            <span class="side-menu-item-text" :style="style">{{ title.toLowerCase() }}</span>
        </a>
    </div>
    <div v-if="!isLast" class="w-full flex my-2">
        <div class="grow" />
        <img src="https://static.igem.wiki/teams/4787/wiki/img/article-menu-divider.svg" :style="style" alt="" style="width: 8px; height: 40px" />
        <div class="grow" />
    </div>
</template>

<style scoped>
.side-menu-item-text {
    font-family: Questrial, sans-serif;
    font-size: 20px;
    font-weight: bold;
}
a {
    text-decoration: none;
}
</style>
