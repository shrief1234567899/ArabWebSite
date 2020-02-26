<template>
    <nav id="nav" class="navbar navbar-default navbar-full">
        <div class="container-fluid">
            <div class="container container-nav">
                <div class="row">
                    <div class="col-md-12">
                        <div class="navbar-header">
                            <button aria-expanded="false" type="button" class="navbar-toggle collapsed"
                                    data-toggle="collapse" data-target="#bs">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
<!--                            <router-link to="/" class="logo-holder" style="position: absolute;left: 40%;margin-left: -50px !important;display: block;">-->
<!--                                <div class="logo" style="width:300px;height:60px;"></div>-->
<!--                            </router-link>-->
                        </div>
                        <div style="height: 1px;" role="main" aria-expanded="false" class="navbar-collapse collapse"
                             id="bs">
                            <ul class="nav navbar-nav navbar-left">
                                <li>
                                    <router-link to="/">
                                        {{ $t("message.home") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/about">
                                        {{ $t("message.about") }}
                                    </router-link>
                                </li>
                                <li class="dropdown">
                                    <a href="#"> {{ $t("message.conf") }} <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about.html">{{ $t("message.curr_conf") }}</a></li>
                                        <li><a href="blog.html">{{ $t("message.pre_conf") }}</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
<!--                                <li><a href="index.html">{{ $t("message.news_events") }}</a></li>-->
                                <li><a href="index.html">{{ $t("message.services") }}</a></li>
                                <li class="dropdown">
                                    <a href="#">{{ $t("message.media_corner") }} <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about.html">{{ $t("message.gallery") }}</a></li>
                                        <li><a href="blog.html">{{ $t("message.videos") }}</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">{{ $t("message.contact_us") }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
