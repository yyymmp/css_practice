<script >
export default{
    data(){
      return{
        num:12,
        rawhtml:"<h1>原生html标签</h1>",
        id:"d1",
        attr:"id",
        url:"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
        age:18,
        sex:"男",
        person:["张飞","kobe","james"],
        count:0,
        msg:"你好 我是谁",
        checked:false,
        fruits:[],
        city:"",
        citys:[],
        num:"",
        user:{
          name:"jlz"
        },
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger',
        test:null
      }
    },
    watch:{
    //监听data中的msg  msg发生变化时就会调用
      // msg:function(newVal,oldVal){
      //     console.log("newVal: "+newVal)
      //     console.log("oldVal: "+oldVal)
      //     //可执行异步操作
      // }
      //对象方式声明监听器
      msg:{
        //建立侦听器时立即执行 不需要等待数据变化
        immediate: true,
        handler(newVal,oldVal){
          console.log("newVal: "+newVal)
          console.log("oldVal: "+oldVal)
        }
      },
      //深度监听 监听对象中的是属性 user.name
      "user.name":{
        handler(newVal,oldVal){
          console.log("======================深度")
          console.log(newVal)
          console.log(oldVal)
        }
        ,deep: true
      }
    },
    methods:{
      changeUname:function(){
        this.uname = "Lis",
        this.url = "http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",
        this.msg = "world",
        this.user.name = "lizi",
        this.isActive= false
      },
      changeArr:function(){
        console.log(11111);
        // this.person.push("李逵")
        // splice() 数组方法用法
        // 第一个参数 开始插入或者开始删除的索引  如果只有一位参数，则删除该位置到全部
        // 第二份参数 删除几位  当第二个参数为0时 第三个参数表示插入的元素，可以多个
        // this.person.splice(1,1) 传两个参数，删除元素
        // this.person.splice(1,0,1,2,3,4) 第二个参数为0 增加元素
        //替换元素 第二个参数为替换的个数 后面是替换后的元素  
        this.person.splice(1,2,9,9) //从第1个位置开始，依次替换后面两位
      },
      add(event){
        console.log(event);
        this.count++
      },
      // 既传递形参，又传递事件对象
      add2(num,event){
        console.log(event);
        this.count +=num
      },
      divClick(){
        console.log("divClick")
      },
      btnClick(){
        console.log("btnClick")
      },
      onSubmit(){
        console.log("手动提交");
      },
      onceClick(){
        console.log("触发once");
      },
      keyUp(){
        console.log("keyUp");
      }
    }
}
</script>

<template>
    <div :class="[activeClass, errorClass,test]">class数组</div>
    <!-- Class 与 Style 绑定  是否拥有该类名  isActive:布尔值-->
    <div :class="{ active: isActive }">style绑定</div>
    <p>{{num}}</p>
    <p>{{msg}}</p>
    <p>{{uname}}</p>
    <p>{{user.name}}</p>
    <p v-once>{{uname}}}</p> 
    <button @click="changeUname">改变名字</button>
    <p v-html="rawhtml"></p>
    <!-- 属性动态绑定 -->
    <!-- 绑定id -->
    <p v-bind:id="id">哈哈哈</p>
    <!-- 动态属性绑定 -->
    <p v-bind:[attr]="id">1111</p>
    <!-- 动态事件 -->
    <button @[mouseEvent]="attr = 'class'">按钮</button>
    <img v-bind:src="url" alt="">



  <!-- if指令 -->
  <h1 v-if="age > 18">成年人</h1>
  <h1 v-else-if=" age == 18">刚好18</h1>
  <h1 v-else>未成年</h1>

<!-- template:渲染时不会渲染template标签元素，只是包裹作用  使用if -->
<template v-if="age > 10">
  <p>你好</p>
  <p>你好</p>
  <p>你好</p>
</template>    

<!-- v-show   -->
  <p v-show="sex == 1">男</p>
  <p v-show="sex == 2">女</p>
  <h1>{{ num }}</h1>
  <h1>hhhhhhhhhhh</h1>

<!-- v-for  -->
<ul>
  <li v-for="(item,index) in person" :key="index">
     {{index}}
  </li>
</ul>

<!-- 数组变化侦测  Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新-->
<ul>
  <li v-for="(item,index) in person" :key="index">
     {{item}}
  </li>
</ul>
<button @click="changeArr">改变数组</button>



<!-- 事件处理 -->
<button @click="add"> 监听事件 {{count }}</button>
<button @click="add2(2,$event)"> 监听事件2 {{count }}</button>
<!-- 一个事件绑定多个函数,都可以触发   -->
<button @click="add2(2,$event),add($event)"> 绑定多个函数 {{count }}</button>


<!-- 事件修饰符 
.stop：阻止子元素事件向父元素冒泡
.prevent: 阻止默认行为
.self
.capture
.once:只会出发一次回调
.passive
-->
<!-- stop  子元素的点击事件会冒泡父元素的点击事件-->
<div @click="divClick">
  <button @click.stop="btnClick">按钮</button>
</div>
<!-- prevent：不想在点击按钮之后提交 而是通过自己来控制提交 使用-->
<form action="">
  <input type="submit" value="提交" @click.prevent="onSubmit">
</form>
<!-- once：只点击一次会触发处理函数 -->
<button @click.once="onceClick">once</button>

<!-- 按键（键盘修饰符）
在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许在 v-on 或 @ 监听按键事件时添加按键修饰符。
-->
<input type="text" @keyup.enter="onceClick">
<!-- 键盘松开事件 不管哪个键盘 可使用修饰符指定键盘 -->
<input type="text" @keyup="keyUp">

<!-- v-model 表单输入绑定,数据双向绑定 -->
<!-- 本质是两个操作 v-bind绑定一个value属性   v-on给当前元素添加一个input事件  -->
<input type="text" v-model="msg">
<h2>{{ msg }}</h2>
<!-- 单个复选框  v-model为布尔值-->
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
<!-- 多个复选框  v-model为数组 数组元素为选中的单选框的value-->
<input type="checkbox" v-model="fruits" value="苹果"/>苹果
<input type="checkbox" v-model="fruits" value="西瓜" />西瓜
<input type="checkbox" v-model="fruits" value="葡萄"/>葡萄
<h2>{{ fruits }}</h2>
<!-- 单选框  将选中的单选框的value赋值给sex变量-->
<input type="radio" v-model="sex" value="男">男
<input type="radio" v-model="sex" value="女">女
<h2>{{ sex }}</h2>
<!-- 下拉框  单选: 将选中的option的值赋值给city变量-->
<select name="" id="" v-model="city">
<option value="杭州">杭州</option>
<option value="上海">上海</option>
<option value="安徽">安徽</option>
</select>
<h2>{{ city }}</h2>
<!-- 下拉框  多选: 将选中的option的值赋值给city变量-->
<select name="" id="" v-model="citys" multiple>
<option value="杭州">杭州</option>
<option value="上海">上海</option>
<option value="安徽">安徽</option>
</select>
<h2>{{ citys }}</h2>
<!-- v-model修饰符
.lazy:默认情况下，v-model 会在每次 input 事件后更新数据 (IME 拼字阶段的状态例外)。你可以添加 lazy 修饰符来改为在每次 change 事件(失去焦点)后更新数据=>将数据更新到变量msg中
.number:用户输入自动转换为数字，你可以在 v-model 后添加 .number 修饰符来管理输入
.trim: 去掉左右空格
 -->
 <input type="text" v-model.number="num">
<h2>{{ num }}</h2>
<input type="text" v-model.trim="num">
<h2>{{ num }}</h2>





</template>
<style scoped>  
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

