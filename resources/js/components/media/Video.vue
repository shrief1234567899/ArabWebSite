<style>
    .image {
        display: -webkit-inline-box;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 10px;
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
        <div id="section" style="text-align: center">
            <gallery
                :images="images"
                :index="index"
                :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
                @close="index = null"
            ></gallery>
            <div
                class="image"
                v-for="image, imageIndex in images"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image.poster + ')', width: '400px', height: '400px' }"
            ></div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import Navbar from '../Navbar'
    import Footer from '../Footer'
    import VueGallery from 'vue-gallery';

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true,
                images: [
                    {
                        title: 'Arab Organizers',
                        href: '/videos/Arab_Organizers.mp4',
                        type: 'video/mp4',
                        poster: 'https://i.ytimg.com/vi/sHaPPY1lZC4/maxresdefault.jpg'
                    },
                    {
                        title: 'BGICC 2019',
                        href: '/videos/BGICC.mp4',
                        type: 'video/mp4',
                        poster: 'https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/31/a3/24/31a32419-e12d-d096-971f-86cb64534b66/source/512x512bb.jpg'
                    },
                    {
                        title: 'NHTMRI 2019',
                        href: '/videos/NHTMRI.mp4',
                        type: 'video/mp4',
                        poster: 'data:image/jpeg;base64,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'
                    }
                ],
                index: null
            }
        },
        components: {
            Navbar, Footer, Loading, 'gallery': VueGallery
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
