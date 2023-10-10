<script setup lang="ts">
withDefaults(
    defineProps<{
        paddingTop?: number
    }>(),
    { paddingTop: 30 }
)
</script>

<template>
    <div class="paragraph animate__animated animate__bounceInUp">
        <slot />
    </div>
</template>

<style scoped>
div {
    font-family: "ABeeZee", sans-serif;
    line-height: 1.5em;
    font-size: 1.3em;
    font-style: normal;
    font-weight: 500;
}

.paragraph {
    position: relative;

    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25) inset;
    background: rgba(246, 243, 235, 0.47);
    border-radius: 60px;
    padding: v-bind("`${paddingTop}px 80px 30px 80px`");
    z-index: 0;
}
</style>
