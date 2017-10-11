// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import VueResource from 'vue-resource'
import { Button, Select, Input, Loading, Rate } from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Rate)
Vue.use(VueResource)
require.ensure([], function () {
  require('element-ui/lib/theme-default/index.css')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
