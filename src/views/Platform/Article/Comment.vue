<template>
  <v-row>
    <div class="d-flex mt-5" v-for="comment in this.comments" :key="comment.id">
      <div class="flex-shrink-0">
        <v-avatar
          class="border border-warning border-radius-lg"
          width="15"
          height="30"
        >
          <v-img :src="comment.author.photo"></v-img>
        </v-avatar>
      </div>
      <div class="flex-grow-1 ms-4">
        <p class="warning font-weight-bold mt-0 mb-2">
          {{ comment.author.firstName }} {{ comment.author.lastName }}
        </p>
        <v-card class="elevation-20" color="#232020">
            <v-card-text>
                {{ comment.content }}
            </v-card-text>
            <v-card-actions>
                <v-icon
                        size="14"
                        class="material-icons-round me-1 text-body cursor-pointer"
                >thumb_up</v-icon
                >
                <span class="text-sm me-2 text-body">10 {{ $t("likes") }}</span>
            </v-card-actions>
        </v-card>
      </div>
    </div>

    <div class="d-flex mt-6">
      <div class="flex-shrink-0">
        <v-avatar
          class="border border-warning border-radius-lg"
          width="20"
          height="40"
        >
          <v-img :src="this.userProfile.photo"></v-img>
        </v-avatar>
      </div>
      <div class="flex-grow-1 ms-4">
        <v-row>
          <v-col cols="10">
            <v-textarea
              :placeholder="$t('WriteYourComment')"
              class="input-style mt-0 pt-0"
              color="#e91e63"
              rows="1"
              v-model="comment"
            ></v-textarea>
          </v-col>
          <v-col cols="2">
            <v-btn @click="addComment(post.slug)">
              <v-icon class="material-icons-round text-warning" size="24"
                >play_arrow</v-icon
              >
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-row>
</template>
<script>
import ArticleService from "@/services/article.service";
import UserService from "@/services/user.service";

export default {
  name: "Post",
  props: {
    post: [],
  },
  data: function () {
    return {
      userProfile: [],
      comment: "",
      comments: [],
      newComment: [],
    };
  },
  methods: {
    addComment(postSlug) {
      ArticleService.addComment(postSlug, this.comment).then(
        (response) => {
          this.newComment.content = this.comment;

          this.newComment.author = {
            firstName: this.userProfile.firstName,
            lastName: this.userProfile.lastName,
            photo: this.userProfile.photo,
          };
          this.comments.push(this.newComment);
          this.comment = "";
          console.log(response);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
  mounted() {
    this.comments = this.post.comments;
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
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
