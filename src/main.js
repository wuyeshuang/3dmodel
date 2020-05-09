// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'


Vue.use(Vuex)


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 安装elementui

import 'babel-polyfill'

import './theme/index.css'
// 修改elementui主题色

import './css/style.css'
import './css/cooperation.css'

import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });
// 全局引入elementui样式

import $ from 'jquery'

// Axios.defaults.baseURL = 'http://model-box.wj2015.com:8080'
// Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.prototype.HOST = '/api'

Vue.config.productionTip = false

Vue.use(VueCookies)

const store = new Vuex.Store({
    state:{
      userInfo:{
        // id: null,
        // username:'',
        // nickname:'',
        // loginCode:null
      },
      sign:{
        yzqrcode1:false
      }
    },
    mutations:{
      pdisLogin(state,uIsLogin){
        state.userInfo=uIsLogin
      }
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
