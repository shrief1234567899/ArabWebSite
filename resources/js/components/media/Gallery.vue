<style>
    .agile__nav-button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 30px;
        font-weight: bold;
        height: 100%;
        position: absolute;
        top: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        width: 80px;
    }

    .agile__nav-button:hover {
        background-color: rgba(201, 67, 40, 0.5);
        opacity: 1;
    }

    .agile__nav-button--prev {
        left: 0;
    }

    .agile__nav-button--next {
        right: 0;
    }

    .agile__dots {
        justify-content: center;
        bottom: 10px;
        left: 50%;
        position: absolute;
        flex-direction: row !important;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .agile__dot {
        margin: 0 10px;
    }

    .agile__dot button {
        background-color: transparent;
        border: 1px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        display: block;
        height: 10px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        width: 10px;
    }

    .agile__dot--current button, .agile__dot:hover button {
        background-color: #fff;
    }

    .slide {
        display: block;
        height: 500px;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
    }

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
            <agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade="fade"
                   :options="options"
                   pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay"
                   v-lazy-container="{selector: 'img'}">
                <img class="slide" data-src="/images/gallery/2.png"/>
                <img class="slide" data-src="/images/gallery/1.png"/>
                <img class="slide" data-src="/images/gallery/13.png"/>
                <img class="slide" data-src="/images/gallery/12.png"/>
                <img class="slide" data-src="/images/gallery/11.png"/>
                <img class="slide" data-src="/images/gallery/10.png"/>
                <img class="slide" data-src="/images/gallery/9.png"/>
                <img class="slide" data-src="/images/gallery/8.png"/>
                <img class="slide" data-src="/images/gallery/7.png"/>
                <img class="slide" data-src="/images/gallery/6.png"/>
                <img class="slide" data-src="/images/gallery/5.png"/>
                <img class="slide" data-src="/images/gallery/4.png"/>
                <img class="slide" data-src="/images/gallery/3.png"/>
                <img class="slide" data-src="/images/gallery/2.png"/>
                <img class="slide" data-src="/images/gallery/15.png"/>
            </agile>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from '../Navbar'
    import Footer from '../Footer'
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'App',
        data() {
            return {
                isLoading: false,
                fullPage: true,
                options: {
                    dots: true,
                    fade: true,
                    navButtons: false
                },
            }
        },
        components: {
            Navbar, Footer, Loading, agile: VueAgile
        },
        mounted() {
        },
        methods: {
            onCancel() {
            }
        }
    }
</script>
