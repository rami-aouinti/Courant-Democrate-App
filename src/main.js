import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
// don't forget to import CSS styles
import "tiptap-vuetify/dist/main.css";
// Vuetify's CSS styles
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(VeeValidate);
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";

// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
import VueI18n from "vue-i18n";
import locales from "@/locales/locales";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);

const i18n = new VueI18n({
  lazy: true,
  locale: "en",
  fallbackLocale: "",
  messages: locales,
});

Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: "fa",
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
