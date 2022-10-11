<template>
    <div id="login" class="login d-flex justify-content-center">

        <!-- form card login -->
        <div class="card card-form shadow border-0">
            <div class="card-header bg-white pb-4 border-0">
                <div class="text-muted text-center mb-3">
                    <small>Sign in with</small>
                </div>
                <div class="btn-wrapper text-center">
                    <a class="btn btn-custom btn-icon mr-3" href="javascript:void(0)">
                        <span class="btn-inner--icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style="width: 20px;">
                        </span>
                        <span class="btn-inner--text ml-2">Github</span>
                    </a>
                    <a class="btn btn-custom btn-icon" href="javascript:void(0)">
                        <span class="btn-inner--icon">
                            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" style="width: 20px;">
                        </span>
                        <span class="btn-inner--text ml-2">Google</span>
                    </a>
                </div>
            </div>
            <div class="card-body px-lg-5 py-lg-5">
                <div class="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                </div>
                <form @submit.prevent="onSubmit">
                    <div class="form-group mb-3">
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                            <input class="form-control border-0" placeholder="Username" type="text"
                                v-model="form.username">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="input-group input-group-alternative">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fa-solid fa-lock"></i>
                                </span>
                            </div>
                            <input class="form-control border-0" placeholder="Password" type="password"
                                v-model="form.password">
                        </div>
                    </div>
                    <p v-if="showError" style="color: red;">
                        Wrong username or password.
                    </p>
                    <div class="text-center">
                        <button class="btn custom-btn-primary my-4" type="submit">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { saveUserDetails } from "@/services/storage.service";

const LOGIN_USERNAME = "admin";
const LOGIN_PASSWORD = "admin";

export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: LOGIN_USERNAME,
                password: LOGIN_PASSWORD
            },
            showError: false
        }
    },
    methods: {
        login() {
            this.checkUsernameAndPassword();

            if (this.form.username == LOGIN_USERNAME && this.form.password == LOGIN_PASSWORD) {
                saveUserDetails(JSON.stringify(this.form));
                this.$router.push('/details');
            }
        },

        onSubmit() {
            this.login();
        },

        /* Check the entered value in the inputs */
        checkUsernameAndPassword() {
            if (this.form.username != LOGIN_USERNAME || this.form.password != LOGIN_PASSWORD) {
                this.showError = true;
                return;
            }
        }
    }
}
</script>

<style>
.login {
    background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
    height: 100%;
}

.card-form {
    height: 450px;
    margin-top: 5rem;
    background-color: #f4f5f7;
}

.input-group-alternative {
    box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
    border: 0;
    transition: box-shadow .15s ease;
}

.input-group-prepend {
    display: flex;
    margin-right: -1px;
}

.input-group-text {
    display: flex;
    align-items: center;
    padding: 0.625rem 0.75rem;
    color: #adb5bd;
    background-color: #fff;
    border: 0;
}
</style>
  