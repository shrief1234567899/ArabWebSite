<template>
    <div>
        <Navbar></Navbar>
        <div id="section">
            <div class="col-md-12" style="margin-top:50px">
                <div class="row-title">{{ $t("message.pre_conf") }}</div>
                <div class="row-subtitle"></div>
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
            return {
            }
        },
        components: {
            Navbar, Footer, Conferences
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
