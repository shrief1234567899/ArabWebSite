<style>
    img {
        border-radius: 7px;
    }

    .mfeature-box {
        min-height: 400px;
    }
</style>
<template>
    <div>
        <div id="more-features" class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row-title">{{ $t("message.top_services") }}</div>
                        <div class="row-subtitle">Designed to satisfy your creative needs.</div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="mfeature-box">
                            <div class="mfeature-icon">
                                <img width="200" height="100"
                                     src="/images/topServices/event_mang.jpg"
                                     alt="">
                            </div>
                            <div class="mfeature-title">Event Management</div>
                            <div class="mfeature-details">
                                • Venue finding and Contract Negotiation • Sponsorship Proposals • Financial Management
                                • Marketing and Telesales • Event Budget and Cash Flow Preparation • Full Secretariat
                                Service
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="mfeature-box">
                            <div class="mfeature-icon">
                                <img width="200" height="100"
                                     src="/images/topServices/audio.jpg"
                                     alt="">
                            </div>
                            <div class="mfeature-title">Audio Visual Setup</div>
                            <div class="mfeature-details">
                                Arab Organizers offers customers some of the most comprehensive services in the
                                industry.
                                Our talented team of audio visual professionals can identify the best service plan
                                for your company.
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="mfeature-box">
                            <div class="mfeature-icon">
                                <img width="200" height="100"
                                     src="/images/topServices/hotel.jpg"
                                     alt="">
                            </div>
                            <div class="mfeature-title">Hotel booking & preferential rates</div>
                            <div class="mfeature-details">We have a comprehensive portfolio of conference venues
                                available for hire on a day or residential basis.
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
        }
    }
</script>
