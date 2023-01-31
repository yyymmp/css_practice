var name = "小红";
var  age = 18;
var flag= true;
function sun(n1,n2){
    return n1+n2;
}

if (flag){
    console.log(sun(20,20))
}

// 导出
export {
    flag,sun
}