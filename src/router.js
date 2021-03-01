import { createRouter, createWebHistory }
    from 'vue-router'

import Landing from './views/Landing.vue'
import Home from './views/Home.vue'
import Content from './views/Content.vue'
import Aboutus from './views/Aboutus.vue'
import Hellothere from './views/Hellothere.vue'
import Contactus from './views/Contactus.vue'

const routes = [
    { path: '/', component: Landing },
    { path: '/Home', component: Home },
    { path: '/Content', component: Content },
    { path: '/AboutUs', component: Aboutus },
    { path: '/HelloThere', component: Hellothere },
    { path: '/ContactUs', component: Contactus },
]

export const router = createRouter({
    history: createWebHistory(),
    routes
}
)