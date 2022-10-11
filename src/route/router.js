import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from "./routes";
import { getUserDetails } from "@/services/storage.service";



function guardRoute(to, from, next) {
    const getToken = JSON.parse(getUserDetails());

    if (!getToken) {
        next({ path: "/login" });
    } else {
        next();
    }
}

const router = new VueRouter({
    mode: "history",
    routes: routes.map(route => ({
        name: route.name,
        path: route.path,
        component: route.component,
        beforeEnter: (to, from, next) => {
            document.title = route.title;
            
            if (!route.isPublic) return guardRoute(to, from, next);
            
            next();
        }
    }))
});

export default router;
