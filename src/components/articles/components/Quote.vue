<script setup lang="ts"></script>

<template>
    <div class="quote-container p-5 animate__animated animate__backInLeft">
        <slot />
    </div>
</template>
<style scoped>
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

.description-container h3 {
    @apply text-orange-300 italic text-xl;
}

.description-container p {
    @apply text-white tracking-wide;
}
</style>
