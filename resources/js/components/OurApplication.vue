<style>
</style>
<template>
    <div>
        <div id="apps" class="container-fluid">
            <div class="bg-color"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row-icon"><img src="images/click-icon.png"></div>
                        <div class="row-title">One-Click Apps</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="apps-holder">
                            <div class="apps-links-holder">
                                <div class="app-icon-holder app-icon-holder1 opened" data-id="1">
                                    <div class="app-icon"><img class="grayscale" src="images/sfeature2.png"
                                                               alt="wordpress"></div>
                                </div>
                                <div class="app-icon-holder app-icon-holder3" data-id="3">
                                    <div class="app-icon"><img class="grayscale" src="images/aicon3.png" alt="drupal">
                                    </div>
                                </div>
                                <div class="app-icon-holder app-icon-holder4" data-id="4">
                                    <div class="app-icon"><img class="brightness" src="images/star.png"
                                                               alt="magento"></div>
                                </div>
                            </div>
                            <div class="apps-details-holder">
                                <div class="app-details">
                                    <div class="app-details1 show-details">
                                        <div class="col-md-5">
                                            <div class="img-holder">
                                                <img src="images/application/content_mang.png" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="app-title">Content management made simple</div>
                                            <div class="app-text">Easily add agendas, tracks, speaker bios, exhibitors,
                                                sponsor lists and more either individually or by bulk upload.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="app-details3">
                                        <div class="col-md-5">
                                            <div class="img-holder">
                                                <img src="images/application/statistics.png" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="app-title">Data Analytics</div>
                                            <div class="app-text">Discover how did attendees experience your event with
                                                measurable metrics.
                                                Make data driven decisions to make your next event better than the
                                                previous.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="app-details4">
                                        <div class="col-md-5">
                                            <div class="img-holder">
                                                <img src="images/application/guest_mode.png" alt="">
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="app-title">Guest Mode</div>
                                            <div class="app-text">Easy and simple GUI for our clients.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {}
        },
        mounted() {
            var appHolder = $(".app-icon-holder", "#apps");

            appHolder.on("mouseover", function () {
                appHolder.removeClass("opened");
                $(this).addClass("opened");
                $(".show-details", "#apps").removeClass("show-details");
                $(".app-details" + $(this).data("id"), "#apps").addClass("show-details");
            });
        }
    }
</script>
