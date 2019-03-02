<template>
  <div id="blog-post">
    <!-- Title -->
    <h1 class="mt-4">{{ post.data.title }}</h1>

    <!-- Author -->
    <p class="lead">
      by
      {{ post.data.author.first_name }} {{ post.data.author.last_name }}
    </p>

    <hr />

    <!-- Date/Time -->
    <p>Posted on January 1, 2019 at 12:00 PM</p>

    <hr />

    <!-- Preview Image -->

    <img
      class="img-fluid rounded"
      v-if="post.data.featured_image"
      :src="post.data.featured_image"
      alt=""
    />
    <img v-else src="http://via.placeholder.com/250x250" alt="" />
    <hr />

    <!-- Post Content -->
    <div class="content" v-html="post.data.body"></div>
    <!-- Post Nav -->
    <div class="has-text-centered">
      <router-link
        v-if="post.meta.previous_post"
        :to="/post/ + post.meta.previous_post.slug"
        class="button"
      >
        {{ post.meta.previous_post.title }}
      </router-link>
      <router-link
        v-if="post.meta.next_post"
        :to="/post/ + post.meta.next_post.slug"
        class="button"
      >
        {{ post.meta.next_post.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { butter } from "@/buttercms";
export default {
  name: "blog-post",
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data;
        })
        .catch(res => {
          console.log(res);
        });
    }
  },
  watch: {
    $route(to, from) {
      this.getPost();
    }
  },
  created() {
    this.getPost();
  }
};
</script>
