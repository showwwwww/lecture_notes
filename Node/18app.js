var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.get('/',function(req,res){
	res.send('hellow world');
});
//路由是一张表
//表里面存着具体的映射关系
//省略第一个参数时，可以直接请求文件路径
app.use(express.static('./public/'))

/* 
在express中配置使用art-template引擎模板
第一个参数,表示当渲染以.art结尾的文件时,使用art-template模板引擎
express-art-template时专门用来在express中把art-template整合到express中
*/
app.engine('art',require('express-art-template'))
/* 
	express为response相应对象提供了一个render方法
	render方法默认时不可以使用，但如果配置了模板引擎就可以使用了
	res.render('html模板名',{模板数据})
	第一个参数不能写路径，默认会去项目的views目录查找
 */
app.get('/',function(req,res){
	res.render('index.html',{name:123});
});

/* 
	当以post请求时，可以与get请求共用一个路径
 */
//配置body-parser中间件，专门用来解析post
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.post('/',functoin(req,res){
	/* 
		1、获取表单post请求体数据
		2、处理
		3、发送响应
	
		req.query只能拿到get请求参数
		console.log(req.query)
		
		在express中获取post请求数据
		1、引入第三方包body-parser
	 */
	var element=req.body;
	res.redirect('/')
})

//修改默认的views视图渲染存储目录
app.set('views','./xxx/')

app.listen(3000,function(){
	console.log('express app is running');
});