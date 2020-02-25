<template>
    <div>
        <Navbar></Navbar>
        <div id="section">
            About
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navbar from './Navbar'
    import Footer from './Footer'

    export default {
        name: 'App',
        components: {
            Navbar, Footer
        },
        mounted() {
        }
    }
</script>
