<template>
    <div>
        <Navbar></Navbar>
        <div id="section">
            <div id="page-head" class="container-fluid inner-page">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="page-title">{{ $t("message.pre_conf") }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Conferences type="old"></Conferences>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from './Navbar'
    import Footer from './Footer'
    import Conferences from './conference/Conferences'

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            Navbar, Footer, Conferences
        },
        mounted() {
        },
        methods: {}
    }
</script>
