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
                            <div class="logo-holder" style="position: absolute;left: 40%;margin-left: -50px !important;display: block;">
                                <div class="logo" style="width:300px;height:60px;"></div>
                            </div>
                        </div>
                        <div style="height: 1px;" role="main" aria-expanded="false" class="navbar-collapse collapse"
                             id="bs">
                            <ul class="nav navbar-nav navbar-left">
                                <li>
                                    <router-link to="/" exact>
                                        {{ $t("message.home") }}
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/about" exact>
                                        {{ $t("message.about") }}
                                    </router-link>
                                </li>
                                <li class="dropdown">
                                    <a href="#"> {{ $t("message.conf") }} <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link to="/currentConferences" exact>
                                                {{ $t("message.curr_conf") }}
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/previousConferences" exact>
                                                {{ $t("message.pre_conf") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <!--                                <li><a href="index.html">{{ $t("message.news_events") }}</a></li>-->
                                <li>
                                    <router-link to="/services">
                                        {{ $t("message.services") }}
                                    </router-link>
                                </li>
                                <li class="dropdown">
                                    <a href="#">{{ $t("message.media_corner") }} <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <router-link to="/media/gallery">
                                                {{ $t("message.gallery") }}
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/media/videos">
                                                {{ $t("message.videos") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="/contact">
                                        {{ $t("message.contact_us") }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
