###回调
+对于node异步api，要保证执行顺序使用，使用回调函数
+为了解决回调嵌套，所以ES6中新增了一个API，promise
	-Promise是一个构造函数
	-创建Promise容器
	-
	
var p1=new Promise(function(resolve,reject){
	fs.readFile('url','utf8',function(err,data){
		if(err){
			reject(err);
		}else{
			resolve(data);
		}
	});
});
p1
	.then(functio(data){
	console.log(data);
	//当p1读取成功的时候
	//当前函数中return的结果就可以在后面then中function接收到
	//当return一个Promise对象是，后续的then中的方法第一个参数会作为p2的第一个resolve
	return p2
},function(err){
	console.log('xxx',err)
})
.then(function(data){
	
})