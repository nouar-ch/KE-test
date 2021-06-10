import {createWebHistory, createRouter} from 'vue-router'
import Home  from './layouts/Home'
import Search from './layouts/Search'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
