<template>
	<div class="main-container clearfix" id="news">

		<!--新闻背景角色S-->
		<div class="section-img">
			<img src="../assets/img/slider-img-news.png" />
		</div>
		<!--新闻背景角色E-->
		<!--新闻右侧多媒体S-->
		<div class="section-right">
			<div id="Qsns">
				<ul class="nav list">
					<li class="list-item ">
						<span class="icon caret"></span>
						<a href="#">
							<img src="../assets/img/service.png" />
						</a>
						<span class="icon arrow"></span>
						<div class="content">
							<table>
								<tbody>
									<tr>
										<td>客服邮箱</td>
										<td>
											<a href="#">cs@moefantasy.com</a>
										</td>
									</tr>
									<tr>
										<td>投诉邮箱</td>
										<td>
											<a href="#">s315@moefantasy.com</a><br>
											<span class="small">本邮箱不受理通常客服问题</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</li>
					<li class="list-item">
						<a href="#">
							<img src="../assets/img/tieba.png" />
						</a>
					</li>
					<li class="list-item list-item-wechat">
						<span class="icon caret"></span>
						<a href="#">
							<img src="../assets/img/wechat.png" />
						</a>
						<span class="icon arrow"></span>
						<div class="content">
							<img class="swiper-lazy swiper-lazy-loaded" src="../assets/img/wechat.jpg">
						</div>
					</li>
					<li class="list-item list-item-qq">
						<span class="icon caret"></span>
						<a href="#">
							<img src="../assets/img/qq.png" />
						</a>
						<span class="icon arrow"></span>
						<div class="content">
							<h2>新手QQ群</h2>
							<div class="qq-list">
								<ul>
									<li>①群 486903306</li>
									<li>②群 492762558</li>
									<li>③群 418026741</li>
									<li>④群 197375806</li>
									<li>⑤群 552043713</li>
								</ul>
								<ul>
									<li>⑥群 246948453</li>
									<li>⑦群 532384428</li>
									<li>⑧群 200493701</li>
									<li>⑨群 462279839</li>
									<li>⑩群 556230052</li>
								</ul>
							</div>
						</div>
					</li>
					<li class="list-item">
						<a href="#">
							<img src="../assets/img/weibo.png" />
						</a>
					</li>
				</ul>
			</div>
			<div id="news_box">
				<div class="news_left" id="news_screen_box">
					<div class="screen">
						<!--相框-->
						<ul>
							<!--图片-->
							<li><img src="../assets/img/lunbutu1.jpg" /></li>
							<li><img src="../assets/img/lunbutu2.jpg" /></li>
							<li><img src="../assets/img/lunbutu3.jpg" /></li>
							<li><img src="../assets/img/lunbutu4.jpg" /></li>
						</ul>

						<!--小按钮-->
					</div>
					<ol></ol>
				</div>
				<div class="news_right">
					<ul class="nav">
						<li class="active">
							<a href="#">最新</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">新闻</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">公告</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">活动</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
					</ul>
					<div class="tab-content">
						<!--最新-->
						<div id="news_tab_content1" class="tab-pane">
							<ul class="news-list">
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">2019.2.22俾斯麦、萨拉托加、海伦娜、突击者合服维护公告</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">公告文本公告文本公告文本公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本公告文本公告文本公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">公告文本公告文本公告文本公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本公告文本公告文本公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">公告文本公告文本公告文本公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
							</ul>
							<div class="pagination">
								<a href="#" class="prev"></a>
								<a href="#" class="current">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#" class="next">&gt;</a>
							</div>
						</div>
						<!--新闻-->
						<div id="news_tab_content2" class="tab-pane ">
							<ul class="news-list">
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-blue">新闻</span>
										<span class="title">新闻文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
							</ul>
							<div class="pagination">
								<!--<a href="#" class="prev"></a>-->
								<a href="#" class="current">1</a>
								<!--<a href="#" class="next">&gt;</a>-->
							</div>
						</div>
						<!--公告-->
						<div id="news_tab_content3" class="tab-pane ">
							<ul class="news-list">
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-green">公告</span>
										<span class="title">公告文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
							</ul>
							<div class="pagination">
								<a href="#" class="prev"></a>
								<a href="#" class="current">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#" class="next">&gt;</a>
							</div>
						</div>
						<!--活动-->
						<div id="news_tab_content4" class="tab-pane active">
							<ul class="news-list">
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
								<li class="list-item">
									<a class="show-detail" href="#">
										<span class="badge badge-bg-red">活动</span>
										<span class="title">活动文本</span>
									</a>
									<span class="time">2019-02-20</span>
								</li>
							</ul>
							<div class="pagination">
								<a href="#" class="prev"></a>
								<a href="#" class="current">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#" class="next">&gt;</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--新闻右侧多媒体E-->

	</div>
</template>

<script>
	export default {
		name: "main-news",
		data() {
			return {

			}
		},
		methods: {},
	}
</script>

<style>

</style>