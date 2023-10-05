<template>
  <v-row>
    <v-card v-for="post in posts" :key="post.id" dark>
      <div class="border-bottom d-flex align-center px-4 py-4">
        <div class="d-flex align-center">
          <a href="javascript:;" class="text-decoration-none">
            <v-avatar size="48" class="rounded-circle">
              <v-img :src="post.author.photo" alt="profile-image"></v-img>
            </v-avatar>
          </a>
          <div class="mx-4">
            <a
              href="javascript:;"
              class="text-warning font-weight-600 text-sm text-decoration-none"
              >{{ post.author.firstName }} {{ post.author.lastName }}</a
            >
            <small class="d-block text-muted">3 days ago</small>
          </div>
        </div>
      </div>
      <div class="px-4 py-4">
        <v-card class="elevation-20" color="#232020">
          <v-card-title>
            <p class="mb-6 text-body font-weight-light">
              {{ post.title }}
            </p>
          </v-card-title>
          <v-card-text>
            {{ post.content }}
          </v-card-text>
          <v-card-actions>
            <v-row class="align-center px-2 mt-6 mb-2">
              <v-col sm="6">
                <div class="d-flex">
                  <div class="d-flex align-center">
                    <v-icon
                      size="14"
                      class="material-icons-round me-1 text-body cursor-pointer"
                      >thumb_up</v-icon
                    >
                    <span class="text-sm text-body me-4">150</span>
                  </div>
                  <div class="d-flex align-center">
                    <v-icon
                      size="14"
                      class="material-icons-round me-1 text-body cursor-pointer"
                      >mode_comment</v-icon
                    >
                    <span class="text-sm text-body me-4">36</span>
                  </div>
                </div>
              </v-col>
              <v-col sm="6">
                <div class="d-flex align-center">
                  <div class="d-flex align-items-center ms-auto">
                    <v-avatar size="24" class="border border-white ms-n2">
                      <img src="@/assets/img/team-5.jpg" alt="Avatar" />
                    </v-avatar>
                    <v-avatar size="24" class="border border-white ms-n2">
                      <img src="@/assets/img/team-2.jpg" alt="Avatar" />
                    </v-avatar>
                    <v-avatar size="24" class="border border-white ms-n2">
                      <img src="@/assets/img/team-1.jpg" alt="Avatar" />
                    </v-avatar>
                  </div>
                  <small class="ps-2 font-weight-bold text-body text-sm"
                    >{{ $t("and") }} 30+ {{ $t("more") }}</small
                  >
                </div>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
        <v-img
          v-if="post.photo"
          src="https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          class="border-radius-lg shadow-lg"
        >
        </v-img>

        <div class="mb-1">
          <hr class="horizontal dark mt-1 mb-5" />
          <Comment :post="post"></Comment>
        </div>
      </div>
      <v-divider></v-divider>
    </v-card>
  </v-row>
</template>
<script>
import ArticleService from "@/services/article.service";
import Comment from "./Comment.vue";

export default {
  name: "Post",
  components: {
    Comment,
  },
  data: function () {
    return {
      posts: {},
    };
  },
  mounted() {
    ArticleService.getPosts().then(
      (response) => {
        this.posts = response.data;
        console.log(this.posts);
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
