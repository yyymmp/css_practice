const app = new Vue({
    el: "#app"
    ,data:{
        books:[
            {
                id: 1,
                name: "算法1",
                date: "2003.9",
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: "算法2",
                date: "2003.9",
                price: 85.00,
                count: 1
            },
            {
                id: 3,
                name: "算法3",
                date: "2003.9",
                price: 85.00,
                count: 1
            },
            {
                id: 4,
                name: "算法4",
                date: "2003.9",
                price: 85.00,
                count: 1
            },
            {
                id: 5,
                name: "算法5",
                date: "2003.9",
                price: 85.00,
                count: 1
            }
        ]
    },
    methods:{
        price(price){
            return "$ "+price.toFixed(2);
        }
        ,decrement(index){
            this.books[index].count--;
        }
        ,increment(index){
            this.books[index].count++;
        }
        ,removeBtn(index){
            //移除指定
            this.books.splice(index,1);
        }
        ,totalPrice(){
            let total = 0;
            for (let  i = 0;i<this.books.length;i++){
                total += this.books[i].count * this.books[i].price;
            }
            return total;
        }
    },
    filters:{
        showPrice(price){
            return "$ "+price.toFixed(2);
        }
    }
})