<style>
</style>
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
            <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
                <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img
                    :src="slide"/></div>
            </agile>
            <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
                <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index"
                     :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
                <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
                <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
            </agile>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import '../../../../public/css/gallerySlider.css';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from '../Navbar'
    import Footer from '../Footer'
    import {VueAgile} from 'vue-agile'

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true,
                asNavFor1: [],
                asNavFor2: [],
                options1: {
                    dots: false,
                    fade: true,
                    navButtons: false
                },

                options2: {
                    autoplay: true,
                    centerMode: true,
                    dots: false,
                    navButtons: false,
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 5
                            }
                        },

                        {
                            breakpoint: 1000,
                            settings: {
                                navButtons: true
                            }
                        }
                    ]

                },
                slides: this.importAll(require.context('../../../../public/images/gallery/', true, /\.png$/))
            }
        },
        components: {
            Navbar, Footer, Loading, agile: VueAgile
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
            this.asNavFor1.push(this.$refs.thumbnails);
            this.asNavFor2.push(this.$refs.main);
        },
        methods: {
            importAll(r) {
                var slidesData = [];
                r.keys().forEach(key => (slidesData.push(r(key))));
                return slidesData.sort();
            },
            onCancel() {
            }
        }
    }
</script>
