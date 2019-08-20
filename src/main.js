import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Column from './components/column.vue'
import DataTable from 'primevue/datatable'
import Card from 'primevue/card'
import Password from 'primevue/password'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import 'primevue/resources/themes/nova-colored/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

Vue.component('Column', Column)
Vue.component('DataTable', DataTable)
Vue.component('Card', Card)
Vue.component('Password', Password)
Vue.component('InputText', InputText)
Vue.component('Button', Button)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
