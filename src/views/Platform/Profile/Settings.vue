<template>
  <v-container fluid class="py-6">
    <div
      class="
        min-height-200
        border-radius-xl
        overflow-hidden
        position-relative
        mt-6
        mx-3
      "
      :style="`background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'); background-position: 50%; background-size: cover;`"
    >
      <span class="mask bg-gradient-primary opacity-6"></span>
    </div>
    <v-card
      class="shadow px-4 py-4 mx-9 overflow-hidden border-radius-xl mt-n16"
    >
      <v-row>
        <v-col lg="4" sm="8">
          <v-tabs background-color="transparent" class="text-left">
            <v-tabs-slider></v-tabs-slider>

            <v-tab :ripple="false" href="#tab-1">
              <span class="ms-1">Messages</span>
            </v-tab>

            <v-tab :ripple="false" href="#tab-2">
              <span class="ms-1">Social</span>
            </v-tab>

            <v-tab :ripple="false" href="#tab-3">
              <span class="ms-1">Notifications</span>
            </v-tab>

            <v-tab :ripple="false" href="#tab-4">
              <span class="ms-1">Backup</span>
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
      <v-row class="px-4">
        <v-col lg="3">
          <v-card class="card-shadow border-radius-xl position-sticky top-1">
            <div class="px-4 pt-3 pb-0">
              <v-list>
                <v-list-item-group class="border-radius-sm">
                  <v-list-item
                    class="px-3 py-1 border-radius-lg mb-2"
                    v-for="item in menu"
                    :key="item.icon"
                  >
                    <v-icon
                      size="18"
                      class="material-icons-round me-2 text-dark"
                      >{{ item.icon }}</v-icon
                    >
                    <v-list-item-content class="py-0">
                      <a href="#profile" class="text-decoration-none">
                        <div class="d-flex flex-column">
                          <span class="text-dark text-sm">{{ item.text }}</span>
                        </div>
                      </a>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-card>
        </v-col>
        <v-col lg="9">
          <v-card
            class="card-shadow px-4 py-4 overflow-hidden border-radius-xl"
          >
            <v-row>
              <v-col cols="auto">
                <v-avatar width="74" height="74" class="shadow rounded-circle">
                  <span v-if="userProfile.photo === null" class="text-h5">{{
                    getInitials(
                      userProfile.firstName + " " + userProfile.lastName
                    )
                  }}</span>
                  <img
                    v-else
                    :src="userProfile.photo"
                    alt="Avatar"
                    class="rounded-circle"
                  />
                </v-avatar>
              </v-col>
              <v-col cols="auto" class="my-auto">
                <div class="h-100">
                  <h5 class="mb-1 text-h5 text-typo font-weight-bold">
                    {{ this.userProfile.firstName }}
                    {{ this.userProfile.lastName }}
                  </h5>
                </div>
              </v-col>
              <v-col
                lg="4"
                md="6"
                class="my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3"
              >
                <div class="d-flex align-center">
                  <p
                    class="mb-0 text-body text-xs ms-auto"
                    v-if="switche === true"
                  >
                    Switch to invisible
                  </p>
                  <p
                    class="mb-0 text-body text-xs ms-auto"
                    v-if="switche === false"
                  >
                    Switch to visible
                  </p>
                  <v-switch
                    :ripple="false"
                    class="mt-0 pt-0 ms-3 switch"
                    v-model="switche"
                    hide-details
                  ></v-switch>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <basic-info></basic-info>
          <change-password></change-password>
          <two-factor></two-factor>
          <accounts></accounts>
          <notifications></notifications>
          <sessions></sessions>
          <delete-account></delete-account>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import BasicInfo from "./Widgets/BasicInfo.vue";
import ChangePassword from "./Widgets/ChangePassword.vue";
import TwoFactor from "./Widgets/TwoFactor.vue";
import Accounts from "./Widgets/Accounts.vue";
import Notifications from "./Widgets/Notifications.vue";
import Sessions from "./Widgets/Sessions.vue";
import DeleteAccount from "./Widgets/DeleteAccount.vue";
import UserService from "@/services/user.service";

export default {
  name: "Settings",
  components: {
    BasicInfo,
    ChangePassword,
    TwoFactor,
    Accounts,
    Notifications,
    Sessions,
    DeleteAccount,
  },
  data() {
    return {
      switche: true,
      menu: [
        {
          icon: "person",
          text: "Profile",
        },
        {
          icon: "receipt_long",
          text: "Basic Info",
        },
        {
          icon: "lock",
          text: "Change Password",
        },
        {
          icon: "security",
          text: "2FA",
        },
        {
          icon: "badge",
          text: "Accounts",
        },
        {
          icon: "campaign",
          text: "Notifications",
        },
        {
          icon: "settings_applications",
          text: "Sessions",
        },
        {
          icon: "delete",
          text: "Delete Account",
        },
      ],
      userProfile: [],
      userRoles: [],
      userGroups: [],
    };
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
  mounted() {
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
  },
};
</script>
