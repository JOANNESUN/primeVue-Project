// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import PrimeVue from 'primevue/config';
import MultiSelect from 'primevue/multiselect';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Calendar from 'primevue/calendar';
import Tree from 'primevue/tree';
import  Multigroupselect from './multiGroupSelect';



import 'primevue/resources/themes/saga-blue/theme.css'    
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'     






Vue.config.productionTip = false


/* eslint-disable no-new */
Vue.use(PrimeVue);

// Vue.component('MultiSelect', MultiSelect);
//global  

Vue.component('Multigroupselect', Multigroupselect)

Vue.component('Tree',Tree)

Vue.component('RadioButton',  RadioButton);

Vue.component('Slider',  Slider);

Vue.component('Calendar',Calendar)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
