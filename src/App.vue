<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">NAPATI</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item ">
              <router-link to="/"  class="nav-link" >Home</router-link>
            </li>
            <li>
              <router-link  class="nav-link"  to="/blog">Blog Posts</router-link>
            </li>
            <li v-for="(categories, index) in categories" :key="categories.slug + '_' + index">
            <router-link :to="/blog/ + categories.slug"  class="nav-link" >{{categories.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <!-- Blog Entries Column -->
        <div class="col-md-12">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; NAPATI 2019
          <br/>  
        <a href="https://buttercms.com" target="_blank">
          <img class="w-25" src="https://cdn.buttercms.com/JSSDbrHPSnGlLUcyHTn5">
        </a></p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>
<script>
import { butter } from "@/buttercms";

export default {
  name: "app",
  data() {
    return {
      categories: []
    };
  },

  methods: {
    getCategories() {
      butter.category.list({ page: 1 }).then(res => {
        this.categories = res.data.data;
      });
    }
  },
  created() {
    this.getCategories();
  }
};
</script>
