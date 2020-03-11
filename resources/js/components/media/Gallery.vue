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
            <div id="page-head" class="container-fluid inner-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="page-title">{{ $t("message.gallery") }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    v-lazy:background-image="image"
                    :style="{width: '300px', height: '200px' }">
                </div>
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
    import VueGallery from 'vue-gallery';

    export default {
        name: 'App',
        data() {
            return {
                isLoading: true,
                fullPage: true,
                images: [
                    '/images/gallery/1.png',
                    '/images/gallery/2.png',
                    '/images/gallery/3.png',
                    '/images/gallery/4.png',
                    '/images/gallery/5.png',
                    '/images/gallery/6.png',
                    '/images/gallery/7.png',
                    '/images/gallery/8.png',
                    '/images/gallery/9.png',
                    '/images/gallery/10.png',
                    '/images/gallery/11.png',
                    '/images/gallery/12.png',
                    '/images/gallery/13.png',
                    '/images/gallery/14.png',
                    '/images/gallery/15.png',
                ],
                index: null
            }
        },
        components: {
            Navbar, Footer, Loading, 'gallery': VueGallery
        },
        mounted() {
            var screen = this;
            setTimeout(function () {
                screen.isLoading = false;
            }, 500);
        },
        methods: {
            onCancel() {
            }
        }
    }
</script>
