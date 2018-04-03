var express  = require('express');
const  app = express();

const products = [
    {   "id":1,
        "title":"第一个商品",
        "price":1.99,
        "rating":1.5,
        "desc":"这是第一个商品",
        "categories":['电子产品','硬件设备']
    },
    {   "id":2,
        "title":"第二个商品",
        "price":2.99,
        "rating":2.5,
        "desc":"这是第二个商品",
        "categories":['图书']
    }
];

app.get('/',(req,res)=>{
    res.send("Hello Express");
})

//查询products接口的数据
app.get('/products',(req,res)=>{
    res.json( products );
})

//通过products中某件商品的id查询商品
app.get('/product/:id',(req,res)=>{
    res.json( products.find((product)=>product.id == req.params.id));

})


const server = app.listen(8000,'localhost',()=>{
    console.log("服务地址已启动，地址是：http://localhost:8000")
})