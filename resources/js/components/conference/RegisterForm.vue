<style>
    input {
        color: #373058 !important;
    }

    .ybtn {
        color: white;
        background-color: #c94328;
    }

    #submit {
        width: 100%;
    }

    .submit-spinner{
        font-size: 30px;
        color: #c94328;
    }
</style>
<template>
    <div id="form-section" class="container-fluid signup">
        <div class="form-holder">
            <div class="signin-signup-form">
                <Errors :errors="errors"></Errors>
                <div class="form-items">
                    <form id="signupform" @submit="checkForm" method="post">
                        <div class="form-text">
                            <input type="text" v-model.trim="name" name="name" placeholder="Name">
                        </div>
                        <div class="form-text">
                            <input type="email" v-model.trim="email" name="email" placeholder="E-mail Address">
                        </div>
                        <div class="form-text">
                            <input type="text" v-model.trim="mobile" name="mobile" placeholder="Phone">
                        </div>
                        <div class="form-text">
                            <input type="text" v-model.trim="department" name="department" placeholder="Department">
                        </div>
                        <div class="form-button">
                            <i v-if="isLoading" class="fas fa-spinner fa-spin submit-spinner"></i>
                            <button id="submit" type="submit" class="ybtn" v-if="!isLoading">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Errors from '../validation/Errors'

    export default {
        name: 'RegisterForm',
        components: {Errors},
        data() {
            return {
                isLoading: false,
                errors: [],
                name: null,
                email: null,
                mobile: null,
                department: null,
            }
        },
        props: {
            url: String
        },
        mounted() {
        },
        methods: {
            checkForm: function (e) {
                if (this.name && this.email && this.mobile && this.department) {
                    this.submitForm();
                    this.errors = [];
                    e.preventDefault();
                }
                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.');
                }
                if (!this.email) {
                    this.errors.push('Email required.');
                }
                if (!this.mobile) {
                    this.errors.push('Mobile required.');
                }
                if (!this.department) {
                    this.errors.push('Department required.');
                }

                e.preventDefault();
            },
            submitForm: function () {
                let screen = this;
                screen.isLoading=true;
                axios
                    .post(screen.url)
                    .then(response => {
                        screen.isLoading = false;
                    })
                    .catch(error => {
                        screen.isLoading = false;
                    })
            },
        }
    }
</script>
