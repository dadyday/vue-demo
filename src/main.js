import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
// https://fontawesome.com/icons?d=gallery&p=2&s=brands,solid
// https://github.com/FortAwesome/vue-fontawesome#usage

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
// https://www.npmjs.com/package/vue-axios

new Vue({
  render: (h) => h(App),
}).$mount("#app");
