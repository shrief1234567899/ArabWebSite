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
        <loading :active.sync="isLoading"
                 color="#c94328"
                 :can-cancel="false"
                 :height="100"
                 :width="200"
                 :opacity="0.6"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"></loading>
        <div class="container">
            <div class="row">
                <div v-for="conference in conferences">
                    <router-link :to="'conference/' + conference.id">
                        <div class="col-sm-6 col-md-4">
                            <div class="article-summary">
                                <div class="article-img">
                                    <img :src="conference.image" alt="">
                                </div>
                                <div class="article-details" style="height:200px">
                                    <div class="article-title"><a href="#">{{conference.name}}</a></div>
                                    <div class="article-text">
                                        {{conference.description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: 'Conferences',
        components: {Loading},
        data() {
            return {
                isLoading: true,
                fullPage: true,
                conferences: []
            }
        },
        props: {
            type: String
        },
        mounted() {
            this.getConferences();
        },
        methods: {
            getConferences: function () {
                let screen = this;
                axios
                    .get('https://araborganizers-system.com/api/' + screen.type)
                    .then(response => {
                        for (var i = 0; i < response.data.data.length; i++) {
                            response.data.data[i].image = 'https://araborganizers-system.com' + response.data.data[i].image;
                        }
                        screen.conferences = response.data.data;
                        screen.isLoading = false;
                    })
                    .catch(error => {
                        console.log(error);
                        screen.isLoading = false;
                    })
            },
            onCancel() {
            },
        }
    }
</script>
