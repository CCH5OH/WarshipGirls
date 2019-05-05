<template>
	<div id="app">
		<v-header></v-header>
		<router-view/>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import Header from '@/components/v-header'
	import Footer from '@/components/v-footer'
	import { myFn } from '@/js/js'
	export default {
		name: 'App',
		components: {
			"v-header": Header,
			"v-footer": Footer,
		},
		created() {
			//在页面加载时读取sessionStorage里的状态信息
			if(sessionStorage.getItem("store")) {
				this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
			}

			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				sessionStorage.setItem("store", JSON.stringify(this.$store.state))
			})
		},
        mounted:function(){
        	myFn();
        	window.location.href ="/main#"+this.$store.state.url;
        }
	}
	
</script>

<style>
	@import url("./assets/css/common.css");
	@import url("./assets/css/newmain.css");
	@import url("./assets/css/header.css");
	@import url("./assets/css/footer.css");
	@import url("./assets/css/home.css");
	@import url("./assets/css/news.css");
	@import url("./assets/css/acgn.css");
	@import url("./assets/css/role.css");
	@import url("./assets/css/service.css");
</style>