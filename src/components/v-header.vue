<template>
	<div id="header" class="header">
		<ul id="menu" class="nav" ref="menu">
			<li data-index="0" class="active" @click=fn0()>
				<router-link to="/main#home">官网首页</router-link>
				<div class="line-wrap">
					<div class="line"></div>
				</div>
			</li>
			<li data-index="1" @click=fn1()>
				<router-link to="/main#news">新闻公告</router-link>
				<div class="line-wrap">
					<div class="line"></div>
				</div>
			</li>
			<li data-index="2" @click=fn2()>
				<router-link to="/main#role">游戏资料</router-link>
				<div class="line-wrap">
					<div class="line"></div>
				</div>
			</li>
			<li data-index="3" @click=fn3()>
				<router-link to="/main#acgn">同人专区</router-link>
				<div class="line-wrap">
					<div class="line"></div>
				</div>
			</li>
			<li data-index="4" @click=fn4()>
				<router-link to="/main#service">游戏服务</router-link>
				<div class="line-wrap">
					<div class="line"></div>
				</div>
			</li>
		</ul>
		<div id="logo" class="logo">
			<a href="#">
				<h1 class="icon">战舰少女R</h1>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "v-header",
		data() {
			return {

			}
		},
		methods: {
			fn0() {
				this.$store.commit('getUrl', {
					one: "home",
					two: 0
				})
			},
			fn1() {
				this.$store.commit('getUrl', {
					one: "news",
					two: 1
				})
			},
			fn2() {
				this.$store.commit('getUrl', {
					one: "role",
					two: 2
				})
			},
			fn3() {
				this.$store.commit('getUrl', {
					one: "acgn",
					two: 3
				})
			},
			fn4() {
				this.$store.commit('getUrl', {
					one: "service",
					two: 4
				})
			}
		},
		mounted: function() {
			this.$refs.menu.children[0].classList.remove("active")
			console.log(this.$store.state.menuLis)
			this.$refs.menu.children[this.$store.state.menuLis].classList.add("active")
		}
	}
</script>

<style>

</style>