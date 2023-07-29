<template>
  <v-container fluid class="py-6">
    <div
      class="
        min-height-200
        border-radius-xl
        overflow-hidden
        position-relative
        mx-3
      "
      :style="`background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'); background-position: 50%; background-size: cover;`"
    >
      <span class="mask bg-gradient-warning opacity-25"></span>
    </div>
    <v-card
      class="
        card-shadow
        bg-gradient-default
        px-4
        py-4
        mx-9
        overflow-hidden
        border-radius-xl
        mt-n16
        elevation-20
      "
    >
      <v-row>
        <v-col cols="auto">
          <v-avatar width="74" height="74" class="shadow border-radius-lg elevation-10">
            <img
              :src="userProfile.photo"
              alt="Avatar"
              class="border border-warning border-radius-lg"
            />
          </v-avatar>
        </v-col>
        <v-col cols="auto" class="my-auto">
          <div class="h-100">
            <h5 class="mb-1 text-h5 text-warning font-weight-bold">
              {{ this.userProfile.firstName }}
              {{ this.userProfile.lastName }}
            </h5>
            <p class="mb-0 font-weight-light text-body text-sm"></p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="overflow-scroll" dark>
            <div class="py-4 d-flex">
              <v-col lg="1" md="2" sm="3" cols="4" class="text-center">
                <v-avatar size="58" class="shadow-sm">
                  <v-icon class="material-icons-round">add</v-icon>
                </v-avatar>
                <p class="mb-0 text-sm text-body font-weight-light mt-2">
                  Add story
                </p>
              </v-col>
              <v-col
                v-for="avatar in stories"
                :key="avatar.user"
                lg="1"
                md="2"
                sm="3"
                cols="4"
                class="text-center"
              >
                <v-avatar size="58" class="border border-warning px-1 py-1">
                  <v-img :src="avatar.image" width="50" height="50"> </v-img>
                </v-avatar>
                <p class="mb-0 text-sm text-body font-weight-light mt-2">
                  {{ avatar.user }}
                </p>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="8" cols="12">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="600px"
                      dark
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          block
                          elevation="24"
                          large
                          rounded
                          text
                          v-bind="attrs"
                          v-on="on"
                          color="orange"
                        >
                          <v-icon class="material-icons-round" size="24">
                            add
                          </v-icon>
                          {{ $t("AddPost") }}
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5 text-warning">{{ $t("NewPost") }}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  :label="$t('postTitle')"
                                  required
                                  v-model="post.title"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  :label="$t('postDescription')"
                                  hint="example of helper text only on focus"
                                  v-model="post.content"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="orange" text @click="dialog = false">
                            {{ $t("Close") }}
                          </v-btn>
                          <v-btn color="orange" text @click="savePost">
                            {{ $t("Save") }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-divider></v-divider>
          <Post></Post>
        </v-col>
        <v-col lg="4" cols="12">
          <v-card class="mb-6" v-for="card in cards" :key="card.title" dark>
            <div class="px-4 py-4">
              <v-row class="align-center">
                <v-col cols="9">
                  <h5
                    class="
                      text-h5
                      font-weight-bold
                      mb-1
                      text-gradient text-warning
                    "
                  >
                    <a href="javascript:;" class="text-decoration-none">{{
                      card.title
                    }}</a>
                  </h5>
                </v-col>
                <v-col cols="3" class="text-end">
                  <v-menu
                    transition="slide-y-transition"
                    offset-y
                    offset-x
                    min-width="150"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        :ripple="false"
                        class="text-secondary"
                        v-bind="attrs"
                        v-on="on"
                        small
                      >
                        <v-icon size="16">fas fa-ellipsis-v</v-icon>
                      </v-btn>
                    </template>

                    <v-list class="pa-2">
                      <v-list-item
                        class="list-item-hover-active border-radius-md"
                      >
                        <v-list-item-content class="pa-0">
                          <v-list-item-title
                            class="
                              text-body-2
                              ls-0
                              text-body
                              font-weight-600
                              py-2
                            "
                          >
                            Edit Team
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item
                        class="list-item-hover-active border-radius-md"
                      >
                        <v-list-item-content class="pa-0">
                          <v-list-item-title
                            class="
                              text-body-2
                              ls-0
                              text-body
                              font-weight-600
                              py-2
                            "
                          >
                            Add Member
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-list-item
                        class="list-item-hover-active border-radius-md"
                      >
                        <v-list-item-content class="pa-0">
                          <v-list-item-title
                            class="
                              text-body-2
                              ls-0
                              text-body
                              font-weight-600
                              py-2
                            "
                          >
                            See Details
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <hr class="horizontal dark my-2" />
                      <v-list-item
                        class="list-item-hover-active border-radius-md"
                      >
                        <v-list-item-content class="pa-0">
                          <v-list-item-title
                            class="text-danger ls-0 font-weight-600 mb-0"
                          >
                            Remove Team
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>
              <p class="text-body font-weight-light mt-3">
                {{ card.description }}
              </p>
              <div class="d-flex">
                <p class="mb-0 font-weight-light text-body">Industry:</p>
                <v-btn
                  elevation="0"
                  small
                  :ripple="false"
                  height="21"
                  class="
                    border-radius-md
                    font-weight-bolder
                    px-3
                    py-3
                    badge-font-size
                    ms-auto
                    text-body
                  "
                  color="#e4e8ed"
                  >{{ card.industry }}</v-btn
                >
              </div>
              <hr class="horizontal dark my-4" />
              <div class="d-flex">
                <p class="mb-0 font-weight-light text-body">Rating:</p>
                <div class="rating ms-auto">
                  <v-icon size="16">fas fa-star text-body</v-icon>
                  <v-icon size="16">fas fa-star text-body ms-1</v-icon>
                  <v-icon size="16">fas fa-star text-body ms-1</v-icon>
                  <v-icon size="16">fas fa-star text-body ms-1</v-icon>
                  <v-icon size="16" v-if="card.rating === 'partial'"
                    >fas fa-star-half-alt text-body ms-1</v-icon
                  >
                  <v-icon size="16" v-if="card.rating === 'full'"
                    >fas fa-star text-body ms-1</v-icon
                  >
                </div>
              </div>
              <hr class="horizontal dark my-4" />
              <div class="d-flex">
                <p class="mb-0 font-weight-light text-body">Members:</p>
                <span class="avatar-group d-flex ms-auto">
                  <v-tooltip
                    bottom
                    color="#212529"
                    v-for="avatar in card.avatars"
                    :key="avatar.name"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar
                        v-bind="attrs"
                        v-on="on"
                        size="24"
                        class="border border-white ms-n3"
                      >
                        <img :src="avatar.image" alt="Avatar" />
                      </v-avatar>
                    </template>
                    <span>{{ avatar.name }}</span>
                  </v-tooltip>
                </span>
              </div>
            </div>
          </v-card>

          <v-card class="mb-6" v-for="(card, i) in brands" :key="i" dark>
            <div class="px-4 py-4">
              <div class="d-flex">
                <v-avatar>
                  <v-img :src="card.img"></v-img>
                </v-avatar>
                <div class="ms-2 my-auto">
                  <h6 class="mb-0 text-h6 text-warning font-weight-bold">
                    {{ card.title }}
                  </h6>
                  <p class="text-xs mb-0 text-body">{{ card.hour }}</p>
                </div>
              </div>
              <p class="text-body font-weight-light mt-3">
                {{ card.description }}
              </p>
              <div class="d-flex">
                <p class="mb-0 text-body">
                  <b>Meeting ID</b>:
                  <span class="font-weight-light">{{ card.id }}</span>
                </p>
              </div>
              <hr class="horizontal dark my-4" />
              <div class="d-flex">
                <v-btn
                  :elevation="0"
                  color="#cb0c9f"
                  class="
                    font-weight-bolder
                    btn-success
                    bg-gradient-default
                    py-4
                    px-4
                  "
                  small
                >
                  Join
                </v-btn>
                <span class="avatar-group d-flex ms-auto">
                  <v-tooltip
                    bottom
                    color="#212529"
                    v-for="avatar in card.avatars"
                    :key="avatar.name"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-avatar
                        v-bind="attrs"
                        v-on="on"
                        size="24"
                        class="border border-white ms-n3"
                      >
                        <img :src="avatar.image" alt="Avatar" />
                      </v-avatar>
                    </template>
                    <span>{{ avatar.name }}</span>
                  </v-tooltip>
                </span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import UserService from "@/services/user.service";
import ArticleService from "@/services/article.service";
import Post from "./Post.vue";

export default {
  name: "Article",
  components: {
    Post,
  },
  data: function () {
    return {
      dialog: false,
      stories: [
        {
          image: require("@/assets/img/team-1.jpg"),
          user: "Abbie W",
        },
        {
          image: require("@/assets/img/team-2.jpg"),
          user: "Boris U",
        },
        {
          image: require("@/assets/img/team-3.jpg"),
          user: "Kay R",
        },
        {
          image: require("@/assets/img/team-4.jpg"),
          user: "Tom M",
        },
        {
          image: require("@/assets/img/team-5.jpg"),
          user: "Nicole N",
        },
        {
          image: require("@/assets/img/marie.jpg"),
          user: "Marie P",
        },
        {
          image: require("@/assets/img/bruce-mars.jpg"),
          user: "Bruce M",
        },
        {
          image: require("@/assets/img/ivana-squares.jpg"),
          user: "Sandra A",
        },
        {
          image: require("@/assets/img/kal-visuals-square.jpg"),
          user: "Katty L",
        },
        {
          image: require("@/assets/img/ivana-square.jpg"),
          user: "Emma O",
        },
        {
          image: require("@/assets/img/team-9.jpeg"),
          user: "Tao G",
        },
      ],
      cards: [
        {
          title: "Digital Marketing",
          description:
            "A group of people who collectively are responsible for all of the work necessary to produce working, validated assets.",
          industry: "Martketing Team",
          rating: "partial",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
          ],
        },
        {
          title: "Design",
          description:
            "Because it's about motivating the doers. Because I’m here to follow my dreams and inspire other people to follow their dreams, too.",
          industry: "Design Team",
          rating: "full",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
          ],
        },
      ],
      brands: [
        {
          img: require("@/assets/img/small-logos/logo-slack.svg"),
          title: "Slack Meet",
          hour: "11:00 AM",
          id: "902-128-281",
          description: "You have an upcoming meet for Marketing Planning",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
          ],
        },
        {
          img: require("@/assets/img/small-logos/logo-invision.svg"),
          title: "Invision",
          hour: "4:50 PM",
          id: "111-968-981",
          description:
            "You have an upcoming video call for Soft Design at 5:00 PM.",
          avatars: [
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
          ],
        },
      ],
      userProfile: [],
      userRoles: [],
      userGroups: [],
      post: {},
    };
  },
  methods: {
    savePost() {
      ArticleService.addPost(this.post).then(
        (response) => {
          var author = {};
          author.firstName = response.firstName;
          author.lastName = response.lastName;
          author.photo = response.photo;
          this.post.author = author;
          this.posts.push(this.post);
          this.dialog = false;
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
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        console.log(this.userProfile);
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getRoles().then(
      (response) => {
        this.userRoles = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getGroups().then(
      (response) => {
        this.userGroups = response.data;
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
