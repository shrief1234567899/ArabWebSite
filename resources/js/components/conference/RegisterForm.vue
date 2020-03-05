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

    .submit-spinner {
        font-size: 30px;
        color: #c94328;
    }

    .vs__dropdown-toggle {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 13px 20px;
        border-radius: 10px;
    }

    p, span {
        color: black;
    }

    .clean-body {
        margin-top: 50px !important;
        background-color: white !important;
    }

    .nl-container {
        background-color: white !important;
    }

    .close_modal_btn {
        width: 96%;
        color: white;
        font-weight: bold;
        background-color: #c94328;
        height: 52px;
        margin: 10px;
        border-radius: 10px;
    }

    .modal-header{
        background-color: #2a2545;
        color: white;
        text-align:center;
        font-weight:bold;
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
                        <v-select :options="specialityOptions" style="padding-top: 10px;border-radius:10px"
                                  placeholder="Select Speciality" v-model="speciality"></v-select>
                        <div style="padding-top: 15px;padding-left: 30%;width:100%" class="recaptcha">
                            <vue-recaptcha sitekey="6LeNrtoUAAAAAGxUhsYh1SzNeoYB24vMQ0Dj1vlR"
                                           size="1000"></vue-recaptcha>
                        </div>
                        <div class="form-button">
                            <i v-if="isLoading" class="fas fa-spinner fa-spin submit-spinner"></i>
                            <button id="submit" type="submit" class="ybtn" v-if="!isLoading">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <modals-container @click.stop/>
    </div>
</template>

<script>
    import Errors from '../validation/Errors'
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    import VueRecaptcha from 'vue-recaptcha';

    export default {
        name: 'RegisterForm',
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
                            Vue.nextTick(function () {
                                screen.displayModal('<div><div class="modal-header">Please Check your email!</div>'
                                    + response.data.data +
                                    `<button class="close_modal_btn" @click="$emit('close')">Close</button>` + '</div>');
                            });
                        }
                    })
                    .catch(error => {
                        this.errors.push(error.response.data.message);
                    })
                    .finally(() => this.isLoading = false)
            },
            displayModal: function (component) {
                this.$modal.show({
                        template: component,
                    },
                    {}, {
                        height: '70%', scrollable: true, styles: 'overflow-y: scroll;min-width:200px'
                    }, {
                        'before-close': (event) => {
                        }
                    })
            }
        }
    }
</script>
