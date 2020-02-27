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
        <agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade="fade"
               pause-on-hover="pause-on-hover"
               pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay">
            <img class="slide" src="/images/slider/1.jpg"/>
            <img class="slide" src="/images/slider/2.jpg"/>
            <img class="slide" src="/images/slider/3.jpg"/>
            <img class="slide" src="/images/slider/4.jpg"/>
            <img class="slide" src="/images/slider/5.jpg"/>
            <img class="slide" src="/images/slider/6.jpg"/>
        </agile>
        <div>
            <div class="col-md-12" style="margin-top:50px">
                <div class="row-title">{{ $t("message.curr_conf") }}</div>
                <div class="row-subtitle"></div>
            </div>
            <Conferences></Conferences>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from './Navbar'
    import Footer from './Footer'
    import Conferences from './conference/Conferences'
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true
            }
        },
        components: {
            Navbar, Footer, agile: VueAgile, Conferences, Loading
        },
        mounted() {
            var screen = this;
            var interval = setInterval(function() {
                if(document.readyState === 'complete') {
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
