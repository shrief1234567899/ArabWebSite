<template>
    <div>
        <loading :active.sync="isLoading"
                 color="#c94328"
                 :can-cancel="false"
                 :height="100"
                 :width="200"
                 :opacity="0.6"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
        <Navbar/>
        <div id="section">
            <div id="extra-info" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-holder">
                                <h1>{{ $t("message.about") }}</h1>
                                <h3 class="sub-title">
                                    A brand for a company is like a reputation for a person. You earn reputation
                                    by trying to do hard things well.
                                </h3>
                            </div>
                        </div>
                        <div class="col-md-6 link-holder">
                            <div class="tld-graphic">
                                <div style="opacity:0"><i class="fas fa-question-circle" style="font-size: 30px"></i></div>
                                <div><i class="fas fa-question" style="font-size: 30px"></i></div>
                                <div style="opacity:0"><i class="fas fa-question-circle" style="font-size: 30px"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="features" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row-title">About us</div>
                        <div class="row-subtitle"></div>
                    </div>
                </div>
                <div class="row rtl-cols">
                    <div class="col-sm-12 col-md-6">
                        <div id="features-links-holder">
                            <div class="icons-axis">
                                <img src="images/features-icon.png" alt="">
                            </div>
                            <div class="feature-icon-holder feature-icon-holder1 opened" data-id="1">
                                <div class="animation-holder">
                                    <div class="special-gradiant"></div>
                                </div>
                                <div class="feature-icon"><img alt class="featured-img" src="images/history.svg"
                                                               width="38" height="38"/></div>
                                <div class="feature-title">Our History</div>
                            </div>
                            <div class="feature-icon-holder feature-icon-holder2" data-id="2">
                                <div class="animation-holder">
                                    <div class="special-gradiant"></div>
                                </div>
                                <div class="feature-icon"><img alt class="featured-img" src="images/mission.svg"
                                                               width="38" height="38"/>
                                </div>
                                <div class="feature-title">Mission</div>
                            </div>
                            <div class="feature-icon-holder feature-icon-holder3" data-id="3">
                                <div class="animation-holder">
                                    <div class="special-gradiant"></div>
                                </div>
                                <div class="feature-icon"><img class="featured-img" alt src="images/vision.svg"
                                                               width="38" height="38"/>
                                </div>
                                <div class="feature-title">Vision</div>
                            </div>
                            <div class="feature-icon-holder feature-icon-holder4" data-id="4">
                                <div class="animation-holder">
                                    <div class="special-gradiant"></div>
                                </div>
                                <div class="feature-icon"><img class="featured-img" alt src="images/core_values.svg"
                                                               width="38"
                                                               height="38"/></div>
                                <div class="feature-title">Core values</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div id="features-holder">
                            <div class="feature-box feature-d1 show-details" style="height: 370px;overflow: auto">
                                <div class="feature-title-holder">
                                        <span class="feature-icon"><img alt src="images/r_history.svg"
                                                                        width="34" height="34"/></span>
                                    <span class="feature-title highlighted-title">Our History</span>
                                </div>
                                <div class="feature-details">
                                    <h4>
                                        Arab Organizers for Conference Management is a pioneer in Professional
                                        Congress Organization and Association Management.
                                    </h4>
                                    <p>
                                        The company is committed to providing the highest standard of service to
                                        medical and scientific associations, aiding in the facilitation of global
                                        exchange and management of medical knowledge.
                                    </p>
                                    <h4>
                                        We are a global company with a local presence providing our services to
                                        scientific Organizations and Medical Societies all over Egypt.
                                    </h4>
                                    <p>We depend on our accountability and trust to provide the highest standards of
                                        service to our clients. We have a self-motivated, professional, trustable
                                        Staff devoted to the standards of integrity and common values of our
                                        mission.</p>
                                    <h4>Our employees are proud and confident to be key
                                        players in achieving our clients' needs and goals.</h4>
                                    <p>We have the flexibility to tailor our services to meet our clients' needs as
                                        well as the market needs.</p>
                                    <h4>Honesty is the only mean to earn trust; this is
                                        why we are confident that our continued success, self-growing and
                                        professionalism will be the reasons to take our organization to higher and
                                        higher levels.</h4>
                                </div>
                            </div>
                            <div class="feature-box feature-d2">
                                <div class="feature-title-holder">
                                        <span class="feature-icon"><img alt src="images/r_mission.svg"
                                                                        width="34" height="34"/></span>
                                    <span class="feature-title highlighted-title">Mission</span>
                                </div>
                                <div class="feature-details">
                                    <h4>Deliver top-notch events, Inspire the region with our talents and
                                        Createvalue that makes a difference!</h4>
                                </div>
                            </div>
                            <div class="feature-box feature-d3">
                                <div class="feature-title-holder">
                                        <span class="feature-icon"><img alt src="images/r_vision.svg"
                                                                        width="34" height="34"/></span>
                                    <span class="feature-title highlighted-title">Vision</span>
                                </div>
                                <div class="feature-details">
                                    <h4>To Grow One of the Biggest Event Management Company Operating in Diverse
                                        Sectors In MENA Region.</h4>
                                </div>
                            </div>
                            <div class="feature-box feature-d4">
                                <div class="feature-title-holder">
                                        <span class="feature-icon"><img alt src="images/r_core_values.svg"
                                                                        width="34" height="34"/></span>
                                    <span class="feature-title highlighted-title">Core Values</span>
                                </div>
                                <div class="feature-details">
                                    <h4>Ownership – Personal accountability comes first.</h4>
                                    <h4>Integrity – To do it just right!</h4>
                                    <h4>Transparency – NO blinds allowed.</h4>
                                    <h4>Passion – Let your passion guide you!</h4>
                                    <h4>Diversity – None of us is as smart as all of us.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<style>

    h4 {
        line-height: 30px
    }

    #header-holder.inner-header:before {
        background: none !important;
    }

    div::-webkit-scrollbar {
        width: 5px;
    }

    div::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }

    div::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    }

    .feature-title-holder {
        margin-bottom: 30px !important;
    }

    .highlighted-title {
        color: #C94328 !important;
    }

    .featured-img {
        vertical-align: text-top;
    }
</style>
<script>
    import Navbar from './Navbar';
    import Footer from './Footer'
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'about',
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        components: {
            Navbar, Footer, Loading
        },
        mounted() {
            var screen = this;
            var interval = setInterval(function () {
                if (document.readyState === 'complete') {
                    clearInterval(interval);
                    setTimeout(function () {
                        screen.isLoading = false;
                    }, 500);
                }
            }, 100);
            // Features Section click function
            var featureIconHolder = $(".feature-icon-holder", "#features-links-holder");
            featureIconHolder.on("click", function () {
                featureIconHolder.removeClass("opened");
                $(this).addClass("opened");
                $(".show-details", "#features-holder").removeClass("show-details");
                $(".feature-d" + $(this).data("id"), "#features-holder").addClass("show-details");
            });
            // Fix #features-holder height in features section
            var featuresHolder = $("#features-holder");
            var featuresLinksHolder = $("#features-links-holder");
            var featureBox = $(".show-details", "#features-holder");
            featuresHolder.css("height", featureBox.height() + 120);
            featuresLinksHolder.css("height", 316 + 120);
            // Fix #features-holder height in features section
            $(window).on("resize", function () {
                featuresHolder.css("height", featureBox.height() + 120);
                featuresLinksHolder.css("height", 316 + 120);
                return false;
            });
        },
        methods: {
            onCancel() {
            }
        }
    }
</script>
