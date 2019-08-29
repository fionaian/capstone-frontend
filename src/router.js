import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import EventUsersIndex from "./views/EventUsersIndex.vue";
import CausesIndex from "./views/CausesIndex.vue";
import CausesShow from "./views/CausesShow.vue";
import NposIndex from "./views/NposIndex.vue";
import NposShow from "./views/NposShow.vue";
import EventsIndex from "./views/EventsIndex.vue";
import EventsShow from "./views/EventsShow.vue";
import Logout from "./views/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/eventusers", name: "eventusers-index", component: EventUsersIndex },
    { path: "/eventusers" },
    { path: "/causes", name: "causes-index", component: CausesIndex },
    { path: "/causes/:id", name: "causes-show", component: CausesShow },
    { path: "/npos", name: "npos-index", component: NposIndex },
    { path: "/npos/:id", name: "npos-show", component: NposShow },
    { path: "/events", name: "events-index", component: EventsIndex },
    { path: "/events/:id", name: "events-show", component: EventsShow },
    { path: "/logout", name: "logout", component: Logout }
  ]
});
