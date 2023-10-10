<script setup lang="ts">
import NextPage from "@/components/articles/components/NextPage.vue"
import PrevPage from "@/components/articles/components/PrevPage.vue"

interface Props {
    nextTitle?: string | null
    prevTitle?: string | null
    nextLink?: string | null
    prevLink?: string | null
}

withDefaults(defineProps<Props>(), {
    nextTitle: null,
    prevTitle: null,
    nextLink: null,
    prevLink: null,
})
</script>

<template>
    <div class="mt-10">
        <next-page v-if="nextTitle && nextLink" :text="nextTitle" :to="nextLink" />
        <prev-page v-if="prevTitle && prevLink" :text="prevTitle" :to="prevLink" />
    </div>
</template>
