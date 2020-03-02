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
        <Navbar/>
        <div id="section">
            <div id="extra-info" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="text-holder">
                                <h1>{{ $t("message.services") }}</h1>
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
        }
    }
</script>
