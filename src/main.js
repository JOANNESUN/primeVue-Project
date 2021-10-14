// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import PrimeVue from 'primevue/config';
import MultiSelect from 'primevue/multiselect';

import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'     


Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(PrimeVue);

Vue.component('MultiSelect', MultiSelect);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
