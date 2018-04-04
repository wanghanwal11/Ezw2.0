// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import VueScroller from 'vue-scroller'
import DeviceBox from 'devicebox'
import mock from '@/api/mock.js'
import {tap,swipe,swipeleft,swiperight,swipedown,swipeup,longtap} from '@/router/vuetouch.js'
import api from '@/api/api.js'
import h5 from '@/browser/h5.js'
import androidHybrid from '@/browser/androidHybrid.js'
import iosHybrid from '@/browser/iosHybrid.js'
Vue.config.productionTip = false
Vue.use(VueScroller)

//DeviceBox
//使用模拟数据打开下面mock  注销则使用真实数据
DeviceBox.mock(mock)
//
DeviceBox.api(api)
DeviceBox.browser(h5)
// DeviceBox.browser(androidHybrid)
// DeviceBox.browser(iosHybrid)
Vue.prototype.color=function(str){
  return  'font_'+str.substr(0,1);
}
Vue.use(DeviceBox)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
