/* 
	原生的http在某些方面不足以应对我们的开发需求，
	所以需要使用框架来加快我们的开发效率，
	框架的目的就是提高效率，让我们的代码高度统一
	
	在Node中，有很多Web开发框架，我们这里以学习express为主
	htttps://expressjs.com/
 */
var express=require('express');

//创建服务器应用程序
var app=express();

//当服务器收到get请求 / 时，执行回调函数
app.get('/',function(req,res){
	res.send('hello express!');
});
//使用模板引擎
app.engine('art',require('express-art-template'));
app.set('view option',{
	debug:process.env.NODE_ENV !==='production'
});
app.get('/',function(req,res){
	res.render('index.html',{
		user:'xxx',
		tags:['art','template','node.js']
	});
});

//公开指定目录
//直接通过public/xx的方式访问public目录中的所有资源
app.use('/public/',express.static('./小练习/public/'))

//相当于server.listen
app.listen(3000,function(){
	console.log('app is running at port 3000.');
})