<style>
    .article-text {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
</style>
<template>
    <div id="articles" class="container-fluid">
        <div class="container">
            <div class="row">
                <router-link to="conference/1">
                    <div class="col-sm-6 col-md-4">
                        <div class="article-summary">
                            <div class="article-img">
                                <img
                                    src="https://araborganizers.org/UserFiles/ConferencesLogos/947a4629-704a-4aa1-beea-17f0e9acbed2.jpg"
                                    alt="">
                            </div>
                            <div class="article-details">
                                <div class="article-title"><a href="#">Hemo-Alex 2002</a></div>
                                <div class="article-text">
                                    The Egyptian Society of Hemato-Oncology and Bone Marrow Transplantation
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="conference/2">
                    <div class="col-sm-6 col-md-4">
                        <div class="article-summary">
                            <div class="article-img">
                                <img
                                    src="https://araborganizers.org/UserFiles/ConferencesLogos/973c9d1d-5cee-4c77-aa3e-8021f1a961ab.jpg"
                                    alt="">
                            </div>
                            <div class="article-details">
                                <div class="article-title"><a href="#">Hemo-Alex 2002</a></div>
                                <div class="article-text">
                                    The Egyptian Society of Hemato-Oncology and Bone Marrow Transplantation
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="conference/3">
                    <div class="col-sm-6 col-md-4">
                        <div class="article-summary">
                            <div class="article-img">
                                <img
                                    src="https://araborganizers.org/UserFiles/ConferencesLogos/947a4629-704a-4aa1-beea-17f0e9acbed2.jpg"
                                    alt="">
                            </div>
                            <div class="article-details">
                                <div class="article-title"><a href="#">Hemo-Alex 2002</a></div>
                                <div class="article-text">
                                    The Egyptian Society of Hemato-Oncology and Bone Marrow Transplantation adahsdhjagsdhsagdjgsajdgsagdjagjdgjsagdgasjdg
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'App',
        components: {},
        mounted() {
        }
    }
</script>
