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
        <div id="section">
            <div id="extra-info" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-holder">
                                <h1>{{ $t("message.contact_us") }}</h1>
                                <p>We aim to reach you anytime & everywhere.. Your satisfaction is our mission.
                                    For any inquiries or complaints please contact us</p>
                            </div>
                        </div>
                        <div class="col-md-6 link-holder">
                            <div class="tld-graphic">
                                <div><i class="fas fa-phone"></i></div>
                                <div><i class="fas fa-envelope"></i></div>
                                <div><i class="fas fa-map-marker"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div id="contact-info" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row-title">{{ $t("message.our_info") }}</div>
                            <div class="row-subtitle"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info-box">
                                <div class="info-title phone-icon">Mobile</div>
                                <div class="info-details">
                                    <p>Customer service 24/7 Call Free On
                                        <br>
                                        <span style="color: #c94328">002-02-​2603653</span><br>
                                        <span style="color: #c94328">002-01002223158</span><br>
                                        <span style="color: #c94328">002-01068663434</span><br>
                                        <span style="color: #c94328">002-01068666085</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-box">
                                <div class="info-title chat-icon">Chat now</div>
                                <div class="info-details">
                                    <p>We're ready to answer any and all questions. <br><br>
                                        <span style="color: #c94328">araborganizers@hotmail.com</span><br>
                                        <span style="color: #c94328">ibrahimfarouk@araborganizers.org</span><br>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info-box">
                                <div class="info-title location-icon">Visit us</div>
                                <div class="info-details">
                                    <p>We are located in 14 Mohamed Mandour Street, Rabaa El
                                        Adwaia, Nasr City, Cairo Egypt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <iframe src="https://mapsengine.google.com/map/u/0/embed?mid=zqYkhyEfiH7Q.kJtqi4Bjr2Y0&amp;z=18" width="100%" height="320" style="margin-top:20px"></iframe>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from './Navbar'
    import Footer from './Footer'

    export default {
        name: 'App',
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
        },
        methods: {
            onCancel() {
            }
        }
    }
</script>
