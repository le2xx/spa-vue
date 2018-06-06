import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import Post from './Post.vue';
import Hello from './Hello.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name:'home',
            component: Hello,
        },
        {
            path: '/post/:id',
            name:'post',
            component: Post,
            props: true,
        },
    ]
});

new Vue({
    el: '#app',
    render: h => h(App),
    router
});
