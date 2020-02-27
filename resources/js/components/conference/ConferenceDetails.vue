<style>
    #page-head {
        background-image: -webkit-linear-gradient(120deg, #373058, #c94328);
        background-image: -o-linear-gradient(120deg, #373058, #c94328);
        background-image: linear-gradient(120deg, #373058, #c94328);
    }

    .conf-img {
        border-radius: 10%;
        opacity: 0.9;
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

    .iframe{
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
        <div id="header-holder" class="inner-header serverspage-header">
            <div id="page-head" class="container-fluid inner-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center">
                            <a target="_blank"
                               href="https://araborganizers.org/UserFiles/ConferencesLogos/973c9d1d-5cee-4c77-aa3e-8021f1a961ab.jpg">
                                <div class="servers-icon">
                                    <img class="conf-img"
                                         src="https://araborganizers.org/UserFiles/ConferencesLogos/973c9d1d-5cee-4c77-aa3e-8021f1a961ab.jpg"
                                         alt="">
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6">
                            <div class="head-content">
                                <h4>Clinical Oncology</h4>
                                <p>
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &
                                    Infecious Diseases
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &
                                    Infecious Diseases
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &
                                    Infecious Diseases
                                </p>
                            </div>
                            <hr style="color: white">
                            <div class="row">
                                <div class="col-md-12" style="padding-top:10px">
                                    <div class="address" style="color: white">
                                        <i class="fas fa-map-marker" style="color: white"></i> Fasel, Giza addressd ad
                                        as das das
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style="padding-top:10px">
                                    <div class="phone" style="color: white">
                                        <i class="fas fa-phone" style="color: white"></i> 02333123123131
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12" style="padding-top:10px">
                                    <div class="day" style="color: white">
                                        <i class="fas fa-calendar" style="color: white"></i> 22- 28 Feb
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="more-info" class="container-fluid">
            <div class="col-md-12">
                <div class="row-title">CLINICAL ONCOLOGY</div>
                <div class="row-subtitle"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="links-holder">
                            <ul>
                                <li>
                                    <div class="info-link opened" data-id="1">Program</div>
                                </li>
                                <li>
                                    <div class="info-link" data-id="2">Brochure</div>
                                </li>
                                <li>
                                    <div class="info-link" data-id="3">Abstract</div>
                                </li>
                                <li>
                                    <div class="info-link" data-id="4">Registration</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="info-details-holder">
                            <div class="info-details info-d1 show-details">
                                <object class="iframe" data="https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf"
                                        type="application/pdf"
                                        width="100%" height="600">
                                    <embed src="https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf"
                                           type="application/pdf"/>
                                </object>
                            </div>
                            <div class="info-details info-d2">
                                <object class="iframe" data="https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf"
                                        type="application/pdf"
                                        width="100%" height="600">
                                    <embed src="https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf"
                                           type="application/pdf"/>
                                </object>
                            </div>
                            <div class="info-details info-d3">
                                <AbstractForm></AbstractForm>
                            </div>
                            <div class="info-details info-d4">
                                <RegisterForm></RegisterForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
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
                fullPage: true
            }
        },
        components: {
            Navbar, Footer, AbstractForm, RegisterForm, Loading
        },
        mounted() {
            var infoLink = $(".info-link", "#more-info");
            var screen = this;
            var interval = setInterval(function () {
                if (document.readyState === 'complete') {
                    clearInterval(interval);
                    setTimeout(function () {
                        screen.isLoading = false;
                    }, 500);
                }
            }, 100);

            infoLink.on("click", function () {
                infoLink.removeClass("opened");
                $(this).addClass("opened");
                var toggleSectionId = $(this).data('id');
                $('.info-details').removeClass('show-details');
                $('.info-d' + toggleSectionId).addClass('show-details');
                $('.info-details').fadeOut();
                $('.info-d' + toggleSectionId).fadeIn();
            });
        },
        methods: {
            onCancel() {
            }
        }

    }
</script>
