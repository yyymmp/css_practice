<template>
    <div>
        <h2>hello</h2>
        <!-- 使用父组件数据 -->
        <h2>{{ info }}</h2>
        <h2>{{ aaa }}</h2>
    </div>

</template>        
<script>
export default{
    // 使用props接受父组件传参 数组形式接受
    // props: ['info',"aaa"]
    //使用对象形式接受并设置接受类型,也可以设置默认值  不符合时会报警告
    props:{
        // info:String,
        info:{
            // 类型
            type:String,
            // 设置默认值
            default:"info默认值",
            //设置必传 否则抛出警告
            required: true
        },
        aaa:"子组件默认值"
    }


}
</script>