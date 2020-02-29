import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';
import ConferenceDetails from '@/js/components/conference/ConferenceDetails';
import Gallery from '@/js/components/media/Gallery';
import Video from '@/js/components/media/Video';
import CurrentConferences from '@/js/components/CurrentConferences';
import PreviousConferences from '@/js/components/PreviousConferences';
import Contact from '@/js/components/Contact';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/conference/:id',
            name: 'ConferenceDetails',
            component: ConferenceDetails
        },
        {
            path: '/media/gallery',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/media/videos',
            name: 'Video',
            component: Video
        },
        {
            path: '/currentConferences',
            name: 'currentConferences',
            component: CurrentConferences
        },
        {
            path: '/previousConferences',
            name: 'previousConferences',
            component: PreviousConferences
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
    ],
});

export default router;
