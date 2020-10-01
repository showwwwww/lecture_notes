var http=require('http');
var fs=require('fs');

var server=http.createServer();

server.on('request',function(req,res){
	//url：统一资源定位符
	//一个url对应定位一个资源
	var url=req.url;
	if(url==='/'){
		fs.readFile('./resource/index.html',function(err,data){
			if(err){
				res.setHeader('Content-Type','text/plain;charset=utf-8');
				res.end('文件读取失败');
			}else{
				//data默认是二进制数据，可以通过 .toString转为咱们能识别的字符串
				//res.end()支持两种数据类型，一种是二进制，一种是字符串
				//图片就不需要指定编码了，常说的编码一般指的是：字符编码
				res.setHeader('Content-Type','text/html;charset=utf-8');
				res.end(data);
			}
		})
	}
});

server.listen(3000,function(){
	console.log('running...')
});