<template>
	<div class="main-container clearfix" id="service">
		<!--背景角色S-->
		<div class="section-img">
			<img src="../assets/img/slider-img-service.png" />
		</div>
		<!--背景角色E-->
		<!--右侧多媒体S-->
		<div class="section-right-bg">
			<img src="../assets/img/section-right-bg2.png">
		</div>
		<div class="section-right">
			<div id="service_box">
				<div id="service_wrapper">
					<ul class="nav service-tabs">
						<li class="active">
							<a href="#">客服信息</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">游戏Q&amp;A</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">海外充值</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
						<li>
							<a href="#">奖励兑换</a>
							<div class="line-wrap">
								<div class="line"></div>
							</div>
						</li>
					</ul>
					<div class="tab-content">
						<!--客服-->
						<div class="tab-pane active">
							<div id="service_info">
								<p>
									<span class="icon icon-email"></span>客服邮箱：
									<a href="#">cs@moefantasy.com</a>
								</p>
								<p>
									<span class="icon icon-time"></span>工作时间：10:30~19:00 其他时间会比较慢，请谅解
								</p>
								<p>重复邮件会被删除，并可能导致您的问题被延后处理，问题请都集中在一封邮件中进行回复。</p>
								<p class="back-format clearfix">
									<img class="fL" src="../assets/img/back-format-01.png" />
									<img class="fL" src="../assets/img/back-format-02.png" />
								</p>
								<p>
									<span class="icon icon-password"></span>关于密码找回及修改
								</p>
								<p style="margin-top: 0.05rem; font-size: 0.13rem; line-height: 0.3rem">
									如果账号已经绑定邮箱的话请在登录界面点击<em style="color: #db2121;">账号管理—忘记密码—输入自己的登录账号—绑定邮箱</em>。会收到密码修改邮件，登录邮箱修改即可。如未绑定邮箱的账号，请在该邮件中提供充值详单截图，以便我们帮助您找回密码！
								</p>
							</div>
						</div>
						<!--常见问题-->
						<div class="tab-pane ">
							<div id="QA_list">
								<a href="">
									<dl class="list-item">
										<dt><span class="icon icon-question"></span>iOS充值未到账问题解决方法</dt>
										<dd>
											&nbsp; 客服邮箱：cs@moefantasy.com &nbsp; &nbsp; iOS充值未到账需要提供以下信息：UID、 服务器、充值时间、充值金� </dd>
									</dl>
								</a>
								<a href="">
									<dl class="list-item">
										<dt><span class="icon icon-question"></span>爱贝充值未到账问题解决方法</dt>
										<dd>
											&nbsp; 客服邮箱：cs@moefantasy.com &nbsp; 使用爱贝充值未到账首先需要查看商户单号，以通过爱贝使用微信支付为例� </dd>
									</dl>
								</a>
								<a href="#">
									<dl class="list-item">
										<dt><span class="icon icon-question"></span>为什么领取登录奖励第七天没有船只图纸？</dt>
										<dd>
											&nbsp; 登录奖励第七日为舰船图纸*2+随机奖励，图纸直接添加至您的账号中，仅显示获得的随机奖励。
										</dd>
									</dl>
								</a>
								<a href="">
									<dl class="list-item">
										<dt><span class="icon icon-question"></span>我仓库中的船只/装备都不见了怎么办？</dt>
										<dd>
											&nbsp; 请将您的服务器与UID提供给我们后耐心等待即可。 &nbsp; 客服邮箱：cs@moefantasy.com
										</dd>
									</dl>
								</a>
							</div>
							<div id="question_page">
								<div class="pagination">
									<a href="#" class="prev" style="display: ;"></a>
									<a href="#" class="current">1</a>
									<a href="#">2</a>
									<a href="#" class="next">&gt;</a>
								</div>
							</div>
						</div>
						<!--海外充值-->
						<div class="tab-pane">
							<form class="pay-form" id="PaypalForm" method="post">
								<div class="form-group clearfix">
									<label class="col-left">MERCHANDISE</label>
									<div class="col-right">
										<select name="id" class="form-control">
											<option value="2">60 Gems $ 1.29 USD</option>
											<option value="3">360 Gems $ 5.29 USD</option>
											<option value="4">1280 Gems $ 16.29 USD</option>
											<option value="5">2680 Gems $ 31.19 USD</option>
											<option value="6">4680 Gems $ 51.29 USD</option>
											<option value="8">10000 Gems $ 100.29 USD</option>
										</select>
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">SERVER</label>
									<div class="col-right">
										<select name="sid" class="form-control">
											<option value="2">胡德</option>
											<option value="3">萨拉托加</option>
											<option value="4">俾斯麦</option>
											<option value="5">声望</option>
											<option value="6">纳尔逊</option>
											<option value="7">空想</option>
											<option value="8">海伦娜</option>
											<option value="9">突击者</option>
											<option value="10">黎赛留</option>
											<option value="11">贝尔法斯特</option>
											<option value="12">埃塞克斯</option>
											<option value="13">昆西</option>
											<option value="14">长春</option>
										</select>
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">UID</label>
									<div class="col-right">
										<input type="text" name="uid" class="form-control">
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">USER LEVEL</label>
									<div class="col-right">
										<input type="text" name="level" class="form-control">
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">CAPTCHA</label>
									<div class="col-right">
										<div class="validate-box">
											<input type="text" name="vcode" class="form-control validate-input">
											<!--验证码-->
											<img class="vcodeimg" src="http://paypal.jianniang.com/createCode.php" onclick="this.src='http://paypal.jianniang.com/createCode.php?d='+Math.random();" title="点击刷新验证码" alt="">
										</div>
									</div>
								</div>
								<div class="form-group clearfix">
									<input type="submit" class="form-control submit-btn" value="BUY">
								</div>
							</form>
						</div>
						<!--奖励兑换-->
						<div class="tab-pane ">
							<form id="exchangeForm" action="">
								<div class="form-group clearfix">
									<label class="col-left">服务器</label>
									<div class="col-right">
										<select name="sid" class="form-control">
											<option value="2">胡德</option>
											<option value="3">萨拉托加</option>
											<option value="4">俾斯麦</option>
											<option value="5">声望</option>
											<option value="6">纳尔逊</option>
											<option value="7">空想</option>
											<option value="8">海伦娜</option>
											<option value="9">突击者</option>
											<option value="10">黎赛留</option>
											<option value="11">贝尔法斯特</option>
											<option value="12">埃塞克斯</option>
											<option value="13">昆西</option>
											<option value="14">长春</option>
											<option value="101">列克星敦</option>
											<option value="102">欧根亲王</option>
											<option value="103">提尔皮茨</option>
											<option value="104">大青花鱼</option>
											<option value="105">阿拉斯加</option>
											<option value="106">皇家方舟</option>
											<option value="107">罗德尼</option>
											<option value="108">维内托</option>
										</select>
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">Uid</label>
									<div class="col-right">
										<input type="text" class="form-control" name="uid">
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">礼品码</label>
									<div class="col-right">
										<input type="text" name="giftCode" class="form-control">
									</div>
								</div>
								<div class="form-group clearfix">
									<label class="col-left">验证码</label>
									<div class="col-right">
										<div class="validate-box">
											<input type="text" class="form-control validate-input" name="vcode">
											<img class="vcodeimg" src="http://paypal.jianniang.com/createCode.php" onclick="this.src='http://paypal.jianniang.com/createCode.php?d='+Math.random();" title="点击刷新验证码" alt="">
										</div>
									</div>
								</div>
								<div class="form-group clearfix">
									<input id="exchangesubmit" type="button" class="form-control submit-btn" value="领取">
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>
		</div>
		<!--右侧多媒体E-->

	</div>

</template>

<script>
	
	export default {
		name: "main-service",
		data() {
			return {

			}
		},
		methods:{
			
		}
	}
</script>

<style>

</style>