import { createRouter, createWebHistory } from "vue-router";
import Main from "./components/Main.vue";
import Wiki from "./components/Wiki.vue";
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: Main
    },
    {
        path: "/:wikiName",
        name: "wiki",
        component: Wiki
    },
    {
        path: "/sign-up",
        name: "signup",
        component: SignUp
    },
    {
        path: "/sign-in",
        name: "signin",
        component: SignIn
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;