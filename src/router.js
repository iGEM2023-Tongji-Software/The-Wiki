import { createRouter, createWebHistory } from "vue-router"

const routes = [
    { path: "/tongji-software/", component: () => import("@/components/home/index.vue") },
    { path: "/tongji-software/description", component: () => import("@/components/articles/pages/project-description.vue") },
    { path: "/tongji-software/project/design", component: () => import("@/components/articles/pages/project-design.vue") },
    { path: "/tongji-software/project/implementation", component: () => import("@/components/articles/pages/project-implementation.vue") },
    { path: "/tongji-software/model", component: () => import("@/components/articles/pages/project-model.vue") },
    { path: "/tongji-software/engineering", component: () => import("@/components/articles/pages/project-engineering.vue") },
    { path: "/tongji-software/contribution", component: () => import("@/components/articles/pages/project-contribution.vue") },
    { path: "/tongji-software/project/notebook", component: () => import("@/components/articles/pages/project-notebook.vue") },
    { path: "/tongji-software/project/software", component: () => import("@/components/articles/pages/project-software.vue") },
    { path: "/tongji-software/project/safety", component: () => import("@/components/articles/pages/project-safety.vue") },
    { path: "/tongji-software/project/poc", component: () => import("@/components/articles/pages/project-poc.vue") },
    { path: "/tongji-software/education", component: () => import("@/components/articles/pages/education.vue") },
    { path: "/tongji-software/human-practices", component: () => import("@/components/articles/pages/hp-overview.vue") },
    { path: "/tongji-software/human-practices/integrated-hp", component: () => import("@/components/articles/pages/hp-ihp.vue") },
    { path: "/tongji-software/human-practices/communication", component: () => import("@/components/articles/pages/hp-communication.vue") },
    { path: "/tongji-software/human-practices/inclusivity", component: () => import("@/components/articles/pages/hp-inclusivity.vue") },
    { path: "/tongji-software/human-practices/sustainable", component: () => import("@/components/articles/pages/hp-sustainable.vue") },
    { path: "/tongji-software/team", component: () => import("@/components/articles/pages/team-members.vue") },
    { path: "/tongji-software/team/collaboration", component: () => import("@/components/articles/pages/team-collaboration.vue") },
    { path: "/tongji-software/team/partnership", component: () => import("@/components/articles/pages/team-partnership.vue") },
    { path: "/tongji-software/team/attributions", component: () => import("@/components/articles/pages/team-attribution.vue") },
    { path: "/tongji-software/award", component: () => import("@/components/articles/pages/award.vue") },
    { path: "/tongji-software/construction", component: () => import("@/components/articles/pages/construction.vue") },
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
