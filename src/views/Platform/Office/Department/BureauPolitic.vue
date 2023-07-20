<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col lg="12" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card class="bg-gradient-default border-radius-xl mb-3">
                <div class="px-4 py-4">
                  <v-row class="row">
                    <v-col cols="8" class="my-auto">
                      <div class="numbers">
                        <p
                          class="
                            text-secondary
                            mb-0
                            text-capitalize
                            font-weight-bold
                            opacity-50
                          "
                        >
                          {{ $t("Structure") }}
                        </p>
                        <h5
                          class="text-warning text-h1 font-weight-bolder mb-0"
                        >
                          {{ $t("BureauPolitique") }}
                        </h5>
                      </div>
                    </v-col>
                    <v-col cols="4" class="text-end">
                      <v-img
                        src="@/assets/img/courant.png"
                        class="w-50 ms-auto rounded-5"
                      ></v-img>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col md="3" cols="12">
              <v-card
                class="
                  card-shadow
                  bg-warning
                  border-radius-xl
                  px-4
                  py-4
                  mb-lg-0 mb-4
                "
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        drive_eta
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Today's Trip
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      145 Km
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="3" cols="12">
              <v-card class="card-shadow bg-warning border-radius-xl px-4 py-4">
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        battery_full
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Battery Health
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      99 %
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="3" cols="12">
              <v-card
                class="
                  card-shadow
                  bg-warning
                  border-radius-xl
                  px-4
                  py-4
                  mb-lg-0 mb-4
                "
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        speed
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Average Speed
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      56 Km/h
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="3" cols="12">
              <v-card class="card-shadow bg-warning border-radius-xl px-4 py-4">
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        volume_up
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <p class="text-white text-sm mb-0 text-body">
                      Music Volume
                    </p>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      15/100
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-6 mb-5">
        <v-col lg="6" cols="12">
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
                          Was machst du gerade
                          {{ userProfile.username }}
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5 text-warning">New Post</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  label="Title"
                                  required
                                  v-model="post.title"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Description"
                                  hint="example of helper text only on focus"
                                  v-model="post.content"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Description"
                                  hint="example of helper text only on focus"
                                  v-model="post.summary"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-select
                                  :items="['0-17', '18-29', '30-54', '54+']"
                                  label="Age*"
                                  required
                                ></v-select>
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-autocomplete
                                  :items="[
                                    'Skiing',
                                    'Ice hockey',
                                    'Soccer',
                                    'Basketball',
                                    'Hockey',
                                    'Reading',
                                    'Writing',
                                    'Coding',
                                    'Basejump',
                                  ]"
                                  label="Interests"
                                  multiple
                                ></v-autocomplete>
                              </v-col>
                            </v-row>
                          </v-container>
                          <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="orange" text @click="dialog = false">
                            Close
                          </v-btn>
                          <v-btn color="orange" text @click="savePost">
                            Save
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
        <v-col lg="6">
          <v-card class="card-shadow bg-gradient-default border-radius-xl">
            <v-img
              src="@/assets/img/shapes/waves-white.svg"
              class="position-absolute opacity-2 start-0 top-0 w-100 h-100"
            ></v-img>

            <div class="px-8 pt-6">
              <v-row class="position-relative">
                <v-col md="12">
                  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
                    <h6 class="mb-0 text-h6 text-typo font-weight-bold">
                      {{ $t("Members") }}
                    </h6>
                    <v-card-text class="pt-3 pb-0 px-0">
                      <v-list class="py-0">
                        <v-list-item
                          v-for="(chat, index) in countries"
                          :key="chat.title"
                          class="pt-2 pb-1 px-1"
                          :class="{
                            'border-bottom': index != countries.length - 1,
                          }"
                        >
                          <v-img
                            :alt="`${chat.title} avatar`"
                            :src="chat.avatar"
                            max-width="20px"
                            class="me-6"
                          ></v-img>

                          <v-list-item-content>
                            <span class="text-xs font-weight-bold text-body">
                              Name:
                            </span>
                            <v-list-item-title
                              v-text="chat.country"
                              class="text-typo text-sm mb-0"
                            ></v-list-item-title>
                          </v-list-item-content>

                          <v-list-item-content class="text-center">
                            <span class="text-xs font-weight-bold text-body">
                              Position:
                            </span>
                            <v-list-item-title
                              v-text="chat.sales"
                              class="text-typo text-sm mb-0"
                            ></v-list-item-title>
                          </v-list-item-content>

                          <v-list-item-content class="text-center">
                            <span class="text-xs font-weight-bold text-body">
                              Since:
                            </span>
                            <v-list-item-title
                              v-text="chat.bounce"
                              class="text-typo text-sm mb-0"
                            ></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-card-text>
                  </v-card>
                  <v-divider></v-divider>
                  <v-card class="card-shadow border-radius-xl" dark>
                    <div class="px-4 py-4">
                      <full-calendar
                        :options="calendarOptions"
                        ref="fullCalendar"
                      ></full-calendar>
                    </div>
                  </v-card>
                  <v-divider></v-divider>
                  <v-card class="bg-gradient-default border-radius-xl" dark>
                    <div class="px-6 py-6">
                      <v-row>
                        <v-col lg="4" md="6">
                          <v-form
                            class="d-inline-block"
                            id="navbar-search-main"
                          >
                            <v-text-field
                              rounded-sm
                              hide-details
                              outlined
                              background-color="rgba(255,255,255,0)"
                              color="rgb(255,255,255)"
                              lighter
                              placeholder="Search anything..."
                              class="
                                font-size-input
                                placeholder-lighter
                                input-alternative input-icon
                                text-white
                              "
                            >
                              <template slot="prepend-inner">
                                <v-icon
                                  color="#fff"
                                  class="mt-n1 text-lg material-icons-round"
                                  >search</v-icon
                                >
                              </template>
                            </v-text-field>
                          </v-form>
                        </v-col>
                        <v-col md="6" class="my-auto ms-auto">
                          <div class="d-flex align-center">
                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#fff"
                                  class="ms-auto text-lg material-icons-round"
                                  >headphones</v-icon
                                >
                              </template>
                              <span>Headphones connected</span>
                            </v-tooltip>

                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#fff"
                                  class="text-lg ms-4 material-icons-round"
                                  >play_arrow</v-icon
                                >
                              </template>
                              <span>Music is playing</span>
                            </v-tooltip>

                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#fff"
                                  class="text-lg ms-4 material-icons-round"
                                  >power_settings_new</v-icon
                                >
                              </template>
                              <span>Start radio</span>
                            </v-tooltip>

                            <v-tooltip top>
                              <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                  v-bind="attrs"
                                  v-on="on"
                                  color="#fff"
                                  class="text-lg ms-4 material-icons-round"
                                  >watch</v-icon
                                >
                              </template>
                              <span>Time tracker</span>
                            </v-tooltip>

                            <h4
                              class="text-white text-h4 font-weight-bold ms-6"
                            >
                              10:45
                            </h4>
                          </div>
                        </v-col>
                      </v-row>
                      <hr class="horizontal light mt-4 mb-4" />
                      <v-row>
                        <v-col lg="4" md="6">
                          <div class="d-flex align-center position-relative">
                            <h3
                              class="text-h3 font-weight-bolder text-white mb-1"
                            >
                              11:13
                            </h3>
                            <p class="text-white opacity-8 mb-1 ms-3">
                              Estimated arrival time
                            </p>
                            <hr
                              class="vertical d-md-block d-none light mt-0 mb-4"
                            />
                          </div>
                        </v-col>
                        <v-col lg="4" md="6">
                          <div class="d-flex align-center position-relative">
                            <h3
                              class="
                                text-h3
                                font-weight-bolder
                                text-white
                                mb-1
                                ms-auto
                              "
                            >
                              2.4<small class="align-top text-sm">Km</small>
                            </h3>
                            <p class="text-white opacity-8 mb-1 ms-3 me-auto">
                              Turn right in 2.4 miles
                            </p>
                            <hr class="vertical d-md-block d-none light mt-0" />
                          </div>
                        </v-col>
                        <v-col lg="4" md="6">
                          <div class="d-flex align-center position-relative">
                            <h3
                              class="
                                text-h3
                                font-weight-bolder
                                text-white
                                mb-1
                                ms-auto
                              "
                            >
                              6.3<small class="align-top text-sm">Km</small>
                            </h3>
                            <p class="text-white opacity-8 mb-1 ms-3 me-auto">
                              Distance to Creative Tim
                            </p>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                    <div>
                      <div style="height: 470px; width: 100%">
                        <l-map
                          v-if="showMap"
                          :zoom="zoom"
                          :center="center"
                          :options="mapOptions"
                          @update:center="centerUpdate"
                          @update:zoom="zoomUpdate"
                        >
                          <l-tile-layer :url="url" :attribution="attribution" />
                        </l-map>
                      </div>
                    </div>
                    <div class="px-6 py-6">
                      <v-row>
                        <v-col lg="4" md="6">
                          <div class="d-flex align-center">
                            <div class="position-relative">
                              <v-avatar size="58">
                                <img
                                  src="@/assets/img/drake.jpeg"
                                  alt="Curved"
                                />
                              </v-avatar>
                              <img
                                class="
                                  position-absolute
                                  w-60
                                  end-0
                                  bottom-0
                                  me-n4
                                  mb-n2
                                "
                                src="@/assets/img/small-logos/logo-spotify.svg"
                                alt="spotify logo"
                              />
                            </div>
                            <div class="px-3">
                              <p
                                class="text-white text-sm font-weight-bold mb-0"
                              >
                                Scorpion (feat Quavo)
                              </p>
                              <p class="text-white text-xs mb-2 opacity-8">
                                Drake - Hip-Hop
                              </p>
                            </div>
                          </div>
                        </v-col>
                        <v-col lg="4" md="6">
                          <div class="d-flex align-center">
                            <v-btn
                              icon
                              outlined
                              rounded
                              color="#fff"
                              width="52px"
                              height="52px"
                              class="ms-auto"
                            >
                              <v-icon
                                size="19"
                                class="rotate-180 material-icons-round"
                                >skip_previous</v-icon
                              >
                            </v-btn>
                            <v-btn
                              icon
                              outlined
                              rounded
                              color="#fff"
                              width="52px"
                              height="52px"
                              class="ms-6"
                            >
                              <v-icon size="19" class="material-icons-round"
                                >pause</v-icon
                              >
                            </v-btn>
                            <v-btn
                              icon
                              outlined
                              rounded
                              color="#fff"
                              width="52px"
                              height="52px"
                              class="ms-6 me-auto"
                            >
                              <v-icon size="19" class="material-icons-round"
                                >skip_next</v-icon
                              >
                            </v-btn>
                          </div>
                        </v-col>
                        <v-col lg="2" md="6" cols="8">
                          <p class="text-white mb-0">Volume</p>
                          <v-slider
                            v-model="slider"
                            color="bg-primary"
                            track-color="#e9ecef"
                            class="progress-shadow mb-0"
                            thumb-label
                            max="100"
                          ></v-slider>
                        </v-col>
                        <v-col lg="1" md="6" cols="4" class="ms-auto">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="#fff"
                                class="ms-auto mt-4 material-icons-round"
                                >format_list_bulleted</v-icon
                              >
                            </template>
                            <span>Hide menu</span>
                          </v-tooltip>

                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="#fff"
                                class="mt-4 ms-4 material-icons-round"
                                >mode_comment</v-icon
                              >
                            </template>
                            <span>Track messages</span>
                          </v-tooltip>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Post from "@/views/Platform/Article/Post.vue";
import UserService from "@/services/user.service";
import ArticleService from "@/services/article.service";
export default {
  name: "Automotive",
  components: {
    Post,
    LMap,
    LTileLayer,
    FullCalendar,
  },
  data() {
    return {
      slider: "",
      zoom: 11,
      center: latLng(38.89, -77.03),
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      countries: [
        {
          avatar: require("@/assets/img/team-1.jpg"),
          country: "Jon Doe 1",
          sales: "President",
          bounce: "April 2023",
        },
        {
          avatar: require("@/assets/img/team-2.jpg"),
          country: "Jon Doe 1",
          sales: "Vice President",
          bounce: "April 2023",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          country: "Jon Doe 3",
          sales: "Treasurer",
          bounce: "April 2023",
        },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        contentHeight: "auto",
        initialView: "dayGridMonth",
        selectable: true,
        initialDate: "2021-11-08",
        editable: true,
        headerToolbar: {
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        },
        events: [
          {
            title: "Call with Dave",
            start: "2021-11-18",
            end: "2021-11-18",
            className: "bg-gradient-danger",
          },

          {
            title: "Lunch meeting",
            start: "2021-11-21",
            end: "2021-11-22",
            className: "bg-gradient-warning",
          },

          {
            title: "All day conference",
            start: "2021-11-29",
            end: "2021-11-29",
            className: "bg-gradient-success",
          },

          {
            title: "Meeting with Mary",
            start: "2021-12-01",
            end: "2021-12-01",
            className: "bg-gradient-info",
          },

          {
            title: "Winter Hackaton",
            start: "2021-12-03",
            end: "2021-12-03",
            className: "bg-gradient-danger",
          },

          {
            title: "Digital event",
            start: "2021-12-07",
            end: "2021-12-09",
            className: "bg-gradient-warning",
          },

          {
            title: "Marketing event",
            start: "2021-12-10",
            end: "2021-12-10",
            className: "bg-gradient-primary",
          },

          {
            title: "Dinner with Family",
            start: "2021-12-19",
            end: "2021-12-19",
            className: "bg-gradient-danger",
          },

          {
            title: "Black Friday",
            start: "2021-12-23",
            end: "2021-12-23",
            className: "bg-gradient-info",
          },

          {
            title: "Cyber Week",
            start: "2021-12-02",
            end: "2021-12-02",
            className: "bg-gradient-warning",
          },
        ],
      },
      dialog: false,
      userProfile: [],
      userRoles: [],
      userGroups: [],
      post: {},
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    savePost() {
      ArticleService.addPost(this.post).then(
        (response) => {
          var author = {};
          author.firstName = response.firstName;
          author.lastName = response.lastName;
          author.photo = response.photo;
          this.post.author = author;
          console.log(this.post);
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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
