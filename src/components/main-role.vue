<template>
	<div class="main-container clearfix" id="role">
		<!--背景角色S-->
		<div class="section-img" id="role_bg_img">
			<img id="role_pic" :src="bgimgurl[0]" />
		</div>
		<!--背景角色E-->
		<!--右侧多媒体S-->
		<div id="role_info">
			<div class="role-info-inner">
				<div class="star-level">
					<span class="icon star"></span>
					<span class="icon star"></span>
					<span class="icon star"></span>
					<span class="icon star"></span>
					<span class="icon star"></span>
					<span class="icon star"></span>
				</div>
				<div class="category">
					<em>BC </em>
					<span>No.1001 | 战列巡洋舰</span>
				</div>
				<h2 class="title">胡德改</h2>
				<div class="text">
					<div class="text-dialogue">
						贵安，我是皇家海军的荣耀，胡德。指挥官，要来一杯红茶么。
					</div>
				</div>
			</div>
		</div>
		<div class="section-right">
			<span class="icon plane-icon"></span>
			<div id="role_list">
				<div class="list-wrapper">
					<div class="list-wrapper-box">
						<ul id="role_head_img">
							<li>
								<a href="#" class="active">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[0]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
							<li>
								<a href="#">
									<img :src="imgurl[1]" />
								</a>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</div>
		<!--右侧多媒体E-->

	</div>

</template>

<script>
	export default {
		data(){
			return{
				imgurl:['../../static/img/img201712281833190.png','../../static/img/img201712281847090.png'],
				bgimgurl:['../../static/img/img201712281833110.png','../../static/img/img201712281847200.png']
			}
		},
		method:{},
		mounted:function(){
			
		}
	}
</script>

<style>

</style>