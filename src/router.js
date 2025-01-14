import {createMemoryHistory, createRouter} from 'vue-router';

import Campus from './Campus.vue';
import Teaching from './Teaching.vue';
import Index from './Index.vue';
import Lesson from './Lesson.vue';
import Faq from './Faq.vue';
import Join from './Join.vue';
import About from './About.vue';

const routes = [
    {path: '/', component: Index},
    {path: '/campus', component: Campus},
    {path: '/teaching', component: Teaching},
    {path: '/lesson', component: Lesson},
    {path: '/faq', component: Faq},
    {path: '/join', component: Join},
    {path: '/about', component: About},
];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});
