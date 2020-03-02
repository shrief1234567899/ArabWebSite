<template>
    <div>
        <loading :active.sync="isLoading"
                 color="#c94328"
                 :can-cancel="true"
                 :height="100"
                 :width="200"
                 :opacity="0.6"
                 :is-full-page="fullPage"></loading>
        <Navbar/>
        <div id="section">
            <div id="extra-info" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-holder">
                                <h1>{{ $t("message.services") }}</h1>
                                <h3 class="sub-title">
                                    Our company uses the latest technologies in conference management field,
                                    Providing the best level of regulation.
                                </h3>
                            </div>
                        </div>
                        <div class="col-md-6 link-holder">
                            <div class="tld-graphic">
                                <div style="opacity:0"><i class="fas fa-question-circle" style="font-size: 30px"></i>
                                </div>
                                <div><i class="fas fa-cogs" style="font-size: 30px"></i></div>
                                <div style="opacity:0"><i class="fas fa-question-circle" style="font-size: 30px"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="team" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row-title">Our Services</div>
                        <div class="row-subtitle"></div>
                    </div>
                </div>
                <div class="row team-holder">
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/usher.png" alt=""></div>
                            </div>
                            <div class="person-name">Chris Walker</div>
                            <div class="person-title">CEO &amp; CO-Founder</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team2.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Jane Donald</div>
                            <div class="person-title">Client service</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team3.jpg" alt=""></div>
                            </div>
                            <div class="person-name">David Adams</div>
                            <div class="person-title">Server Admin</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team4.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Rose Masso</div>
                            <div class="person-title">Quality Assurance</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team5.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Travis Walker</div>
                            <div class="person-title">CO-Founder</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team6.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Bella Vayner</div>
                            <div class="person-title">Client service</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team7.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Mary Wilson</div>
                            <div class="person-title">Client service</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="person-box">
                            <div class="person-icon">
                                <div class="person-img"><img src="images/team8.jpg" alt=""></div>
                            </div>
                            <div class="person-name">Craig Davids</div>
                            <div class="person-title">Web Master</div>
                            <div class="person-social">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from './Navbar'
    import Footer from './Footer'

    export default {
        name: 'Services',
        components: {
            Loading, Navbar, Footer
        },
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        mounted() {
            let that = this;
            setTimeout(function () {
                that.isLoading = false;
            }, 500);
        },
    }
</script>
