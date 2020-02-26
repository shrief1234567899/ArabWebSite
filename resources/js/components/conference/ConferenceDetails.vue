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
    }
</style>
<template>
    <div>
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
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &  Infecious Diseases
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &  Infecious Diseases
                                    Annual Scientific Conference of The Department Of Gastroenterology Hepatology &  Infecious Diseases
                                </p>
                            </div>
                            <hr style="color: white">
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="address" style="color: white">
                                        <i class="fas fa-map-marker" style="color: white"></i> Fasel, Giza addressd ad as das das
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="phone" style="color: white">
                                        <i class="fas fa-phone" style="color: white"></i> 02333123123131
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="more-info" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
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
                    <div class="col-md-8">
                        <div class="info-details-holder">
                            <div class="info-details info-d1 show-details">
                                <iframe
                                    id="program-frame"
                                    class="mt-3"
                                    src="https://docs.google.com/gview?url=https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf&embedded=true"
                                    width="100%" height="600"
                                    frameborder="0"
                                    allowtransparency="true">
                                </iframe>
                            </div>
                            <div class="info-details info-d2">
                                <iframe
                                    id="brochure-frame"
                                    class="mt-3"
                                    src="https://docs.google.com/gview?url=https://araborganizers.org/UserFiles/ConferencesBrochures/_Brochure_78cb31d4-6682-4f8d-9af0-abd2729fe0ac.pdf&embedded=true"
                                    width="100%" height="600"
                                    frameborder="0"
                                    allowtransparency="true">
                                </iframe>
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
    import Navbar from '../Navbar'
    import Footer from '../Footer'
    import AbstractForm from './AbstractForm'
    import RegisterForm from './RegisterForm'

    export default {
        name: 'App',
        components: {
            Navbar, Footer, AbstractForm, RegisterForm
        },
        mounted() {
            var infoLink = $(".info-link", "#more-info");

            infoLink.on("mouseover", function () {
                infoLink.removeClass("opened");
                $(this).addClass("opened");
                var toggleSectionId = $(this).data('id');
                $('.info-details').hide();
                $('.info-d' + toggleSectionId).show();
            });

            function checkIframeLoaded(framId) {
                var iframe = document.getElementById(framId);
                if (iframe) {
                    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

                    if (iframeDoc.readyState == 'complete') {
                        frameError(framId);
                    }
                }
            }

            function frameError(framId) {
                console.log(framId);
                var iframe = document.getElementById(framId);
                iframe.src = iframe.src;
                window.setTimeout(checkIframeLoaded.bind(null, framId), 500);
            }

            checkIframeLoaded('program-frame');
            checkIframeLoaded('brochure-frame');
        }
    }
</script>
