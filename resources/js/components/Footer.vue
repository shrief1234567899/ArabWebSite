<template>
    <div id="footer" class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-4 col-md-3">
                    <div class="address-holder">
                        <div class="phone"><i class="fas fa-phone"></i> 002-02-​2603653</div>
                        <div class="email"><i class="fas fa-envelope"></i> araborganizers@hotmail.com</div>
                        <div class="address">
                            <i class="fas fa-map-marker"></i>
                            <div>14 Mohamed Mandour Street,<br>
                                Rabaa El Adwaia, Nasr City,<br>
                                Cairo Egypt.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-2 col-md-2">
                    <div class="footer-menu-holder">
                        <h4>{{ $t("message.media_corner") }}</h4>
                        <ul class="footer-menu">
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
                    </div>
                </div>
                <div class="col-xs-6 col-sm-2 col-md-3">
                    <div class="footer-menu-holder">
                        <h4>Important Links</h4>
                        <ul class="footer-menu">
                            <li><a href="http://www.apaslstc.com/" target="_blank">APASL Asian Pacific Association for the Study of the Liver</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-3 col-md-3">
                    <div class="footer-menu-holder">
                        <h4>Quick Links</h4>
                        <ul class="footer-menu">
                            <li>
                                <router-link to="/currentConferences">
                                    {{ $t("message.curr_conf") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/previousConferences">
                                    {{ $t("message.pre_conf") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/services">
                                    {{ $t("message.services") }}
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/contact">
                                    {{ $t("message.contact_us") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-1 col-md-1">
                    <div class="social-menu-holder">
                        <ul class="social-menu">
                            <li><a target="_blank" href="https://www.facebook.com/araborganizersadmin"><i
                                class="fab fa-facebook" style="color: #3c569a"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/araborganizers.official/"><i
                                class="fab fa-instagram" style="color: #cd4533"></i></a></li>
                            <li><a target="_blank" href="http://twitter.com/AOrganizers"><i class="fab fa-twitter"
                                                                                            style="color: #4acdfe"></i></a>
                            </li>
                            <li><a target="_blank" href="https://www.linkedin.com/in/arab-organizers-817a0818b/"><i
                                class="fab fa-linkedin" style="color: white"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
