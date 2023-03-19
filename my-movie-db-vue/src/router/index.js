// import router functions
import { createRouter, createWebHistory } from 'vue-router'
// setup routes
const router = createRouter({
    history: createWebHistory('http://127.0.0.1:5173/'),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../view/Home.vue')
        },
        {
            path: '/my-movies',
            name: 'MyMovies',
            component: () => import('../view/MyMovies.vue')
        },
        {
            path: '/search-Movie',
            name: 'SearchMovies',
            component: () => import('../view/MovieSearch.vue')
        },
    ]
})

export default router