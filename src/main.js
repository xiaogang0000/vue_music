import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
// import VueLazyload from 'vue-lazyload'

import './common/stylus/index.styl'

fastclick.attach(document.body)

// Vue.use(VueLazyload, {
//   loading: require('common/image/default.png')
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  // store,
  render: h => h(App)
})
