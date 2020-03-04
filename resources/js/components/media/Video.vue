<style>
</style>
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
        <Navbar></Navbar>
        <div id="section">
            <div class="container">
                <my-video :sources="video.sources" :options="video.options"></my-video>
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
    import myVideo from 'vue-video'

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true,
                video: {
                    sources: [{
                        src: '/videos/Arab_Organizers.mp4',
                        type: 'video/mp4'
                    }],
                    options: {
                        autoplay: true,
                        volume: 0.6,
                    }
                }
            }
        },
        components: {
            Navbar, Footer, Loading, myVideo
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
