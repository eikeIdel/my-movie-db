// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../frontWebpage/FrontApp.vue'),
            children: [
                {
                    path: '/',
                    name: 'Home',
                    component: () => import('../frontWebpage/view/Home.vue'),
                },
                {
                    path: 'my-movies',
                    name: 'MyMovies',
                    component: () => import('../frontWebpage/view/MyMovies.vue')
                },
                {
                    path: 'search-Movie',
                    name: 'SearchMovies',
                    component: () => import('../frontWebpage/view/MovieSearch.vue')
                },
            ]
        },
        {
            path: '/admin',
            name: 'AdminDashboard',
            component: () => import('../adminDashboard/AdminDashboard.vue')
        },
    ]
})

export default router