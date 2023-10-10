<script setup lang="ts">
interface Props {
    width: number
    height: number
}

defineProps<Props>()
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="`${width + 4}`"
        :height="`${height * 1.3}`"
        :viewBox="`0 0 ${width + 4} ${height * 1.3}`"
        fill="none"
    >
        <g filter="url(#filter0_d_148_43)">
            <path
                :d="`M${width}
                ${height * 0.48}L${width - 41.5}
                0.314L5.8
                1.9L43
                ${height * 0.5}L1.9996
                ${height}L${width - 41.5}
                ${height * 0.98}L${width}
                ${height * 0.48}Z`"
                fill="#EDDA93"
            />
        </g>
    </svg>
</template>

<style scoped></style>
