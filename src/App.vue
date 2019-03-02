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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <router-link to="/">Home</router-link>|
            </li>
            <li>
              <router-link class="navbar-item" to="/blog/all">Blog Posts</router-link>
            </li>
            <li v-for="(categories, index) in categories" :key="categories.slug + '_' + index">
              <router-link :to="/blog/ + categories.slug">{{categories.name}}</router-link>|
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
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
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
