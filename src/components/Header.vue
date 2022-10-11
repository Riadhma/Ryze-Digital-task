<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><b>RYZE</b> DIGITAL</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/details">Details page</router-link>
                </li>
            </ul>
            <div class="ml-auto mt-2 mt-lg-0">
                <ul class="navbar-nav" v-if="!authUser">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login"> Login</router-link>
                    </li>
                </ul>

                <ul class="navbar-nav" v-if="authUser">
                    <li class="nav-item">
                        <a class="nav-link" v-on:click="logout();"> Logout </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { removeUserDetails, getUserDetails } from "@/services/storage.service";

export default {
    name: "Header",
    computed: {
        /* This computed property used to get the state of user's authentication */
        authUser() {
            return getUserDetails();
        }
    },
    methods: {
        /* Logout function will delete the userDetails object from LocalStorage and then routes back to login page */
        logout() {
            removeUserDetails();
            this.$router.push({ path: "/login" });
        }
    }
};
</script>

<style>
a.nav-link {
    cursor: pointer;
}
</style>
  