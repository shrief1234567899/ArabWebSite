<style>
    #ifeatures .feature-box {
        margin-bottom: 0px !important;
        padding: 10px 10px !important;
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
        <div id="ifeatures" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="row-title">What makes us special?</div>
                        <div class="row-subtitle"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/usher.png" alt="">
                            </div>
                            <div class="feature-title">Ushering Team</div>
                            <div class="feature-details">Professional Ushering Team has experience to deal with attendees</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/nametag.png" alt="">
                            </div>
                            <div class="feature-title">Name tags</div>
                            <div class="feature-details">Printing name tags with professional tools.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/certificate.png" alt="">
                            </div>
                            <div class="feature-title">Certificates</div>
                            <div class="feature-details">Printing name tags with professional tools.</div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/onlineRegistration.png" alt="">
                            </div>
                            <div class="feature-title">Online Registration</div>
                            <div class="feature-details">We provide online registration wit emails and sms notifications</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/kiosk.png" alt="">
                            </div>
                            <div class="feature-title">Kiosk Registration</div>
                            <div class="feature-details">
                                Integrated device provides
                                simple ui interface to facilitate attendee interaction.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/tracking.png" alt="">
                            </div>
                            <div class="feature-title">Attendee Tracking</div>
                            <div class="feature-details">
                                Using attendee <code>QR-code</code> you can know all presented services
                                for this attendee.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/cme.png" height="104" alt="">
                            </div>
                            <div class="feature-title">CME Calculation</div>
                            <div class="feature-details">
                                Provides <code>CME</code> calculation for subscribed CME attendees.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/cme-logs.png" alt="">
                            </div>
                            <div class="feature-title">CME Logs</div>
                            <div class="feature-details">
                                Logging for <code>CME</code> hours for each attendee.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/payment.png" alt="">
                            </div>
                            <div class="feature-title">Online Payment</div>
                            <div class="feature-details">
                                We provides easy secured payment gateway for paid conferences.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/statistics.png" alt="">
                            </div>
                            <div class="feature-title">Statistics</div>
                            <div class="feature-details">
                               Our system provides full statistics about specialities of attendees,
                                online and onsite registration, Halls, speakers and sessions.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/marketing.png" height="104" alt="">
                            </div>
                            <div class="feature-title">CME Calculation</div>
                            <div class="feature-details">
                                Provides <code>CME</code> calculation for subscribed CME attendees.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="feature-box">
                            <div class="feature-icon">
                                <img src="images/services/cme-logs.png" alt="">
                            </div>
                            <div class="feature-title">CME Logs</div>
                            <div class="feature-details">
                                Logging for <code>CME</code> hours for each attendee.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
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
