var http=require('http');

//1、创建server
var server=http.createServer();

//2、监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
	console.log('收到请求了，请求路径是：'+req.url);
	//res.write()与res.end（）的简写
	//res.end('Hello World');
	//res.end操作只能执行一次
	
	//根据不同的请求路径发送不同的响应结果
	//1、获取请求路径
	//	req.url获取到的是端口号之后的那一部分路径
	//	也就是说所有的url都是以 / 开头的
	//2、判断路径处理响应
	var url=req.url;
	/* if(url==='/'){
		res.end('sss');
	}else if(url==='/login'){
		res.end('bbb')
	}else{
		res.end('404 NOT FOUND.')
	} */
	
	if(url==='/products')
	{
		var products=[
			{
				name:'苹果X',
				price:888
			},
			{
				name:'菠萝X',
				price:444
			},
			{
				name:'香蕉x',
				price:7777
			}
		]
//响应内容只能是二进制数据或者字符串
		res.end(JSON.stringify(products));
	}
});

//3、绑定端口号，启动服务
server.listen(3000,function(){
	console.log('服务器启动成功');
});