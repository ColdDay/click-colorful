(function (win, doc) {
	"use strict";
	var defaultParams = {
		colors: ['#eb125f', '#6eff8a', '#6386ff', '#f9f383'],
		size: 30,
		maxCount: 30
  	}
	function colorBall(params) {
		if (params && params.colors) {
			this.colors = params.colors;
		}
		if (params && params.size) {
			this.size = params.size;
		}
		if (params && params.maxCount) {
			this.maxCount = params.maxCount;
		}
	}
	function getOneRandom(arr)
	{
    		return arr[Math.floor(Math.random()*arr.length)];
	}
	function _run(ball) {
		var randomXFlag = Math.random() > 0.5
		var randomYFlag = Math.random() > 0.5
		var randomX = parseInt(Math.random() * 160);
		var randomY = parseInt(Math.random() * 160);
		if (randomXFlag) {
				randomX = randomX * -1;
		}
		if (randomYFlag) {
				randomY = randomY * -1
		}
		var transform = 'translate3d('+randomX+'px,' + randomY + 'px, 0) scale(0)';
		ball.style.webkitTransform = transform;
		ball.style.MozTransform = transform;
		ball.style.msTransform = transform;
		ball.style.OTransform = transform;
		ball.style.transform = transform;
	}
	colorBall.prototype.fly = function (x, y, playCount, loopTimer) {
		if (playCount === -1) return
		var ballElements = []
		var fragment = document.createDocumentFragment()
		for(var i=0; i<this.maxCount; i++) {
			var ball = doc.createElement('i');
			ball.className = 'color-ball';
			var blurX = Math.random() * 10
			if (Math.random() > 0.5) blurX = blurX* -1
			var blurY = Math.random() * 10
			if (Math.random() > 0.5) blurY = blurY* -1
			ball.style.left = (x + blurX) + 'px';
			ball.style.top = (y + blurY) + 'px';
			ball.style.width = this.size + 'px';
			ball.style.height = this.size + 'px';
			ball.style.position = 'fixed';
			ball.style.borderRadius = '1000px';
			ball.style.boxSizing = 'border-box';
			ball.style.opacity = 0;
			ball.style.zIndex = 9999;
			ball.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
			ball.style.webkitTransform = 'translate3d(0px, 0px, 0px) scale(1)';
			ball.style.transition = 'transform 1s ease-out';
			ball.style.webkitTransition = 'transform 1s ease-out';
			ball.style.backgroundColor = getOneRandom(this.colors);
			fragment.appendChild(ball);
			ballElements.push(ball)
		}
		doc.body.appendChild(fragment);
		// 执行动画
		setTimeout(function () {
			for(var i=0; i<ballElements.length; i++){
				ballElements[i].style.opacity = 1;
				_run(ballElements[i])
			}	
		}, 10)
		// 清空dom
		setTimeout(function () {
			for(var i=0; i<ballElements.length; i++){
				doc.body.removeChild(ballElements[i])
			}	
		}, 1500)
		// 多次播放
		if (playCount > 0) {
			var self = this
			setTimeout (function () {
				var last = playCount - 1
				self.fly(x, y, last, loopTimer)
			}, loopTimer)
		}
	}
	//兼容CommonJs规范 
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = colorBall;
	};
	//兼容AMD/CMD规范
	if (typeof define === 'function') define(function() { 
		return colorBall; 
	});
	//注册全局变量，兼容直接使用script标签引入插件
	win.colorBall = colorBall;
 })(window, document)
