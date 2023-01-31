<script>
// import HelloWorld from './components/HelloWorld.vue'
export default{
  data(){
    return {
      num:"12",
      uname:"zhang",
      rawhtml:"<h1>原生html标签</h1>",
      id:"d1",
      attr:"id",
      url:"http://e.hiphotos.baidu.com/image/pic/item/a1ec08fa513d2697e542494057fbb2fb4316d81e.jpg",
      mouseEvent:"click",
      msg:"hello",
      user:{
        name:"zhangsan"
      }
      , isActive: true
    ,activeClass: 'active',
    errorClass: 'text-danger'
    ,test:null
    }
  }
  ,methods:{
    changeUname:function(){
      this.uname = "Lis",
      this.url = "http://c.hiphotos.baidu.com/image/pic/item/30adcbef76094b36de8a2fe5a1cc7cd98d109d99.jpg",
      this.msg = "world",
      this.user.name = "lizi",
      this.isActive= false
    }
  }
  // 侦听器  监听数据的变化
  ,watch:{
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

  }
}
</script>

<template>
  <div>
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
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</div>
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
#d1{
  color:red;
}
.d1{
  color:blue;
}
.active{
  color:red;
}
</style>
