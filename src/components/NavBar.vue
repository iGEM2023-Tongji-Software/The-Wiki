<script setup lang="ts">
import { computed, ref } from "vue"

const nowActive = ref(0)
const navItemClass = (i: number) => "nav-link"
</script>

<template>
    <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container-fluid" style="margin-left: 25px">
            <div>
                <a>
                    <img src="@/assets/logo.svg" alt="logo" width="50" />
                </a>
            </div>
            <div class="w-100" style="margin-left: 30px">
                <ul class="navbar-nav row">
                    <li class="nav-item col-sm-auto"></li>
                    <li class="nav-item col-sm">
                        <router-link :class="navItemClass(0)" @click="nowActive = 0" to="/tongji-software/">Home</router-link>
                    </li>
                    <li class="nav-item dropdown col-md">
                        <a :class="`${navItemClass(1)} dropdown-toggle`" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Team </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/team" @click="nowActive = 1"> Members </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/attributions" @click="nowActive = 1"> Attribution </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/team/collaboration" @click="nowActive = 1"> Collaborations </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/team/partnership" @click="nowActive = 1"> Partnership </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown col-md">
                        <a :class="`${navItemClass(2)} dropdown-toggle`" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Project </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/description" @click="nowActive = 2"> Description </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/design" @click="nowActive = 2"> Design </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/implementation" @click="nowActive = 2"> Implementation </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/model" @click="nowActive = 2"> Model </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/engineering" @click="nowActive = 2"> Engineering </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/contribution" @click="nowActive = 2"> Contribution </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/notebook" @click="nowActive = 2"> Notebook </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/software" @click="nowActive = 2"> Software </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/safety" @click="nowActive = 2"> Safety </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/project/poc" @click="nowActive = 2"> Proof of Concept </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item col-md">
                        <router-link :class="navItemClass(3)" @click="nowActive = 3" to="/tongji-software/education">Education</router-link>
                    </li>
                    <li class="nav-item dropdown col-md">
                        <a :class="`${navItemClass(4)} dropdown-toggle`" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Human Practices
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/human-practices" @click="nowActive = 4"> Overview </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/human-practices/integrated-hp" @click="nowActive = 4">
                                    Integrated HP
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/human-practices/communication" @click="nowActive = 4">
                                    Communication
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/human-practices/inclusivity" @click="nowActive = 4">
                                    Inclusivity
                                </router-link>
                            </li>
                            <li>
                                <router-link class="dropdown-item" to="/tongji-software/human-practices/sustainable" @click="nowActive = 4">
                                    Sustainable
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item col-sm">
                        <router-link :class="navItemClass(5)" @click="nowActive = 5" to="/tongji-software/award">Award</router-link>
                    </li>
                    <li class="nav-item col-sm-1"></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgba(129, 67, 60, 1);
    height: 80px;
}

.nav-link {
    font-family: "Hanalei Fill", serif;
    font-size: 20px;
    color: #dcd2bb;
    white-space: nowrap;
}

.dropdown-menu {
    background-color: rgba(129, 67, 60, 1);
}

.dropdown-item {
    font-family: "Hanalei Fill", serif;
    font-size: 20px;
    color: #dcd2bb;
    white-space: nowrap;
}
</style>

<script></script>
