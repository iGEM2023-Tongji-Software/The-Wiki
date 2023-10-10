<script setup lang="ts">
interface Props {
    title: string
    color: string
}

defineProps<Props>()
</script>

<template>
    <div class="ball-container flex justify-center items-center px-3">
        <span class="text-yellow-950">
            {{ title }}
        </span>
    </div>
</template>

<style scoped>
.ball-container {
    width: 225px;
    height: 225px;
    border-radius: 225px;
    background: v-bind(color);
    box-shadow: 0 7px 2px 0 rgba(0, 0, 0, 0.25) inset;

    font-family: "Luckiest Guy", serif;
    font-size: 36px;

    transition-duration: 300ms;
}

.ball-container:hover {
    cursor: pointer;
    scale: 1.1;
    transition-duration: 300ms;
}
</style>
