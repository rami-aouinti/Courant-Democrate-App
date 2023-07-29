<template>
  <div
    class="fixed-plugin-left"
    :class="showSettingsDrawer === true ? 'show' : ''"
  >
    <v-card class="shadow-lg elevation-10" dark>
      <div class="card-padding mb-16">
        <div class="float-start">
          <h5 class="text-h5 text-warning font-weight-bold mt-3 mb-0">
            {{ $t("Setting") }}
          </h5>
          <p class="text-body font-weight-light">
            {{ $t("SeeOurDashboardOptions") }}
          </p>
        </div>
        <div class="float-end mt-4">
          <v-btn
            :ripple="false"
            icon
            rounded
            width="20px"
            height="20px"
            class="text-dark"
            @click="$emit('toggleSettingsDrawer', false)"
          >
            <v-icon size="18" class="material-icons-round">clear</v-icon>
          </v-btn>
        </div>
      </div>
      <hr class="horizontal dark my-1" />
      <div class="card-padding">
        <div>
          <h6 class="text-h6 text-warning font-weight-bold mb-2">
            {{ $t("SidebarColors") }}
          </h6>
          <v-btn-toggle
            tile
            color="accent-3 deep-purple"
            group
            v-model="sidebarColorModel"
            defaultValue="primary"
            rounded
          >
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'primary')"
              class="px-0 mx-0 bg-gradient-primary rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'default')"
              class="px-0 mx-0 bg-gradient-default rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'info')"
              class="px-0 mx-0 bg-gradient-info rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'success')"
              class="px-0 mx-0 bg-gradient-success rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'warning')"
              class="px-0 mx-0 bg-gradient-warning rounded-circle border-0 me-2"
            ></v-btn>
            <v-btn
              :elevation="0"
              height="23"
              width="23"
              min-width="23"
              small
              rounded
              :ripple="false"
              @click="$emit('updateSidebarColor', 'danger')"
              class="px-0 mx-0 bg-gradient-danger rounded-circle border-0 me-2"
            ></v-btn>
          </v-btn-toggle>
        </div>

        <h6 class="text-h6 text-warning font-weight-bold mb-0 mt-4">
          {{ $t("SideNavigatorType") }}
        </h6>
        <p class="text-sm text-body font-weight-light">
          {{ $t("ChooseBetweenDifferentSideNavigatorTypes") }}
        </p>
        <div class="d-flex">
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-6 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme === 'dark'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'dark'), active()]"
            >{{ $t("dark") }}</v-btn
          >
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-4 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme === 'transparent'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'transparent'), active()]"
            >{{ $t("transparent") }}</v-btn
          >
          <v-btn
            elevation="0"
            height="43"
            class="font-weight-bold text-uppercase btn-default py-2 px-4 me-2"
            color="#fff"
            small
            :class="
              sidebarTheme === 'white'
                ? 'bg-gradient-default'
                : 'btn-outline-default'
            "
            @click="[$emit('updateSidebarTheme', 'white'), active()]"
            >{{ $t("white") }}</v-btn
          >
        </div>
        <p class="text-sm d-lg-none d-block mt-3 text-body">
          {{ $t("YouCanChangeTheSidenavTypeJustOnDesktopView") }}
        </p>
        <div class="mt-7 d-flex align-center justify-between">
          <h6 class="text-h6 text-warning font-weight-bold mb-0">
            {{ $t("navbarFixed") }}
          </h6>
          <v-switch
            class="mt-0 ms-auto pt-0 switch"
            v-model="navbarFixedModel"
            hide-details
            @change="$emit('toggleNavbarPosition', navbarFixedModel)"
          ></v-switch>
        </div>
      </div>
    </v-card>
  </div>
</template>
<script>
import Vue from "vue";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";

Vue.use(VueGitHubButtons);

export default {
  props: {
    showSettingsDrawer: {
      type: Boolean,
      default: false,
    },
    sidebarColor: {
      type: String,
      default: "success",
    },
    sidebarTheme: {
      type: String,
      default: "dark",
    },
    navbarFixed: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      sidebarColorModel: this.sidebarColor,
      isActive: true,
      navbarFixedModel: this.navbarFixed,
    };
  },
  methods: {
    active: function () {
      this.isActive = !this.isActive;
    },
  },
};
</script>
