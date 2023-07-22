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
      <span class="mask bg-gradient-warning opacity-25"></span>
    </div>
    <v-card
      class="shadow px-4 py-4 mx-9 overflow-hidden border-radius-xl mt-n16"
      dark
    >
      <v-row class="px-4">
        <v-col lg="12">
          <v-card
            class="
              card-shadow
              px-4
              py-4
              overflow-hidden
              border-radius-xl
              elevation-10
            "
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
                  <h5 class="mb-1 text-h5 text-warning font-weight-bold">
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
                    {{ $t("SwitchToInVisible") }}
                  </p>
                  <p
                    class="mb-0 text-body text-xs ms-auto"
                    v-if="switche === false"
                  >
                    {{ $t("SwitchToVisible") }}
                  </p>
                  <v-switch
                    :ripple="false"
                    class="mt-0 pt-0 ms-3 switch"
                    v-model="switche"
                    @click="activateProfile"
                    hide-details
                  ></v-switch>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <basic-info></basic-info>
          <change-password></change-password>
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
import Notifications from "./Widgets/Notifications.vue";
import Sessions from "./Widgets/Sessions.vue";
import DeleteAccount from "./Widgets/DeleteAccount.vue";
import UserService from "@/services/user.service";

export default {
  name: "Settings",
  components: {
    BasicInfo,
    ChangePassword,
    Notifications,
    Sessions,
    DeleteAccount,
  },
  data() {
    return {
      switche: null,
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
    activateProfile() {
      UserService.statusProfile(this.switche).then(
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
  },
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        this.switche = this.userProfile.active;
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
