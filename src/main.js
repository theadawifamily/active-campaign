import Vue from 'vue'
//import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue'
import axios from 'axios'
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.prototype.$http = axios;
//Vue.use(BootstrapVue);

// const instance = axios.create({
//   baseURL: 'https://productonboardingcustomerjourneys.api-us1.com'
// });

// Alter defaults after instance has been created
//instance.defaults.headers.common['Authorization'] = 'Api-Token: bfb46188a9baefcc262ff174c8c6357d40a1b139ecc8609f34cac61ba4a62696be42a4cax';


//Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
