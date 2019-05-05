<template>
	<div id="main" class="main clearfix">
		<router-link to="/" class="maxWH">
			<div class="wrapper clearfix">
				<div class="wrapper_list">
					<main-home></main-home>
					<main-news></main-news>
					<main-role></main-role>
					<main-acgn></main-acgn>
					<main-service></main-service>
				</div>
			</div>
		</router-link>
	</div>

</template>

<script>
	import MainHome from '@/components/main-home'
	import MainNews from '@/components/main-news'
	import MainRole from '@/components/main-role'
	import MainAcgn from '@/components/main-acgn'
	import MainService from '@/components/main-service'
	export default {
		name: "v-main",
		components: {
			MainHome,
			MainNews,
			MainRole,
			MainAcgn,
			MainService
		},
		methods: {

		}

	}
</script>

<style>

</style>