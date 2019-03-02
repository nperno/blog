import Vue from "vue";
import BlogHome from "@/components/BlogHome";
import BlogPost from "@/components/BlogPost";
import SearchResults from "@/components/SearchResults";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);
// usign has mode for now as 404 not working correctly on github pages
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog/",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/blog/:slug",
      name: "blog-home",
      component: BlogHome
    },
    {
      path: "/post/:slug",
      name: "blog-post",
      component: BlogPost
    },
    {
      path: "/SearchResults/:slug",
      name: "search-results",
      component: SearchResults
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
