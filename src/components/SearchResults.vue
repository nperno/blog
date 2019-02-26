<template>
  <div id="blog-home">
    <h1 class="my-4">{{ page_title }}
      <small>for: {{query}}</small>
    </h1>

    <!-- Blog Post -->
    <div class="card mb-4" v-for="(post, index) in posts" :key="post.slug + '_' + index">
      <router-link :to="'/blog/' + post.slug">
        <img class="card-img-top" v-if="post.featured_image" :src="post.featured_image" alt>
        <img v-else src="http://via.placeholder.com/250x250" alt>
        <div class="card-body">
          <h2 class="card-title">{{ post.title }}</h2>
          <p class="card-text">{{ post.summary }}</p>
        </div>
        <div class="card-footer text-muted">Posted on January 1, 2017 by</div>
      </router-link>
    </div>
  </div>
</template>


<script>
import { butter } from "@/buttercms";
export default {
  name: "search-results",
  data() {
    return {
      page_title: "Search Results",
      query: this.$route.params.slug,
      posts: []
    };
  },
  methods: {
    getPosts() {
      butter.post.search(this.$route.params.slug).then(res => {
        this.posts = res.data.data;
      });
    }},
    created() {
      this.getPosts();
    }
  };
</script>
