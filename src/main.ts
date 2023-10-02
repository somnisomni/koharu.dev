import "the-new-css-reset/css/reset.css";
import "./assets/main.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/router";

const app = createApp(App);
app.use(router);

app.mount("#app");
