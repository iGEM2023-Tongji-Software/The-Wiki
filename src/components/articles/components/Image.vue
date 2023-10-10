<script setup lang="ts">
interface Props {
    bare?: boolean
    caption?: string
}

withDefaults(defineProps<Props>(), { caption: "" })
</script>

<template>
    <div>
        <div class="flex justify-center">
            <div v-if="bare" class="image-bare-container">
                <slot />
            </div>
            <div v-else class="image-container">
                <slot />
            </div>
        </div>
        <div v-if="caption.length > 0" class="text-center mt-3 text-yellow-700 text-xl font-normal font-['ABeeZee']">
            {{ caption }}
        </div>
    </div>
</template>

<style scoped>
.image-bare-container {
    display: flex;
    justify-content: center;
    min-width: 700px;

    padding: 1em;
}
.image-container {
    display: flex;
    justify-content: center;

    padding: 2em;

    background-color: #e7c27e;
    border-radius: 32px;
    overflow: hidden;

    box-shadow: 4px 4px 2px 0 rgba(0, 0, 0, 0.25) inset;
}
</style>
