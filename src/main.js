import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Create app
const app = createApp(App);

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars);

app.component('font-awesome-icon', FontAwesomeIcon);

//Global components
import GcfButtonTwoway from '@/components/global/GcfButtonTwoway.vue';
import GcfButtonThreeway from '@/components/global/GcfButtonThreeway.vue';
import GcfButtonNway from '@/components/global/GcfButtonNway.vue';
import GcfSelect from '@/components/global/GcfSelect.vue';


app.component('GcfButtonTwoway', GcfButtonTwoway);
app.component('GcfButtonThreeway', GcfButtonThreeway);
app.component('GcfButtonNway', GcfButtonNway);
app.component('GcfSelect', GcfSelect);

app.use(store).use(router).mount("#app");
