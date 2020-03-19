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
</style>
<template>
    <div id="form-section" class="container-fluid signup">
        <div class="form-holder">
            <div class="signin-signup-form">
                <Errors :errors="errors"></Errors>
                <div class="form-items">
                    <form id="signupform" @submit="checkForm" method="post" ref="form">
                        <div class="form-text">
                            <input type="text" name="abstract_title" placeholder="Abstract Title" required>
                        </div>
                        <div class="form-text">
                            <input type="email" name="email" placeholder="E-mail Address" required>
                        </div>
                        <div class="form-text">
                            <input type="text" name="username" placeholder="User Name" required>
                        </div>
                        <v-select :options="specialityOptions" style="padding-top: 2px;border-radius:10px;padding-bottom:10px"
                                  placeholder="Select Speciality" v-model="speciality"></v-select>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="phone" placeholder="Phone" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="phone" placeholder="Phone" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="place_of_work" placeholder="Place Of Work" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="address" placeholder="Address" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="country" placeholder="Country" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="city" placeholder="City" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 form-text">
                                <input type="text" name="presenting_author" placeholder="Presenting Author" required>
                            </div>
                            <div class="col-md-6 form-text">
                                <input type="text" name="presenting_affiliation" placeholder="Presenter Affiliation"
                                       required>
                            </div>
                        </div>
                        <div style="padding-top: 15px;padding-left: 30%;width:100%" class="recaptcha">
                            <vue-recaptcha sitekey="6LeNrtoUAAAAAGxUhsYh1SzNeoYB24vMQ0Dj1vlR"
                                           size="1000"></vue-recaptcha>
                        </div>
                        <div class="form-button">
                            <button id="submit" type="submit" class="ybtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Errors from '../validation/Errors'
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: 'AbstractForm',
        components: {Errors, vSelect, VueRecaptcha},
        data() {
            return {
                isLoading: false,
                errors: [],
                name: null,
                email: null,
                mobile: null,
                department: null,
                speciality: null,
            }
        },
        props: {
            url: String,
            specialityOptions: Array,
            conferenceId: String
        },
        mounted() {
        },
        methods: {
            checkForm: function (e) {
                if (this.name && this.email && this.mobile && this.department && this.speciality) {
                    this.errors = [];
                    this.submitForm();
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
                if (!this.speciality) {
                    this.errors.push('Please select speciality.');
                }

                e.preventDefault();
            },
            submitForm: function () {
                let screen = this;
                screen.isLoading = true;
                const formData = new FormData(this.$refs['form']);
                const data = {};
                for (let [key, val] of formData.entries()) {
                    Object.assign(data, {[key]: val})
                }
                Object.assign(data, {['speciality']: screen.speciality.value});
                Object.assign(data, {['conference_id']: screen.conferenceId});
                axios
                    .post(screen.url, data)
                    .then(response => {
                        if (response.data.code >= 400) {
                            this.errors.push(response.data.message ?? null);
                        } else {
                            //SUCCESS
                        }
                    })
                    .catch(error => {
                        this.errors.push(error.response.data.message);
                    })
                    .finally(() => this.isLoading = false)
            },
        }
    }
</script>
