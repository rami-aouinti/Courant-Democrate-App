<template>
  <v-card
    class="card-shadow border-radius-xl"
    :class="$route.name === 'VrDefault' ? 'bg-gradient-default' : ''"
    dark
  >
    <div class="px-6 pt-4 pb-0 d-flex">
      <v-avatar
        color="bg-gradient-warning border-radius-xl mt-n8"
        class="shadow"
        height="64"
        width="64"
      >
        <v-icon class="material-icons-round text-black" size="24"
          >language</v-icon
        >
      </v-avatar>
      <p
        class="font-weight-bold text-h6 mb-0 ms-3"
        :class="$route.name === 'VrDefault' ? 'text-black' : 'text-warning'"
      >
        {{ $t("Home.ForumMembers") }}
      </p>
    </div>
    <v-row>
      <v-col lg="6" md="7">
        <v-card-text class="py-3">
          <v-list class="py-0 bg-transparent">
            <v-list-item
              v-for="(chat, index) in countries"
              :key="chat.title"
              class="px-4 py-1"
              :class="{ 'border-bottom': index !== countries.length - 1 }"
            >
              <v-img
                :alt="`${chat.title} avatar`"
                :src="chat.avatar"
                max-width="20px"
                class="me-6"
              ></v-img>

              <v-list-item-content>
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Country:
                </span>
                <v-list-item-title
                  v-text="chat.country"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name == 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Sales:
                </span>
                <v-list-item-title
                  v-text="chat.sales"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name === 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Value:
                </span>
                <v-list-item-title
                  v-text="chat.value"
                  class="text-sm mb-0"
                  :class="
                    $route.name === 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <span
                  class="text-xs font-weight-bold"
                  :class="
                    $route.name === 'VrDefault' ? 'text-white' : 'text-body'
                  "
                >
                  Bounce:
                </span>
                <v-list-item-title
                  v-text="chat.bounce"
                  class="text-sm mb-0"
                  :class="
                    $route.name == 'VrDefault'
                      ? 'text-white opacity-6'
                      : 'text-typo'
                  "
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>
      <v-col lg="6" md="5">
        <div id="map" class="mt-0 mt-lg-n4 w-100 h-100 overflow-hidden"></div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "jsvectormap/dist/maps/world-merc";
import "jsvectormap/dist/css/jsvectormap.min.css";
import UserService from "@/services/user.service";

export default {
  name: "sales-country",
  data() {
    return {
      places: [],
      countries: [
        {
          avatar: require("@/assets/img/icons/flags/US.png"),
          country: "United States",
          sales: "2.500",
          value: "$230,900",
          bounce: "29.9%",
        },
        {
          avatar: require("@/assets/img/icons/flags/DE.png"),
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
        },
        {
          avatar: require("@/assets/img/icons/flags/GB.png"),
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
        },
        {
          avatar: require("@/assets/img/icons/flags/BR.png"),
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
        },
      ],
    };
  },

  mounted() {
    UserService.getPlaces().then(
      (response) => {
        this.places = response.data;
        new jsVectorMap({
          selector: "#map",
          map: "world",
          showTooltip: true,
          zoomOnScroll: true,
          zoomButtons: true,
          selectedMarkers: [1, 3],
          markersSelectable: true,
          markers: this.places,
          markerStyle: {
            initial: {
              fill: "#d3582c",
            },
            hover: {
              fill: "E91E63",
            },
            selected: {
              fill: "E91E63",
            },
          },
          regionStyle: {
            initial: {
              fill: "#8f7a70",
              stroke: "#676767",
              strokeWidth: 2.5,
              fillOpacity: 1,
            },
          },
        });
        console.log(this.places);
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
