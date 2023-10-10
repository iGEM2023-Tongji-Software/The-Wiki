<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="moon-ball">{{ title }}</div>
</template>

<style scoped>
.moon-ball {
    width: 181px;
    height: 181px;
    border-radius: 181px;
    background: #e7c27e;
    box-shadow: 4px 5px 2px 0 rgba(0, 0, 0, 0.25) inset;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fafafa;
    text-shadow: 0 6px 2px rgba(0, 0, 0, 0.25);
    font-family: Moul, serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>
