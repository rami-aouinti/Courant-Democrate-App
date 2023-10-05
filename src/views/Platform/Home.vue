<template>
  <div>
    <v-container fluid class="px-12 py-12">

      <v-row class="px-6 ">
          <ProgressProfile></ProgressProfile>
      </v-row> 

      <v-row >
        <div class="align-center ms-0 px-10 py-10">
          <h2 v-if="userProfile.firstName">
            {{$t("wlcProfil")}} {{ userProfile.firstName + " " + userProfile.lastName }}
          </h2>
          <h5 class="">
            {{$t("wlcProfilDesc1")}}<br>
            {{$t("wlcProfilDesc2")}}
          </h5>
        </div>
      </v-row>
      
      <v-row class="px-6">
        <v-card class="mb-6 card-shadow bg-gradient-light border-radius-xl px-10 py-6 elevation-20">
          <v-row class="mb-6 mt-0">

            <h2 class="mb-5" >
              {{$t("bureauNationaux")}} 
            </h2>

            <v-col
              v-for="(item, i) in bureauNationaux"
              :key="item.title + i"
              lg="4"
              class="pt-0 mb-lg-0 mb-10"
            >
              <v-card class="card border-radius-xl py-5 text-center">
                <a :href="item.path" class="noDeco">
                  <h5 class="font-weight-normal text-warning text-h5 mt-2 mb-2 px-4">
                      {{ $t(item.title) }}
                    </h5>
                </a>
                
                <hr class="horizontal dark my-6 hard" />

                <div class="d-flex text-body mx-2 px-4">
                  <p class="text-md my-auto font-weight-light ">
                    <v-icon class="material-icons-round" size="20"> people </v-icon>
                    {{ item.membre }}  {{$t("membre")}} 
                  </p>
                </div>
                

              </v-card>

            </v-col>

          </v-row>
        </v-card>

        <v-card class="mb-6 card-shadow bg-gradient-light border-radius-xl px-10 py-6 elevation-20">
          <v-row class="mb-6 mt-0">

            <h2 class="mb-5" >
              {{$t("bureauRegionaux")}} 
            </h2>

            <v-col
              v-for="(item, i) in bureauRegionaux"
              :key="item.title + i"
              lg="4"
              class="pt-0 mb-lg-0 mb-10"
            >
              <v-card class="card border-radius-xl py-5 text-center">
                <a :href="item.path" class="noDeco">
                  <h5 class="font-weight-normal text-warning text-h5 mt-2 mb-2 px-4">
                      {{ $t(item.title) }}
                    </h5>
                </a>
                
                <hr class="horizontal dark my-6 hard" />

                <div class="d-flex text-body mx-2 px-4">
                  <p class="text-md my-auto font-weight-light ">
                    <v-icon class="material-icons-round" size="20"> people </v-icon>
                    {{ item.membre }}  {{$t("membre")}} 
                  </p>
                </div>
                

              </v-card>

            </v-col>
            
          </v-row>
        </v-card>
      </v-row>

      
    </v-container>
  </div>
</template>

<script>
/*import SalesCountry from "./Widgets/SalesCountry.vue";
import CardWebsiteViews from "./Widgets/CardWebsiteViews.vue";
import CardDailySales from "./Widgets/CardDailySales.vue";
import CardCompletedTasks from "./Widgets/CardCompletedTasks.vue";*/
import ProgressProfile from "@/views/Platform/Widgets/ProgressProfile.vue";
import UserService from "@/services/user.service";

export default {
  name: "Dashboard",
  components: {
    /*SalesCountry,
    CardWebsiteViews,
    CardDailySales,
    CardCompletedTasks,*/
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
      bureauNationaux: [
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauPolitique",
          membre: "20",
          path: "/bureau/politics",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauExecutive",
          membre: "11",
          path: "/bureau/executives",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "ConseilNational",
          membre: "220",
          path: "/conseil/national",
        }
      ],
      bureauRegionaux: [
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauRegional",
          membre: "7",
          path: "/bureau/regionals",
        },
        {
          image: require("@/assets/img/courant.png"),
          title: "BureauLocal",
          membre: "7",
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


<!--<v-row class="mb-12">
          <v-col md="12">
            <sales-country></sales-country>
          </v-col>
        </v-row>-
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
        </v-row>-->