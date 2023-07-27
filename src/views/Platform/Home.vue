<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-card
        class="
          mb-6
          card-shadow
          bg-gradient-default
          border-radius-xl
          px-10
          py-10
          elevation-20
        "
      >
        <v-row class="mb-12">
          <v-col md="1">
            <v-avatar width="74" height="74" class="shadow border-radius-lg">
              <span v-if="userProfile.photo === null" class="text-h5">{{
                getInitials(userProfile.firstName + " " + userProfile.lastName)
              }}</span>
              <img
                v-else
                :src="userProfile.photo"
                alt="Avatar"
                class="border-radius-lg"
              />
            </v-avatar>
          </v-col>
          <v-col md="11">
            <ProgressProfile></ProgressProfile>
          </v-col>
        </v-row>
        <v-row class="mb-12">
          <v-col md="12">
            <sales-country></sales-country>
          </v-col>
        </v-row>
        <v-row class="mb-6 mt-15">
          <v-col lg="4" class="pt-0 mb-lg-0 mb-10">
            <card-website-views></card-website-views>
          </v-col>
          <v-col lg="4" class="pt-0 mb-lg-0 mb-10">
            <card-daily-sales></card-daily-sales>
          </v-col>
          <v-col lg="4" class="pt-0 mb-lg-0">
            <card-completed-tasks></card-completed-tasks>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="12">
            <v-row>
              <v-col sm="3" cols="12">
                <v-card class="mb-6 card-shadow border-radius-xl py-4" dark>
                  <v-row no-gutters class="px-4">
                    <v-col sm="4">
                      <v-avatar
                        color="bg-gradient-default border-radius-xl mt-n8"
                        class="shadow-dark"
                        height="64"
                        width="64"
                      >
                        <v-icon
                          class="material-icons-round text-white"
                          size="24"
                          >weekend</v-icon
                        >
                      </v-avatar>
                    </v-col>
                    <v-col sm="8" class="text-end">
                      <p
                        class="
                          text-sm
                          mb-0
                          text-capitalize text-body
                          font-weight-light
                        "
                      >
                        Bookings
                      </p>
                      <h4 class="text-h4 text-warning font-weight-bolder mb-0">
                        281
                      </h4>
                    </v-col>
                  </v-row>
                  <hr class="dark horizontal mt-3 mb-4" />
                  <v-row class="px-4">
                    <v-col cols="12">
                      <p class="mb-0 text-body">
                        <span class="text-warning text-sm font-weight-bolder"
                          >+55%</span
                        >
                        <span class="font-weight-light ms-1"
                          >than last week</span
                        >
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col sm="3" cols="12">
                <v-card class="mb-6 card-shadow border-radius-xl py-4" dark>
                  <v-row no-gutters class="px-4">
                    <v-col sm="4">
                      <v-avatar
                        color="bg-gradient-warning border-radius-xl mt-n8"
                        class="shadow-warning"
                        height="64"
                        width="64"
                      >
                        <v-icon
                          class="material-icons-round text-white"
                          size="24"
                          >leaderboard</v-icon
                        >
                      </v-avatar>
                    </v-col>
                    <v-col sm="8" class="text-end">
                      <p
                        class="
                          text-sm
                          mb-0
                          text-capitalize text-body
                          font-weight-light
                        "
                      >
                        Today's Users
                      </p>
                      <h4 class="text-h4 text-warning font-weight-bolder mb-0">
                        2,300
                      </h4>
                    </v-col>
                  </v-row>
                  <hr class="dark horizontal mt-3 mb-4" />
                  <v-row class="px-4">
                    <v-col cols="12">
                      <p class="mb-0 text-body">
                        <span class="text-warning text-sm font-weight-bolder"
                          >+3%</span
                        >
                        <span class="font-weight-light ms-1"
                          >than last month</span
                        >
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col sm="3" cols="12">
                <v-card class="mb-6 card-shadow border-radius-xl py-4" dark>
                  <v-row no-gutters class="px-4">
                    <v-col sm="4">
                      <v-avatar
                        color="bg-gradient-secondary border-radius-xl mt-n8"
                        class="shadow-secondary"
                        height="64"
                        width="64"
                      >
                        <v-icon
                          class="material-icons-round text-white"
                          size="24"
                          >store</v-icon
                        >
                      </v-avatar>
                    </v-col>
                    <v-col sm="8" class="text-end">
                      <p
                        class="
                          text-sm
                          mb-0
                          text-capitalize text-body
                          font-weight-light
                        "
                      >
                        Revenue
                      </p>
                      <h4 class="text-h4 text-warning font-weight-bolder mb-0">
                        34k
                      </h4>
                    </v-col>
                  </v-row>
                  <hr class="dark horizontal mt-3 mb-4" />
                  <v-row class="px-4">
                    <v-col cols="12">
                      <p class="mb-0 text-body">
                        <span class="text-warning text-sm font-weight-bolder"
                          >+1%</span
                        >
                        <span class="font-weight-light ms-1"
                          >than yesterday</span
                        >
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <v-col sm="3" cols="12">
                <v-card class="mb-6 card-shadow border-radius-xl py-4" dark>
                  <v-row no-gutters class="px-4">
                    <v-col sm="4">
                      <v-avatar
                        color="bg-gradient-light border-radius-xl mt-n8"
                        class="shadow-light"
                        height="64"
                        width="64"
                      >
                        <v-icon
                          class="material-icons-round text-white"
                          size="24"
                          >person_add</v-icon
                        >
                      </v-avatar>
                    </v-col>
                    <v-col sm="8" class="text-end">
                      <p
                        class="
                          text-sm
                          mb-0
                          text-capitalize text-body
                          font-weight-light
                        "
                      >
                        Followers
                      </p>
                      <h4 class="text-h4 text-warning font-weight-bolder mb-0">
                        +91
                      </h4>
                    </v-col>
                  </v-row>
                  <hr class="dark horizontal mt-3 mb-4" />
                  <v-row class="px-4">
                    <v-col cols="12">
                      <p class="mb-0 text-body">
                        <span class="font-weight-light ms-1">Just updated</span>
                      </p>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mb-6 mt-10">
          <v-col
            v-for="(item, i) in imageCards"
            :key="item.title + i"
            lg="4"
            class="pt-0 mb-lg-0 mb-10"
          >
            <v-card
              class="card card-shadow border-radius-xl py-5 text-center"
              data-animation="true"
              dark
            >
              <div class="mt-n11 mx-4 card-header position-relative z-index-2">
                <div class="d-block blur-shadow-image">
                  <img
                    :src="item.image"
                    class="img-fluid shadow border-radius-lg"
                    :alt="item.image"
                  />
                </div>
                <div
                  class="colored-shadow"
                  v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"
                ></div>
              </div>
              <div class="d-flex mx-auto mt-n8">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      class="material-icons-round text-primary ms-auto px-5"
                      size="18"
                    >
                      refresh
                    </v-icon>
                  </template>
                  <span>Refresh</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      class="material-icons-round text-info me-auto px-5"
                      size="18"
                    >
                      edit
                    </v-icon>
                  </template>
                  <span>Edit</span>
                </v-tooltip>
              </div>
              <v-btn class="bg-transparent" :to="item.path">
                <h5
                  class="font-weight-normal text-warning text-h5 mt-7 mb-2 px-4"
                >
                  {{ $t(item.title) }}
                </h5>
              </v-btn>

              <p class="mb-0 text-body font-weight-light px-5">
                {{ item.text }}
              </p>
              <hr class="horizontal dark my-6" />
              <div class="d-flex text-body mx-2 px-4">
                <p class="mb-0 font-weight-normal text-body">
                  ${{ item.price }}/night
                </p>
                <i
                  class="
                    material-icons-round
                    position-relative
                    ms-auto
                    text-lg
                    me-1
                    my-auto
                  "
                  >place</i
                >
                <p class="text-sm my-auto font-weight-light">
                  {{ item.location }}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SalesCountry from "./Widgets/SalesCountry.vue";
import CardWebsiteViews from "./Widgets/CardWebsiteViews.vue";
import CardDailySales from "./Widgets/CardDailySales.vue";
import CardCompletedTasks from "./Widgets/CardCompletedTasks.vue";
import ProgressProfile from "@/views/Platform/Widgets/ProgressProfile.vue";
import UserService from "@/services/user.service";

export default {
  name: "Dashboard",
  components: {
    SalesCountry,
    CardWebsiteViews,
    CardDailySales,
    CardCompletedTasks,
    ProgressProfile,
  },
  methods: {
    getInitials(string) {
      var names = string.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
  },
  data() {
    return {
      imageCards: [
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauPolitique",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "899",
          location: "Barcelona, Spain",
          path: "/bureau/politics",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauExecutive",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "1.119",
          location: "London, UK",
          path: "/bureau/executives",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "ConseilNational",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "459",
          location: "Milan, Italy",
          path: "/conseil/national",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauRegional",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "459",
          location: "Milan, Italy",
          path: "/bureau/regionals",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauLocal",
          text: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to 'Naviglio' where you can enjoy the main night life in Barcelona.",
          price: "459",
          location: "Milan, Italy",
          path: "/bureau/locales",
        },
      ],
      userProfile: [],
    };
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
  },
};
</script>
