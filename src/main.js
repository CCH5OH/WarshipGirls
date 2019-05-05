import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		url:"",
		menuLis:0
	},
	mutations:{
		getUrl(state,data){
			state.url = data.one;
			state.menuLis = data.two;
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
