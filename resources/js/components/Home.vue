<template>
    <div id="header-holder" class="main-header">
        <div class="bg-animation">
            <div class="graphic-show">
                <img class="fix-size" src="/images/graphic1.png" alt="">
                <img class="img img1" src="/images/graphic1.png" alt="">
                <img class="img img2" src="/images/graphic2.png" alt="">
                <img class="img img3" src="/images/graphic3.png" alt="">
            </div>
        </div>
        <Navbar></Navbar>
        <div id="top-content" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div id="main-slider">
                            <div class="slide">
                                <div class="big-title"><span>Arab Organizers</span>
                                    for Conference Management
                                </div>
                                <p>
                                    Arab Organizers is a pioneer in Professional Congress Organization and Association
                                    Management.
                                </p>
                                <div class="btn-holder">
                                    <a href="#" class="ybtn ybtn-header-color">Read more</a>
                                    <a href="#" class="ybtn ybtn-white ybtn-shadow">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img class="header-graphic" src="/images/graphic1.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from './Navbar'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>
