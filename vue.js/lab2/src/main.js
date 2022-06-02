import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createRouter,createWebHistory} from 'vue-router'
import getUserApp  from "./components/pages/getUser.vue";
import createUserApp from "./components/pages/createUser.vue";
import detailsApp from "./components/pages/details.vue";


createApp(App).mount('#app')

const routes=[

    {path:'/users',component:getUserApp},  
    {path:'/create',component:createUserApp},
    {path:'/user/:id',component:detailsApp},
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
