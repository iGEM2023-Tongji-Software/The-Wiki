<script setup lang="ts">
import { ref } from "vue"
import anime from "animejs"

withDefaults(
    defineProps<{
        color: string
        direction?: boolean
        name: string
        school: string
        major: string
        year: string
        team: string
        url: string
    }>(),
    { direction: false }
)

const preview = ref(true)

let img = ref<HTMLDivElement | null>(null)

let animation_flag = false

const animation = () => {
    if (!animation_flag) {
        animation_flag = true
        anime({
            targets: img.value,
            translateX: 0,
            duration: 600,
            easing: "easeOutQuad",
        })
        preview.value = false
    }
}

const emits = defineEmits<{
    (e: "hovered"): void
}>()

const mo = () => {
    emits("hovered")
    animation()
}
</script>

<template>
    <div class="relative">
        <transition name="nc-content">
            <div v-if="!preview" class="flex member-grate-container">
                <div class="grow" v-if="!direction" />
                <div v-if="direction && !preview" id="content">
                    <div class="member-container flex p-5 w-[950px] items-center">
                        <div class="w-[650px] py-3">
                            <div class="flex">
                                <span class="font-['Moul'] text-xl">NAME:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ name }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">COLLEGE:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ school }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">MAJOR:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ major }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] tracking-wider text-xl">YEAR OF IGEM:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ year }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">TEAM:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ team }}</span>
                            </div>
                            <div class="mt-5">
                                <span class="font-['ABeeZee'] text-xl"> <slot /> </span>
                            </div>
                        </div>
                        <div class="ml-5">
                            <div class="w-[384px] h-[500px]" />
                        </div>
                    </div>
                </div>
                <div v-else id="content">
                    <div class="member-container flex p-5 w-[950px] items-center">
                        <div class="mr-5">
                            <div class="w-[384px] h-[500px]" />
                        </div>
                        <div class="w-[650px] py-3">
                            <div class="flex">
                                <span class="font-['Moul'] text-xl">NAME:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ name }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">COLLEGE:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ school }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">MAJOR:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ major }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] tracking-wider text-xl">YEAR OF IGEM:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ year }}</span>
                            </div>
                            <div class="flex mt-3">
                                <span class="font-['Moul'] text-xl">TEAM:</span>
                                <span class="font-['ABeeZee'] text-xl ml-5">{{ team }}</span>
                            </div>
                            <div class="mt-5">
                                <span class="font-['ABeeZee'] text-xl"> <slot /> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grow" v-if="direction" />
            </div>
        </transition>
        <div v-if="preview" class="w-full h-[596px]" />
        <div
            v-if="direction"
            class="absolute flex flex-col"
            @mouseover="mo"
            style="width: 382px; height: 500px; top: 50px; left: 520px; transform: translateX(-100px)"
            ref="img"
        >
            <div class="grow" />
            <div class="image-container p-3">
                <img :src="url" alt="" class="w-[350px] rounded-2xl object-contain" />
            </div>
            <div class="grow" />
        </div>
        <div
            v-else
            class="absolute flex flex-col"
            @mouseover="mo"
            style="width: 382px; height: 500px; top: 50px; left: 290px; transform: translateX(130px)"
            ref="img"
        >
            <div class="grow" />
            <div class="image-container p-3">
                <img :src="url" alt="" class="w-[350px] rounded-2xl object-contain" />
            </div>
            <div class="grow" />
        </div>
    </div>
</template>

<style scoped>
.image-container {
    border-radius: 30px;
    background: v-bind(color);
    box-shadow: 4px 4px 1px 0 rgba(0, 0, 0, 0.25) inset;
}

.member-container {
    border-radius: 60px;
    background: rgba(226, 219, 202, 0.66);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.25) inset;
}

.nc-content-enter-active,
.nc-content-leave-active {
    transition: all 0.6s ease-out;
}

.nc-content-enter-from,
.nc-content-leave-to {
    transform: v-bind(direction? "translateX(200px)": "translateX(-200px)");
    opacity: 0;
}
</style>
