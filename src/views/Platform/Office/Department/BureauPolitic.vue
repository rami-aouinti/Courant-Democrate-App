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
            <v-col md="4" cols="8">
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
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberParticipants") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      145
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="4" cols="8">
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
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberEvents") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      99
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="4" cols="8">
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
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberMeetings") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      56
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-6 mb-5">
        <v-row>
          <v-col lg="12">
            <v-tabs class="text-left rounded elevation-10" v-model="tabs" dark>
              <v-tabs-slider></v-tabs-slider>

              <v-tab :ripple="false" href="#tab-1">
                <span class="ms-1 text-warning">{{ $t("Dashboard") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-2">
                <span class="ms-1 text-warning">{{ $t("Members") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-3">
                <span class="ms-1 text-warning">{{ $t("Events") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-4">
                <span class="ms-1 text-warning">{{ $t("Statements") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-5">
                <span class="ms-1 text-warning">{{ $t("Meetings") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-6">
                <span class="ms-1 text-warning">{{ $t("Rapports") }}</span>
              </v-tab>

              <v-tab :ripple="false" href="#tab-7">
                <span class="ms-1 text-warning">{{
                  $t("FinancialRapports")
                }}</span>
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>

        <v-col cols="11">
          <v-tabs-items v-model="tabs" dark>
            <v-tab-item id="tab-1">
              <v-row>
                <v-col cols="7">
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
                                  <v-icon
                                    class="material-icons-round"
                                    size="24"
                                  >
                                    add
                                  </v-icon>
                                  {{ $t("AddPost") }}
                                </v-btn>
                              </template>
                              <v-card>
                                <v-card-title>
                                  <span class="text-h5 text-warning">{{
                                    $t("NewPost")
                                  }}</span>
                                </v-card-title>
                                <v-card-text>
                                  <v-container>
                                    <v-row>
                                      <v-col cols="12">
                                        <v-text-field
                                          :label="$t('Title')"
                                          required
                                          v-model="post.title"
                                        ></v-text-field>
                                      </v-col>
                                      <v-col cols="12">
                                        <v-text-field
                                          :label="$t('Description')"
                                          hint="example of helper text only on focus"
                                          v-model="post.content"
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>
                                  </v-container>
                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="orange"
                                    text
                                    @click="dialog = false"
                                  >
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
                <v-col cols="5">
                  <v-card class="card-shadow border-radius-xl" dark>
                    <div class="px-4 py-4">
                      <full-calendar
                        :options="calendarOptions"
                        ref="fullCalendar"
                      ></full-calendar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item id="tab-2">
              <Members></Members>
            </v-tab-item>
            <v-tab-item id="tab-3">
              <Event></Event>
            </v-tab-item>
            <v-tab-item id="tab-4">
              <Statement></Statement>
            </v-tab-item>
            <v-tab-item id="tab-5">
              <Event></Event>
            </v-tab-item>
            <v-tab-item id="tab-6">
              <Rapport :officeId="this.officeId"></Rapport>
            </v-tab-item>
            <v-tab-item id="tab-7">
              <FinancialRapport></FinancialRapport>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Post from "@/views/Platform/Article/Post.vue";
import UserService from "@/services/user.service";
import ArticleService from "@/services/article.service";
import Members from "@/views/Platform/Office/Department/components/Member.vue";
import Rapport from "@/views/Platform/Office/Department/components/Rapport.vue";
import FinancialRapport from "@/views/Platform/Office/Department/components/FinanciealRapport.vue";
import Event from "@/views/Platform/Office/Department/components/Event.vue";
import Statement from "@/views/Platform/Office/Department/components/Statement.vue";
import PoliticOfficeService from "@/services/politicOffice.service";

export default {
  name: "BureauPolitique",
  components: {
    Post,
    Members,
    Event,
    FinancialRapport,
    Rapport,
    Statement,
    FullCalendar,
  },
  data() {
    return {
      tabs: null,
      editedIndex: -1,
      editedItem: {
        name: "",
        start: "",
        end: "",
        active: "",
        type: "",
      },
      defaultItem: {
        name: "",
        start: "",
        end: "",
        active: "",
        type: "",
      },
      slider: "",
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        contentHeight: "auto",
        initialView: "dayGridMonth",
        selectable: true,
        initialDate: new Date(),
        locale: "ar-tn",
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
      officeId: null,
    };
  },
  methods: {
    savePost() {
      this.post.summary = "test";
      ArticleService.addPost(this.post).then(
        (response) => {
          var author = {};
          author.firstName = response.firstName;
          author.lastName = response.lastName;
          author.photo = response.photo;
          this.post.author = author;
          console.log(this.post);
          //this.posts.push(this.post);
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
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "NewOffice" : "EditOffice";
    },
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
    PoliticOfficeService.getPoliticOffice().then(
      (response) => {
        this.officeId = response.data.id;
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
