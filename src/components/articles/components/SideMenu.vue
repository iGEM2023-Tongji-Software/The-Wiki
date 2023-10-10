<script setup lang="ts">
import $ from "jquery"
import SideMenuItem from "@/components/articles/components/SideMenuItem.vue"
import { computed, onMounted, ref, watch } from "vue"

interface MenuData {
    name: string
    position: number
}

const menus = ref<MenuData[]>([])

const refreshMenu = () => {
    menus.value = []
    $("h1").each((i, e) => {
        let text = e.innerText
        let pos = e.parentElement.offsetTop
        menus.value.push({
            name: text,
            position: pos,
        })
    })
}

const current = ref(0)

const handleParentScroll = (parent: Element, child: Element) => {
    if (parent && child) {
        let childRect = child.getBoundingClientRect()
        let parentRect = parent.getBoundingClientRect()

        // 如果子元素在父元素的上面或下面
        if (childRect.top < parentRect.top) {
            parent.scrollTop -= parentRect.top - childRect.top
        } else if (childRect.bottom > parentRect.bottom) {
            parent.scrollTop += childRect.bottom - parentRect.bottom
        }
    }
}

const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (menus.value[current.value + 1] && menus.value[current.value + 1].position <= scrollTop) {
        current.value = current.value + 1
    } else if (menus.value[current.value] && menus.value[current.value].position > scrollTop && current.value > 0) {
        current.value = current.value - 1
    }
    handleParentScroll(document.getElementsByClassName("menus")[0], document.getElementById(`subMenu-${current.value}`)!)
}

onMounted(() => {
    refreshMenu()
    window.addEventListener("scroll", handleScroll)
})

defineExpose({
    refreshMenu: refreshMenu,
})
</script>

<template>
    <div class="menu-container pt-4 pb-1 px-2 animate__animated animate__fadeInRight">
        <div class="menus">
            <div v-for="(menu, i) in menus" :key="i" :id="`subMenu-${i}`">
                <SideMenuItem :title="menu.name" :is-current="current === i" :is-last="i === menus.length - 1" />
            </div>
        </div>
        <div class="w-full text-center bottom-text mt-2">PARTS</div>
    </div>
</template>

<style scoped lang="scss">
.menu-container {
    @media (max-width: 1400px) {
        display: none;
    }
    position: fixed;
    right: 0;
    top: 200px;
    width: 220px;
    border-radius: 40px 0 0 40px;
    background: #253043;

    filter: drop-shadow(0px 10px 2px rgba(0, 0, 0, 0.55));
}

.menus {
    max-height: 350px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.bottom-text {
    font-family: Dynalight, serif;
    color: rgba(226, 157, 154, 1);
    //text-shadow: 1px 1px 1px #000;
    font-size: 50px;
}
</style>
