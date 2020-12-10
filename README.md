# VueChengBaoJueDouGame
- 《Vue.js项目实战》
- [原书代码](https://github.com/Akryum/packt-vue-project-guide)

### 代码结构
- index.js;上面引入vue和tween依赖；下面script引入自己写的js文件
- main.js里new Vue对象，vue对象中使用name，el, template, data, computed, methods, mounted()
- main.js为window绑定事件监听
- main.js里的data写成data: state(index.html里在main.js的上面引入了state.js);
- state.js里定义了var state={};null，数组，10，false，'Bill',get currentPalay(){}
- 使用Math：Math.round(Math.random()) 
- style.css里定义了样式
- style.less定义的啥
- transitions.css样式文件
- utils.js里罗列了常量，方法
- cards.js里定义了卡牌属性
- ui.js里使用Vue.component语法定义组件
- world.js里有vue，有tween