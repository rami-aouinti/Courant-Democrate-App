/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import VueI18n from "vue-i18n";
import locales from "@/locales/locales";
import fr from "vuetify/src/locale/fr.ts";

const vuetify = new Vuetify({
  theme: { disable: true },
  icons: {
    iconfont: "fa",
  },
});

Vue.use(Vuetify);
Vue.use(VueI18n);

export default new Vuetify({
  rtl: false,
});
