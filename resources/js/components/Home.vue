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
        <div>
            <div class="col-md-12" style="margin-top:50px">
                <div class="row-title">{{ $t("message.curr_conf") }}</div>
                <div class="row-subtitle"></div>
            </div>
            <div id="articles" class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article1.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Lorem ipsum dolor sit amet,
                                        consect</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article2.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Ut laoreet dolore magna aliquam
                                        erat</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article3.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Nibh tincidunt ut laoreet dolore
                                        magna aliquam</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article4.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Consectetuer elit, sed diam nonummy
                                        nibh tincidunt</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article6.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Lorem ipsum dolor sit amet, consect
                                        Ut laoreet dolore magna aliquam erat</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img"><img src="images/article1.jpg" alt=""></div>
                                <div class="article-details">
                                    <div class="article-title"><a href="post.html">Lorem ipsum dolor sit amet, consect
                                        Ut laoreet dolore magna aliquam erat</a></div>
                                    <div class="article-text">Lorem ipsum dolor sit amet, consectetuer elit, sed diam
                                        nonummy nibh tincidunt ut laoreet dolore magna aliquam erat.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
