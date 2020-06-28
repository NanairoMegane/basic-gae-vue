import Vue from "vue";
import VueRouter from "vue-router";
import TestPage from "./views/TestPage";

Vue.use(VueRouter);

const route = [
    {
        path: "/test",
        name: "test",
        component: TestPage
    }
];

export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: route
});