import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/home/home.vue'
import pesti from  './components/home/pesti.vue'
import ferti from './components/home/ferti.vue'
import farm from './components/home/farm.vue'
import video from './components/home/video.vue'
import rating from './components/home/rating.vue'
import complaint from './components/home/complaint.vue'
import other from './components/home/other.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
    {path: '/home', component: home},
    {path: '/pesti', component: pesti},
    {path: '/ferti', component: ferti},
    {path: '/farm', component: farm},
    {path: '/video', component: video},
    {path: '/rating', component: rating},
    {path: '/complaint', component: complaint},
    {path: '/other',component: other},
    {path: '/', component: home}
];

const router = new VueRouter({
    // 默认a的class是v-link-class,可以自己改配置
    linkActiveClass: 'active',
    routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
