import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Beta from  "../views/Beta";
import Contact from  "../views/Contact";
import Submit from  "../views/Submit";
import Shows from  "../views/Shows";
import Community from  "../views/Community";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/beta",
    name: "Beta",
    component: Beta
  },
  {
    path: "/shows",
    name: "Shows",
    component: Shows
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/submit",
    name: "Submit",
    component: Submit
  },  {
    path: "/advertise",
    name: "Community",
    component: Community
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
