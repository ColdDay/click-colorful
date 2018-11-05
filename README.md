# click-colorful
点击特效，五颜六色的小球绽放

> 默认配置
```javascript
var params = {
        colors: ["#eb125f", "#6eff8a", "#6386ff", "#f9f383"], // 自定义颜色
        size: 30, // 小球大小
	maxCount: 50, // 点击依次出现多少个球
	loop: false,  // 是否连续多次出现
	loopTimer: 0  // 连续次数
  }
```
> 使用方式
 - 引入click-colorful.js ``` <script src="click-colorful.js"></script>```
 - 实力化插件
 ```javascript
 	var color = new colorBall()
	// 绽放一次
 	color.fly(x, y)
	// 绽放5次,间隔300ms
	color.fly(x, y, 5, 300)
```
 
