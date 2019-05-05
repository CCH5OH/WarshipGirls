import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/v-main'

Vue.use(Router)

//控制滚动位置
const scrollBehavior = function(to, from, savedPosition) {
	//判断如果滚动条的位置存在直接返回到当前位置，否者返回到起点
	if(savedPosition) {
		return savedPosition
	} else {
		if(to.hash) {
			return {
				selector: to.hash
			}
		}
	}
}

export default new Router({
	mode: 'history',
	scrollBehavior,
	routes: [
		{path:'/',redirect:'/main'},
		{path:'/main',component: Main},
	],

})