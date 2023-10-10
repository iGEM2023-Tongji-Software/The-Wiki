<script setup>
import NavBar from "@/components/NavBar.vue"
import Home from "@/components/home/index.vue"
import LoadingScreen from "@/components/helper/LoadingScreen.vue"
import { ref } from "vue"

const loading = ref(true)
window.addEventListener("load", () => {
    loading.value = false
})
</script>

<template>
    <LoadingScreen v-if="loading" />
    <header>
        <NavBar />
    </header>
    <main>
        <div class="content">
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <div>
                        <component :is="Component" />
                    </div>
                </transition>
            </router-view>
        </div>
    </main>
</template>

<style scoped>
.content {
    margin-top: 80px;
    background: #dcd2bb;
}

/* 初始状态 */
.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease; /* 可以调整过渡时间和缓动函数 */
}

.fade-enter-from, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    filter: blur(20px) brightness(2); /* 模糊和增加亮度 */
    opacity: 0;
}
</style>
