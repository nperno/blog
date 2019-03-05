<template>
  <div id="blog-home">
    <h1 class="my-4">
      {{ page_title }}
      <small>{{this.$route.params.slug}}</small>
    </h1>

    <!-- Blog Post -->
    <div class="card-columns">
      <div v-for="(post, index) in posts" :key="post.slug + '_' + index">
        <div class="card w-100">
          <router-link :to="'/post/' + post.slug">
            <img class="card-img-top" v-if="post.featured_image" :src="post.featured_image" alt>
            <img v-else src="http://via.placeholder.com/250x250" alt>
            <div class="card-body">
              <h2 class="card-title">{{ post.title }}</h2>
              <p class="card-text">{{ post.summary }}</p>
              {{post.categorys}}
            </div>
            <div class="card-footer text-muted">Posted on {{post.published | formatDate("ddd, hA")}}</div>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <ul class="pagination justify-content-center mb-4">
      <li class="page-item">
        <a class="page-link" href="#">&larr; Older</a>
      </li>
      <li class="page-item disabled">
        <a class="page-link" href="#">Newer &rarr;</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-home",
  data() {
    return {
      page_title: "Blog",
      posts: []
    };
  },
  methods: {
    getPostsByCat() {
      if (this.$route.params.slug) {
        
                butter.post
          .list({
            page: 1,
            page_size: 10,
            category_slug: this.$route.params.slug
          })
          .then(res => {
            this.posts = res.data.data;
          });
      } else {
this.getPosts();
      }
    },
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: 10
        })
        .then(res => {
          this.posts = res.data.data;
        });
    }
  },
  watch: {
    $route() {
      this.getPostsByCat(this.$route.params.slug);
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style></style>
