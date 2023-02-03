<template>
    <div>
        <!-- 单独功能模块的封装 父组件也可以是作为子组件被引用 -->
        <Hello ></Hello>
        <h2>我是组件内容</h2>
        <h2>{{ msg }}</h2>
        <!-- 使用组件 -->
        <button @click="msg = 'hi'">按钮</button>
        <!-- 父组件向子组件传值 标签是自定义的,可以动态绑定 如果是死数据，也可无需动态绑定-->
        <Hello :info="msg"  aaa="111"></Hello>
    </div>

</template>   
<script>
// 在组件中引用组件
import Hello from "./Hello.vue"
export default{
    data:function(){
        // 返回对象,因为data是一个函数,函数拥有局部作用域,当这样返回数据时,该组件被引用时,每一次引用的实例的数据都是互不干扰的
        return {
            msg:123
        }
    },
    // 注册组件
    components:{
        Hello
    }
}
</script>     