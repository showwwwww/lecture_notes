/* 
	可以用node非常轻松的构建一个web服务器
	在node中专门提供了一个核心模块：http
	http这个模块的职责就是伴你创建编写服务器
 */

//1、加载http核心模块
var http=require('http');

//2、使用http.createServer()方法创建一个web服务器
//	返回一个Server实例
var server=http.createServer()

/* 
	服务器功能
		提供服务：对数据的服务
		发请求
		接受请求
		处理请求
		给反馈（发送响应）
 
	3、注册request请求事件，当客户端请求过来，会自动触发服务器的request请求事件，
	执行第二个参数：回调函数
		request请求事件处理函数需要接受两个参数：
			request请求对象
				请求对象可以用来获取客户端的一些请求信息，例如请求路径
			response响应对象
				响应对象可以用来给客户端发送响应信息
*/
server.on('request',function(request,response){
	//request.url属性可以接收到客户端发送的路径
	console.log('收到客户端的请求了，请求路径是：'+request.url);
	//response 对象有一个方法：write可以用来给客户端发送响应数据
	//write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待
	response.write('hello');
	//结束write，可以呈现给用户
	response.end();
});
//4、绑定端口号，启动服务器
server .listen(3000,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问')
});