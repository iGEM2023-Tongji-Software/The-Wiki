import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/", component: () => import("@/components/home/index.vue") },
    { path: "/description", component: () => import("@/components/articles/pages/project-description.vue") },
    { path: "/project/design", component: () => import("@/components/articles/pages/project-design.vue") },
    { path: "/project/implementation", component: () => import("@/components/articles/pages/project-implementation.vue") },
    { path: "/project/model", component: () => import("@/components/articles/pages/project-model.vue") },
    { path: "/engineering", component: () => import("@/components/articles/pages/project-engineering.vue") },
    { path: "/contribution", component: () => import("@/components/articles/pages/project-contribution.vue") },
    { path: "/project/notebook", component: () => import("@/components/articles/pages/project-notebook.vue") },
    { path: "/project/software", component: () => import("@/components/articles/pages/project-software.vue") },
    { path: "/project/safety", component: () => import("@/components/articles/pages/project-safety.vue") },
    { path: "/project/poc", component: () => import("@/components/articles/pages/project-poc.vue") },
    { path: "/education", component: () => import("@/components/articles/pages/education.vue") },
    { path: "/human-practices", component: () => import("@/components/articles/pages/hp-overview.vue") },
    { path: "/human-practices/integrated-hp", component: () => import("@/components/articles/pages/hp-ihp.vue") },
    { path: "/human-practices/communication", component: () => import("@/components/articles/pages/hp-communication.vue") },
    { path: "/human-practices/inclusivity", component: () => import("@/components/articles/pages/hp-inclusivity.vue") },
    { path: "/human-practices/sustainable", component: () => import("@/components/articles/pages/hp-sustainable.vue") },
    { path: "/team", component: () => import("@/components/articles/pages/team-members.vue") },
    { path: "/team/collaboration", component: () => import("@/components/articles/pages/team-collaboration.vue") },
    { path: "/team/partnership", component: () => import("@/components/articles/pages/team-partnership.vue") },
    { path: "/team/attribution", component: () => import("@/components/articles/pages/team-attribution.vue") },
    { path: "/award", component: () => import("@/components/articles/pages/award.vue") },
    { path: "/construction", component: () => import("@/components/articles/pages/construction.vue") },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                behavior: "instant",
                top: 0,
                left: 0,
            }
        }
    },
})
