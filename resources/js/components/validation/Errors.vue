<style>
    .error-container {
        background-color: #f8d7da;
        border-color: #f5c6cb;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding-bottom: 5px;
        padding-top: 15px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom : 20px;
        text-align: left;
        border-radius: 12px;
    }

    .error-span {
        color: #721c24;
        font-weight: bold;
    }

    .error-message {
        color: #721c24;
        font-weight: 500;
    }

    .error-icon {
        color: #721c24;
        border-radius: 30%;
        animation: shadow-pulse 1s infinite;
    }

    @keyframes shadow-pulse
    {
        0% {
            box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
        }
        100% {
            box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
        }
    }
</style>
<template>
    <div class="error-container" v-if="errors.length">
        <p>
            <i class="fas fa-exclamation-circle error-icon"></i>
            <span class="error-span">Oops!: </span>
            <span class="error-message">{{errors[0]}}</span>
        </p>
    </div>
</template>
<script>
    export default {
        name: 'Errors',
        components: {},
        data() {
            return {}
        },
        props: {
            errors: Array
        },
        mounted() {
            console.log('hellp');
        },
        updated: function () {
            this.$nextTick(function () {
                var $container = $("html,body");
                var $scrollTo = $('.signin-signup-form');

                $container.animate({scrollTop: $scrollTo.offset().top-100 , scrollLeft: 0},300);
            })
        }
    }
</script>
