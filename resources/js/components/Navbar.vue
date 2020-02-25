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
                            <router-link to="/" class="logo-holder">
                                <div class="logo" style="width:300px;height:60px"></div>
                            </router-link>
                        </div>
                        <div style="height: 1px;" role="main" aria-expanded="false" class="navbar-collapse collapse"
                             id="bs">
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <router-link to="/">
                                        Home
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to="/about">
                                            About
                                    </router-link>
                                </li>
                                <li class="dropdown">
                                    <a href="#">Conferences <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about.html">Current Conferences</a></li>
                                        <li><a href="blog.html">Previous Conferences</a></li>
                                    </ul>
                                </li>
                                <li><a href="index.html">News & Events</a></li>
                                <li><a href="index.html">Services</a></li>
                                <li class="dropdown">
                                    <a href="#">Media Corner <i class="fas fa-caret-down"></i></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="about.html">Gallery</a></li>
                                        <li><a href="blog.html">Videos</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
