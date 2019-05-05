function myFn() {
	////自适应代码--rem单位用的
	function resizeHtml() {
		var winWidth = window.innerWidth && document.documentElement.clientWidth ?
			Math.min(window.innerWidth, document.documentElement.clientWidth) :
			window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		if(winWidth < 1024) winWidth = 1024;
		document.getElementsByTagName('html')[0].style.fontSize = winWidth / 19.2 + 'px';
	}
	resizeHtml();
	document.write('<!--\[if lt IE 9\]> <p class="lowVersion">您使用的IE浏览器版本过低，本站不再支持，您可以<a href="//windows.microsoft.com/">升级IE浏览器</a>，或使用<a href="//www.google.cn/chrome/">Google Chrome</a>、<a href="//www.firefox.com.cn/download/">Firefox</a>等浏览器，将会得到更好的体验！</p> <!\[endif\]-->');
	$(function() {
		////滚动翻页
		var headerMenuLi = $('#header #menu>li');
		headerMenuLi.click(function() {
			var index = -($(this).attr('data-index'));
			leftWidth = (parseInt(index) * 100 + '%')
			$('.wrapper_list').css('left', leftWidth);
		})
		var liIndex = 0;
		let leftWidth = 0;
		let aa = 0;
		$(document).on("mousewheel DOMMouseScroll", function(e) {
			$('#header #menu>li[data-index="liIndex"]').addClass('active');
			var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
				(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
			if(delta > 0) {
				// 向上滚
				if(parseInt(leftWidth) > -100) {
					console.log('滚动到第一张')
					return
				}
				console.log('向上滚动');
				leftWidth = (parseInt(leftWidth) + 100) + '%'
				$('.wrapper_list').css('left', leftWidth)
			} else if(delta < 0) {
				// 向下滚
				if(parseInt(leftWidth) < -300) {
					console.log('滚动到最后一张')
					return
				}
				console.log('向下滚动');
				leftWidth = (parseInt(leftWidth) - 100) + '%'
				$('.wrapper_list').css('left', leftWidth)
			}

			liIndex = -(parseInt(leftWidth) / 100);
			var $li = $(headerMenuLi);
			for(let i = 0; i < $li.length; i++) {
				if(delta > 0) {
					if(liIndex == $li.eq(i).attr('data-index')) {

						$li.removeClass("active");
						$li.eq(i).addClass("active");

					}
				} else if(delta < 0) {
					if(liIndex == $li.eq(i).attr('data-index')) {
						$li.removeClass("active");
						$li.eq(i).addClass("active");
					}
				}

			}

		});
		////头部标签-排他效果
		var $menu = document.getElementById("menu");
		var menuLists = $menu.getElementsByTagName("li");
		for(var i = 0; i < menuLists.length; i++) {
			menuLists[i].onclick = function() {
				for(var j = 0; j < menuLists.length; j++) {
					menuLists[j].classList.remove("active");
				}
				this.classList.add("active");
			}
		}
		////背景角色偏移
		$('.section-img>img').mousemove(function(e) {
			var e = e || window.event;
			var __xx = e.pageX || e.clientX + document.body.scroolLeft;
			var __yy = e.pageY || e.clientY + document.body.scrollTop;
			var valueX = __xx / 15;
			var valueY = __yy / 10;
			$(this).css("transform", "translate3d(" + valueX + "px," + valueY + "px,0)");
		});
		////轮播图
		// 获取所有有关的对象
		var box = document.getElementById("news_screen_box");
		var screen = box.children[0]; //获得相框
		var imgWidth = screen.offsetWidth; //图片显示宽度
		var ulObj = screen.children[0];
		var list = ulObj.children; //图片的li的集合
		var olObj = box.children[1];
		// 创建小按钮
		var pic = 0;
		for(var i = 0; i < list.length; i++) {
			var liObj = document.createElement("li");
			olObj.appendChild(liObj);
			// 给每一个小按钮添加自定义属性，记录下标
			liObj.index = i;
			// 给每一个小按钮绑定事件
			liObj.onmouseover = function() {
				for(var j = 0; j < olObj.children.length; j++) {
					olObj.children[j].removeAttribute("class"); //清除所有小按钮的样式
				}
				this.className = "current";
				pic = this.index;
				animate(ulObj, -pic * imgWidth)
			}
		}
		// 给第一个小按钮添加样式
		olObj.children[0].className = "current";
		// 将第一个li克隆一份追加到ul中
		ulObj.appendChild(ulObj.children[0].cloneNode(true))
		// 设置自动播放
		setInterval(clickHandle, 3000)

		function clickHandle() {
			if(pic >= list.length - 1) {
				pic = 0;
				ulObj.style.left = "0px";
			}
			pic++;
			animate(ulObj, -pic * imgWidth);
			// 如果图片为第6张，清除所有小按钮的样式，第一个小按钮有颜色
			if(pic == list.length - 1) {
				olObj.children[olObj.children.length - 1].className = "";
				olObj.children[0].className = "current";
			} else {
				for(var i = 0; i < olObj.children.length; i++) {
					olObj.children[i].className = "";
				}
				olObj.children[pic].className = "current";
			}
		}
		// 设置任意的一个元素,移动到指定的目标位置
		function animate(element, target) {
			clearInterval(element.timeId);
			//定时器的id值存储到对象的一个属性中
			element.timeId = setInterval(function() {
				//获取元素的当前的位置,数字类型
				var current = element.offsetLeft;
				var step = 10; //每次移动的距离
				step = current < target ? step : -step;
				current += step; //当前移动到位置
				if(Math.abs(current - target) > Math.abs(step)) {
					element.style.left = current + "px";
				} else {
					clearInterval(element.timeId); //清理定时器
					element.style.left = target + "px"; //直接到达目标
				}
			}, 10);
		}
		////新闻公告
		$(function() {
			$("#news .news_right .nav li").click(function() {
				$("#news .news_right .nav li").removeClass("active");
				$(this).addClass("active");
				var index = $("#news .news_right .nav li").index(this);
				$("#news .news_right .tab-content .tab-pane").removeClass("active");
				$("#news .news_right .tab-content .tab-pane").eq(index).addClass("active");
			})
			$('#news .pagination a').click(function() {
				$("#news .pagination a").removeClass("current");
				$(this).addClass("current");
			})
		})
		////游戏服务
		$(function() {
			$("#service_wrapper ul li").click(function() {
				$("#service_wrapper ul li").removeClass("active");
				$(this).addClass("active");
				var index = $("#service_wrapper ul li").index(this);
				$("#service_wrapper .tab-content .tab-pane").removeClass("active");
				$("#service_wrapper .tab-content .tab-pane").eq(index).addClass("active");
			})
		})
		////游戏资料
		//游戏资料-角色
		var $role = document.getElementById("role");
		var $roleList = document.getElementById("role_list");
		var roleListSA = $roleList.getElementsByTagName("a");
		//游戏资料-角色-头像排他
		for(var i = 0; i < roleListSA.length; i++) {
			roleListSA[i].onclick = function() {
				for(var j = 0; j < roleListSA.length; j++) {
					roleListSA[j].classList.remove("active");
				}
				this.classList.add("active");
				//游戏资料-角色-背景角色
				//console.log($("#role_head_img li a.active>img"));
				//获取背景角色头像
				var $roleHeadImg = $("#role_head_img li a.active>img").attr("src");
				console.log("角色头像:" + $roleHeadImg); // 默认角色头像--- img/img201712281847090.png
				//获取背景角色
				var $roleBgImg = $("#role_pic");
				console.log("背景角色:" + $roleBgImg.attr("src")); // 默认背景角色---img/img201712281833110.png
				if($roleHeadImg == "../../static/img/img201712281833190.png") {
					$roleBgImg.attr('src', '../../static/img/img201712281833110.png')
				} else if($roleHeadImg == "../../static/img/img201712281847090.png") {
					$roleBgImg.attr('src', "../../static/img/img201712281847200.png")
				}
			}
		}
		////同人专区
		$("#acgn .nav-acg li").click(function() {
			$("#acgn .nav-acg li").removeClass("active");
			$(this).addClass("active");
		})
		$('#acgn .pagination a').click(function() {
			$("#acgn .pagination a").removeClass("current");
			$(this).addClass("current");
		})

	})
}

export {
	myFn
}