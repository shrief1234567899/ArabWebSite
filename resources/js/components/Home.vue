<template>
    <div>
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
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from './Navbar'
    import Footer from './Footer'
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'App',
        components: {
            Navbar, Footer, agile: VueAgile
        },
        mounted() {
        }
    }
</script>
