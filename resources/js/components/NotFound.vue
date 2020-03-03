<style>
    .notfound_image{
        object-fit: cover;
        opacity: 0.4;
        transition: .5s ease;
    }
    .sectionBackground{
        background-color: #373058;
    }
</style>
<template>
    <div>
        <Navbar></Navbar>
        <div id="section" class="sectionBackground">
            <img src="/images/not_found.jpg" width="100%" height="100%" class="notfound_image">
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from './Navbar'
    import Footer from './Footer'

    export default {
        name: 'App',
        data() {
            return {

            }
        },
        components: {
            Navbar, Footer
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
