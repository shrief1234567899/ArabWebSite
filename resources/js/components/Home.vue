<template>
    <div>
        <Navbar></Navbar>
        <div id="section">
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
                <Conferences type="get-recent-conferences"></Conferences>
            </div>
            <Heroes></Heroes>
            <TopServices></TopServices>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import '../../../public/css/slider.css';
    import Navbar from './Navbar'
    import Footer from './Footer'
    import Heroes from './Heroes'
    import TopServices from './TopServices'
    import OurApplication from './OurApplication'
    import Conferences from './conference/Conferences'
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'Home',
        data() {
            return {}
        },
        components: {
            TopServices,
            Navbar, Footer, agile: VueAgile, Conferences, Heroes
        },
        mounted() {
        },
        methods: {}
    }
</script>
