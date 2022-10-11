
const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/views/Login.vue"),
        isPublic: true,
        title: "Login"
    },
    {
        name: "details",
        path: "/details",
        component: () => import("@/views/Details.vue"),
        isPublic: false, 
        title: "Details"
    }
];
export default routes;
