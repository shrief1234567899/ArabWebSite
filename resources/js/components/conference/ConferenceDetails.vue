<style>
    #page-head {
        background-image: -webkit-linear-gradient(120deg, #373058, #c94328);
        background-image: -o-linear-gradient(120deg, #373058, #c94328);
        background-image: linear-gradient(120deg, #373058, #c94328);
    }

    .conf-img {
        border-radius: 10%;
        opacity: 0.9;
        width: 300px;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
    }

    .conf-img:hover {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        opacity: 1;
    }

    #more-info {
        background-color: white !important;
    }

    .info-details {
        width: 100%;
    }

    .links-holder {
        background-color: #f1f1f1;
        border-radius: 10%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .iframe {
        border-radius: 10px;
    }

</style>
<template>
    <div>
        <loading :active.sync="isLoading"
                 color="#c94328"
                 :can-cancel="true"
                 :height="100"
                 :width="200"
                 :opacity="0.6"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
        <Navbar></Navbar>
        <div v-if="conference">
            <div id="section">
                <div id="extra-info" style="text-align:left">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 text-center">
                                <a target="_blank" :href="conference.image">
                                    <div class="">
                                        <img class="conf-img" :src="conference.image" alt="">
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-8">
                                <div class="head-content">
                                    <h4 style="color:white">{{conference.name}}</h4>
                                    <p>
                                        {{conference.description}}
                                    </p>
                                </div>
                                <hr style="color: white">
                                <div class="row">
                                    <div class="col-md-12" style="padding-top:10px">
                                        <div class="address" style="color: white">
                                            <i class="fas fa-map-marker" style="color: white"></i>
                                            {{conference.address}}
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12" style="padding-top:10px">
                                        <div class="day" style="color: white">
                                            <i class="fas fa-calendar" style="color: white"></i>
                                            <span>{{ conference.start_date | moment("dddd, MMMM Do") }} - {{ conference.end_date | moment("dddd, MMMM Do") }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="more-info" class="container-fluid" style="padding-top: 20px">
                <div class="col-md-12">
                    <div class="row-title">{{conference.name}}</div>
                    <div class="row-subtitle"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="links-holder">
                                <ul>
                                    <li v-if="conference.program_link">
                                        <div class="info-link opened" data-id="1">Program</div>
                                    </li>
                                    <li v-if="conference.brochure_link">
                                        <div class="info-link" v-bind:class="{'opened' : !conference.program_link}"
                                             data-id="2">Brochure
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-link"
                                             v-bind:class="{'opened' : !conference.program_link && !conference.brochure_link}"
                                             data-id="3">Abstract
                                        </div>
                                    </li>
                                    <li>
                                        <div class="info-link" data-id="4" v-if="conference.open">Registration</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="info-details-holder">
                                <div class="info-details info-d1" v-if="conference.program_link"
                                     v-bind:class="{'show-details' : conference.program_link}">
                                    <object class="iframe"
                                            :data="conference.program_link"
                                            type="application/pdf"
                                            width="100%" height="600">
                                        <embed
                                            :src="conference.program_link"
                                            type="application/pdf"/>
                                    </object>
                                </div>
                                <div class="info-details info-d2" v-if="conference.brochure_link"
                                     v-bind:class="{'show-details' : !conference.program_link && conference.brochure_link}">
                                    <object class="iframe"
                                            :data="conference.brochure_link"
                                            type="application/pdf"
                                            width="100%" height="600">
                                        <embed :src="conference.brochure_link" type="application/pdf"/>
                                    </object>
                                </div>
                                <div class="info-details info-d3"
                                     v-bind:class="{'show-details' : !conference.program_link && !conference.brochure_link}">
                                    <AbstractForm></AbstractForm>
                                </div>
                                <div class="info-details info-d4" v-if="conference.open">
                                    <RegisterForm></RegisterForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer v-if="!isLoading"></Footer>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from '../Navbar'
    import Footer from '../Footer'
    import AbstractForm from './AbstractForm'
    import RegisterForm from './RegisterForm'

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true,
                conference: null
            }
        },
        components: {
            Navbar, Footer, AbstractForm, RegisterForm, Loading
        },
        mounted() {
            this.getConferencesDetails();
            $(window).click('.info-link', function (e) {
                if ($(event.target).hasClass('info-link')) {
                    $('.info-link').removeClass("opened");
                    $(event.target).addClass("opened");
                    var toggleSectionId = $(event.target).data('id');
                    $('.info-details').removeClass('show-details');
                    $('.info-d' + toggleSectionId).addClass('show-details');
                    $('.info-details').hide();
                    $('.info-d' + toggleSectionId).show();
                }
            });
        },
        methods: {
            onCancel() {
            },
            getConferencesDetails: function () {
                let screen = this;
                axios
                    .get('https://araborganizers-system.com/api/get-single-conference?id=' + this.$route.params.id)
                    .then(response => {
                        if (typeof response.data.data != "undefined") {
                            response.data.data.image = 'https://araborganizers-system.com' + response.data.data.image;
                            if (response.data.data.brochure_link)
                                response.data.data.brochure_link = 'https://araborganizers-system.com' + response.data.data.brochure_link;
                            this.conference = response.data.data;
                            Vue.nextTick(function () {
                                $('.info-details').hide();
                                $('.show-details').show();
                            })
                        }
                        screen.isLoading = false;
                    })
                    .catch(error => {
                        screen.isLoading = false;
                    })
            },
        }

    }
</script>
