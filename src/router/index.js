import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import UnderConstruction from '@/views/UnderConstruction'
import ListView from '@/views/ListView'
import SingleListView from '@/views/SingleListView'
import SingleListView2 from '@/views/SingleListView2'
import academySingle from '@/views/academySingle'
import academy from '@/views/academy'
import Flags from '@/views/Flags'


Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: LandingPage
        },
        {
            path: '/list',
            name: 'ListView',
            component: ListView
        },
        {
            path: '/single',
            name: 'SingleListView',
            component: SingleListView
        },
        {
            path: '/single2',
            name: 'SingleListView2',
            component: SingleListView2
        },
        {
            path: '/uc',
            name: 'UnderConstruction',
            component: UnderConstruction
        },
        {
            path: '/flags',
            name: 'Flags',
            component: Flags
        },
        {
            path: '/academy',
            name: 'academy',
            component: academy
        },
        {
            path: '/academySingle',
            name: 'academySingle',
            component: academySingle
        }
    ]
})
