import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Global components
import GcfButtonTwoway from '@/components/global/GcfButtonTwoway.vue';
import GcfButtonThreeway from '@/components/global/GcfButtonThreeway.vue';
import GcfButtonNway from '@/components/global/GcfButtonNway.vue';
import GcfSelect from '@/components/global/GcfSelect.vue';

const app = createApp(App);

app.component('GcfButtonTwoway', GcfButtonTwoway);
app.component('GcfButtonThreeway', GcfButtonThreeway);
app.component('GcfButtonNway', GcfButtonNway);
app.component('GcfSelect', GcfSelect);

app.use(store).use(router).mount("#app");
