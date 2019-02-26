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
              <router-link to="/">Home</router-link> |
            </li>
            <li>
              <router-link class="navbar-item" to="/blog">
                Blog Posts
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Page Content -->
    <div class="container">
      <div class="row">
        <!-- Blog Entries Column -->
        <div class="col-md-8">
          <router-view />
        </div>
        <!-- Sidebar Widgets Column -->
        <div class="col-md-4">
          <!-- Search Widget -->
          <div class="card my-4">
            <h5 class="card-header">Search</h5>
            <div class="card-body">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for..."
                  v-model="searchText"
                />
                <span class="input-group-btn">
 
       <button class="btn btn-secondary" type="button"  @click="search(searchText)">Go!</button>


           
                </span>
              </div>
            </div>
          </div>

          <!-- Categories Widget -->
          <div class="card my-4">
            <h5 class="card-header">Categories</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li
                      v-for="(categories, index) in categories"
                      :key="categories.slug + '_' + index"
                    >
                      <a href="#">{{ categories.name }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Tags Widget -->
          <div class="card my-4">
            <h5 class="card-header">Tags</h5>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list-unstyled mb-0">
                    <li
                      v-for="(tags, index) in tags"
                      :key="tags.slug + '_' + index"
                    >
                      <a href="#"
                        >{{ tags.name }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">
          Copyright &copy; Your Website 2019
        </p>
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
      categories: [],
        searchText: "",
      tags: []
    };
  },
  methods: {
    getCategories() {
      butter.category.list({ page: 1 }).then(res => {
        console.log("List of Categories:");
        console.log(res.data.data);
        this.categories = res.data.data;
      });
    },
    getAuthors() {
      butter.tag.list({ page: 1 }).then(res => {
        console.log("List of Tags:");
        console.log(res.data.data);
        this.tags = res.data.data;
      });
    },
       search(slug) {
      this.$router.push({ name: 'search-results', params: { slug: slug } });
    },
    getPostsByCategory() {
      butter.category
        .retrieve("example-category", {
          include: "recent_posts"
        })
        .then(res => {
          console.log("Posts with specific category:");
          console.log(res);
        });
    }
  },
  created() {
    this.getCategories();
    this.getPostsByCategory();
    this.getAuthors();
  }
};
</script>
