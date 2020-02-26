<template>
    <div>
        <Navbar></Navbar>
        <div id="section">
            <div class="row">
                <div class="col-md-3">
                    hello
                </div>
                <div class="col-md-8">
                    <div id="more-info" class="container-fluid">
                        <div class="bg-custom"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="links-holder">
                                        <ul>
                                            <li><div class="info-link opened" data-id="1">Our Mission</div></li>
                                            <li><div class="info-link" data-id="2">Our Vision</div></li>
                                            <li><div class="info-link" data-id="3">Hostify Commitment</div></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="info-details-holder">
                                        <div class="info-details info-d1 show-details">
                                            <h1>Creating a space<br>
                                                for creatives.</h1>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum div atque corrupti quos dolores et quas molestias.</p>
                                        </div>
                                        <div class="info-details info-d2">
                                            <h1>Hostify will always<br>
                                                feels like home.</h1>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum div atque corrupti quos dolores et quas molestias.</p>
                                        </div>
                                        <div class="info-details info-d3">
                                            <h1>Affordable pricing<br>
                                                made easy.</h1>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum div atque corrupti quos dolores et quas molestias.</p>
                                        </div>
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

    export default {
        name: 'App',
        components: {
            Navbar, Footer
        },
        mounted() {
            var infoLink = $(".info-link", "#more-info");

            infoLink.on("mouseover",function(){
                infoLink.removeClass("opened");
                $(this).addClass("opened");
                $(".show-details", "#more-info").removeClass("show-details");
                $(".info-d"+$(this).data("id"), "#more-info").addClass("show-details");
            });
        }
    }
</script>
