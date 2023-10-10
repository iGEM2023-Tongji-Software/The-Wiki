<script setup lang="ts">
import { defineProps } from "vue"
interface Props {
    width: number
}

defineProps<Props>()
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="`${width + 4}`" height="91" :viewBox="`0 0 ${width + 4} 91`" fill="none">
        <g filter="url(#filter0_d_148_43)">
            <path
                :d="`M${width}
                40.1656L${width - 40}
                0.314L5.8
                1.9L43
                42.4179L1.9996
                84.6275L${width - 41.5}
                81.12L${width}
                41.1656Z`"
                fill="#A22918"
            />
        </g>
    </svg>
</template>

<style scoped></style>
