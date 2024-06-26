<template>
  <v-app>
    <div
      class="position-relative min-vh-100"
      :style="`background-color:  #f9fbfd;`"
    >
      <drawer
        :drawer="drawer"
        :sidebarColor="sidebarColor"
        :sidebarTheme="sidebarTheme"
        :userProfile="userProfile"
        :userGroups="userGroups"
        :userRoles="userRoles"
      >
      </drawer>
      <v-main>
        <div
          @click="drawer = false"
          v-if="drawer"
          class="position-absolute drawer-state"
        ></div>
        <app-bar
          v-if="$route.name !== 'Profile'"
          background="bg-transparent"
          has-bg
          @drawer-toggle="drawer = $event"
          :toggle-active="drawer"
          :navbarFixed="navbarFixed"
          @toggleSettingsDrawer="toggleSettingsDrawer"
          :userProfile="userProfile"
          :userGroups="userGroups"
          :userRoles="userRoles"
        ></app-bar>
        <app-bar
          v-else-if="$route.name === 'Profile'"
          background="bg-default"
          has-bg
          @drawer-toggle="drawer = $event"
          :toggle-active="drawer"
          :userProfile="userProfile"
          :userGroups="userGroups"
          :userRoles="userRoles"
        ></app-bar>
        <app-bar
          v-else
          background="primary"
          linkColor="rgba(0,0,0,.6)"
          @drawer-toggle="drawer = $event"
          :toggle-active="drawer"
          :userProfile="userProfile"
          :userGroups="userGroups"
          :userRoles="userRoles"
        ></app-bar>
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
        <v-btn
          :ripple="false"
          icon
          rounded
          color="#fff"
          width="52px"
          height="52px"
          :class="
            $vuetify.rtl
              ? 'fixed-plugin-button-left position-fixed btn-light bg-dark text-warning z-index-9999'
              : 'fixed-plugin-button-right position-fixed btn-light bg-dark text-warning z-index-9999'
          "
          @click="showSettingsDrawer = true"
        >
          <v-icon size="20">fa fa-cog py-2</v-icon>
        </v-btn>

        <settings-drawer
          :showSettingsDrawer="showSettingsDrawer"
          @toggleSettingsDrawer="toggleSettingsDrawer"
          @updateSidebarColor="updateSidebarColor"
          @updateSidebarTheme="updateSidebarTheme"
          @toggleNavbarPosition="toggleNavbarPosition"
        >
        </settings-drawer>
      </v-main>
    </div>
  </v-app>
</template>
<script>
// /* eslint-disable no-new */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}

function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

import { FadeTransition } from "vue2-transitions";
import Drawer from "@/views/Platform/Layout/Component/Drawer.vue";
import AppBar from "@/views/Platform/Layout/Component/AppBar.vue";
import ContentFooter from "@/views/Platform/Layout/Component/Footer.vue";
import SettingsDrawer from "@/views/Platform/Layout/Component/SettingsDrawer.vue";
import UserService from "@/services/user.service";

export default {
  components: {
    ContentFooter,
    FadeTransition,
    Drawer,
    AppBar,
    SettingsDrawer,
  },
  data() {
    return {
      drawer: null,
      showSettingsDrawer: false,
      sidebarColor: "warning",
      sidebarTheme: "dark",
      navbarFixed: false,
      userProfile: [],
      userRoles: [],
      userGroups: [],
    };
  },
  methods: {
    initScrollbar() {
      let isWindows = navigator.platform.startsWith("Win");
      if (isWindows) {
        initScrollbar("sidenav");
      }
    },
    toggleSettingsDrawer(value) {
      this.showSettingsDrawer = value;
    },
    updateSidebarColor(value) {
      this.sidebarColor = value;
    },
    updateSidebarTheme(value) {
      let siblings = event.target.closest("button").parentElement.children;
      for (var i = 0; i < siblings.length; i++) {
        siblings[i].classList.remove("bg-gradient-default");
        siblings[i].classList.add("btn-outline-default");
      }
      event.target.closest("button").classList.add("bg-gradient-default");
      event.target.closest("button").classList.remove("btn-outline-default");
      this.sidebarTheme = value;
    },
    toggleNavbarPosition(value) {
      this.navbarFixed = value;
    },
  },
  mounted() {
    this.initScrollbar();
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        this.$i18n.locale = this.userProfile.locale;
        if (this.userProfile.locale === "ar") {
          this.$vuetify.rtl = true;
        }
      },
      (error) => {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
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
<style lang="scss"></style>
