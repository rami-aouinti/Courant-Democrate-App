<style scoped>
.v-menu__content {
  margin-top: 40px;
}

.chooseLng .v-text-field__details{
  display: none;
}

.theme--light.v-list {
  background: #181414;
  color: rgba(0, 0, 0, 0.87);
}
</style>
<template>
  <v-app-bar
    :color="background"
    height="auto"
    class="toolbar-content-padding-y-none position-sticky blur shadow-blur top-0 z-index-sticky py-2"
    flat
  >
    <v-row class="mb-0 mt-0 ml-0 mr-0">
      
      <v-col cols="12" sm="9" class="d-flex align-center">
        <div v-if="userProfile.firstName">


          <div
          class="drawer-toggler pl-5 ms-0 cursor-pointer"
          :class="{ active: togglerActive }"
          @click="minifyDrawer"
          v-if="!$vuetify.breakpoint.mobile"
          >
            <div class="drawer-toggler-inner">
              <i class="material-icons-round text-warning opacity-10">
                menu_open
              </i>
            </div>
          </div>


          <!--<h3 class="text-h3 font-weight-bolder text-warning mb-0">
            welcome {{ userProfile.firstName + " " + userProfile.lastName }}
          </h3>-->
          

          <!--<v-breadcrumbs class="pb-0 pt-1 px-0">
            <v-breadcrumbs-item
              to="/#"
              active-class="active-breadcrumb"
              class="opacity-5 text-dark"
            >
              <svg
                width="12px"
                height="12px"
                class="mb-1"
                color="orange"
                viewBox="0 0 45 40"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>home</title>
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    transform="translate(-1716.000000, -439.000000)"
                    fill="#252f40"
                    fill-rule="nonzero"
                  >
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(0.000000, 148.000000)">
                        <path
                          d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z"
                        ></path>
                        <path
                          d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>

              </svg>
            </v-breadcrumbs-item>

            <li class="v-breadcrumbs__divider opacity-5 px-2 text-warning">
              /
            </li>

            <v-breadcrumbs-item class="opacity-5 text-warning">
              {{ $t($route.meta.groupName) }}
            </v-breadcrumbs-item>

            <li class="v-breadcrumbs__divider opacity-5 px-2 text-muted">/</li>
            <v-breadcrumbs-item
              active-class="active-breadcrumb"
              class="no-default-hover text-warning"
            >
              <template v-if="$route.name === 'Dashboard'">Default</template>
              <template v-else>{{ $t($route.name) }}</template>
            </v-breadcrumbs-item>
          </v-breadcrumbs>-->

          <!--<h6 class="text-h6 font-weight-bolder text-warning mb-0">
            {{ $t($route.name) }}
          </h6>-->
        </div>
        
      </v-col>

      <v-col cols="12" sm="3" class="d-flex align-center"
        :class="$vuetify.rtl ? 'text-sm-left' : 'text-sm-right'"
      >
        <!--<v-form
          v-if="hasBg"
          @submit.prevent="submit"
          class="navbar-search navbar-search-light d-inline-block ms-auto"
          id="navbar-search-main"
        >
          <v-text-field
            rounded-sm
            background-color="transparent"
            color="orange"
            dense
            hide-details
            outlined
            :label="$t('SearchHere')"
            class="input-style font-size-input me-md-3"
          >
          </v-text-field>
        </v-form>-->

        <v-col sm="9" class="px-0 py-0 chooseLng">
          <v-select
            v-model="$i18n.locale"
            :items="locales"
            color="orange"
            item-text="label"
            item-value="val"
            item-icon="icon"
            class="text-capitalize text-warning rounded-sm ms-0"
            dense
            outlined
            dark
          >
            <template v-slot:selection="{ item }">
              <v-img
                :alt="`${item.name} avatar`"
                :src="item.icon"
                max-width="30px"
                class="me-3"
              ></v-img>
              {{item.label}}
            </template>
            
            <template v-slot:item="slotProps">
              <v-row
                @click="changeDirection(slotProps.item.name)"
                class="text-warning"
              >
                <v-img
                  :alt="`${slotProps.item.name} avatar`"
                  :src="slotProps.item.icon"
                  max-width="20px"
                  class="me-6"
                ></v-img>
                
                {{ slotProps.item.label }}
              </v-row>
            </template>
          </v-select>
        </v-col>

        <v-col sm="3" class="px-0 py-0 userLogoTop">
          <v-menu
          transition="slide-y-transition"
          offset-y
          offset-x
          min-width="100"
          max-width="300"
          v-if="currentUser"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                :ripple="false"
                :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
                class="text-body"
                :color="linkColor"
                v-bind="attrs"
                v-on="on"
              >
                <v-avatar size="40" class="border border-warning my-0 ms-0">
                  <span v-if="userProfile.photo === null" class="text-h5">{{
                    getInitials(
                      userProfile.firstName + " " + userProfile.lastName
                    )
                  }}</span>
                  <img v-else :src="userProfile.photo" alt="Brooklyn" />
                </v-avatar>
              </v-btn>
            </template>

            <v-list class="pa-3">
              
              <v-list-item
                v-for="(item, i) in userMenu"
                :key="i"
                class="
                  pa-4
                  list-item-hover-active
                  d-flex
                  align-items-center
                  py-1
                  my-1
                  border-radius-md
                "
                :to="item.path"
              >
                <v-icon class="material-icons-round text-warning" size="20">{{
                  item.icon
                }}</v-icon>

                <v-list-item-content class="pa-0">
                  <v-list-item-title
                    class="text-body-2 ls-0 text-typo font-weight-600 mb-0"
                  >
                    <v-row>
                      <v-col :to="item.path">
                        <h6
                          class="text-sm font-weight-normal ms-2 text-warning"
                          :v-html="$t(item.title)"
                        >
                          {{ $t(item.title) }}
                        </h6>
                      </v-col>
                    </v-row>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                class="
                  pa-4
                  list-item-hover-active
                  d-flex
                  align-items-center
                  py-1
                  my-1
                  border-radius-md
                "
                @click="logout"
              >
                <v-icon class="material-icons-round text-warning" size="20"
                  >logout</v-icon
                >

                <v-list-item-content>
                  <v-list-item-title>
                    <v-row>
                      <v-col>
                        <h6
                          class="text-sm font-weight-normal ms-2 text-warning"
                          :v-html="$t('Logout')"
                        >
                          {{ $t("Logout") }}
                        </h6>
                      </v-col>
                    </v-row>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-menu>
        </v-col>
        <!--<v-menu
          transition="slide-y-transition"
          offset-y
          offset-x
          min-width="300"
          max-width="300"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              :ripple="false"
              :class="{ 'btn-dark-hover': !hasBg, 'btn-hover': hasBg }"
              class="text-body text-warning"
              :color="linkColor"
              v-bind="attrs"
              v-on="on"
              small
            >
              <v-icon class="material-icons-round text-warning" size="20">
                notifications
              </v-icon>
              <v-badge
                color="#f44335"
                content="11"
                offset-x="1"
                offset-y="0"
                class="position-absolute"
                bordered
              >
              </v-badge>
            </v-btn>
          </template>

          <v-list class="pa-3" dark>
            <v-list-item
              v-for="(item, i) in dropdown"
              :key="i"
              class="
                pa-4
                list-item-hover-active
                d-flex
                align-items-center
                py-1
                my-1
                border-radius-md
              "
            >
              <v-icon class="material-icons-round text-warning" size="20">{{
                item.icon
              }}</v-icon>

              <v-list-item-content class="pa-0">
                <v-list-item-title
                  class="text-body-2 ls-0 text-warning font-weight-600 mb-0"
                >
                  <v-row>
                    <v-col>
                      <h6
                        class="text-sm font-weight-normal ms-2 text-warning"
                        :v-html="$t(item.title)"
                      >
                        {{ $t(item.title) }}
                      </h6>
                    </v-col>
                  </v-row>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>-->

        <!--<v-btn
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-600
            text-capitalize text-warning
            drawer-toggler
            py-3
            px-0
            rounded-sm
          "
          :class="{
            'btn-dark-toggler-hover': !hasBg,
            'btn-toggler-hover': hasBg,
            active: togglerActive,
          }"
          v-if="$vuetify.breakpoint.mobile"
          color="orange"
          @click="drawerClose"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
            <i class="drawer-toggler-line text-body"></i>
          </div>
        </v-btn>-->
      </v-col>

    </v-row>
  </v-app-bar>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  name: "app-bar",
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
    toggleActive: Boolean,
    navbarFixed: {
      type: Boolean,
      default: true,
    },
    userProfile: Object,
    userGroups: Object,
    userRoles: Object,
  },
  data() {
    return {
      language: "ar",
      drawer: false,
      togglerActive: false,
      userMenu: [
        {
          icon: "account_circle",
          title: "MyProfile",
          path: "/profile/overview",
        },
        {
          icon: "edit",
          title: "Setting",
          path: "/profile/settings",
        },
      ],
      dropdown: [
        {
          icon: "email",
          title: "Check new messages",
        },
        {
          icon: "podcasts",
          title: "Manage podcast session",
        },
        {
          icon: "shopping_cart",
          title: "Payment successfully completed",
        },
      ],
      /*languages: [
        {
         
          name:"english",
          icon: require("@/assets/img/icons/flags/US.png"),
        },
        {
         
          name:"العربية",
          icon: require("@/assets/img/icons/flags/AU.png"),
        },
        {
          
          name:"français",
          icon: require("@/assets/img/icons/flags/GB.png"),
        },
        {
          
          name:"deutsch",
          icon: require("@/assets/img/icons/flags/DE.png"),
        },
      ],*/
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    locales() {
      return this.$i18n.availableLocales.map((local) => {

        let label="";
        switch (local) {
          case 'ar':
          label="العربية";
          break;
         
          case 'fr':
          label="français";
          break;
          
          case 'en':
          label="english";
          break;

          case 'de':
          label="deutsch";
          break;

          default:
          label="العربية";
        }


        return {
          name: this.$t(local),
          val: local,
          label:label,
          icon: require("@/assets/img/icons/flags/" +
            local.toUpperCase() +
            ".png"),
        };
      });
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
    changeDirection(language) {
      if (language === "ar") {
        this.$vuetify.rtl = true;
      } else {
        this.$vuetify.rtl = false;
      }
      UserService.updateLocale(language).then(
        (response) => {
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
    getInitials(string) {
      var names = string.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
    drawerClose() {
      this.togglerActive = !this.togglerActive;
      this.$emit("drawer-toggle", true);
    },
    minifyDrawer() {
      this.togglerActive = !this.togglerActive;
      this.mini = !this.mini;
      const body = document.getElementsByTagName("body")[0];

      if (body.classList.contains("drawer-mini")) {
        body.classList.remove("drawer-mini");
      } else {
        body.classList.add("drawer-mini");
      }
    },
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
  watch: {
    toggleActive(val) {
      this.togglerActive = val;
    },
  },
};
</script>
<style scoped>
.v-menu__content {
  margin-top: 40px;
}
</style>
