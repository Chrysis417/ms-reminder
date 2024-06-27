import { createRouter, createWebHashHistory } from "vue-router";

const routes = createRouter({
    mode:history,
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component:()=>import("../views/Home.vue")
        },
        {
            path:"/settings",
            name:"settings",
            component:()=>import("../views/Settings.vue"),
            children: [
                {
                    path:"about",
                    name:"about",
                    component:()=>import("../views/settings/About.vue")
                },{
                    path:"event-details",
                    name:"event-details",
                    component:()=>import("../views/settings/EventDetails.vue")
                },{
                    path:"event-list",
                    name:"event-list",
                    component:()=>import("../views/settings/EventList.vue")
                },{
                    path:"help",
                    name:"help",
                    component:()=>import("../views/settings/Help.vue")
                }
            ]
        }
    ]
})

export default routes