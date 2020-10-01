//	1、使用require方法加载fs核心模块
var fs=require('fs');
/* 
	2、读取文件
		第一个参数就是要读取的文件路径
		第二个参数就是一个回调函数
			回调函数有两个参数，error和data
				Error
					如果读取失败，error就是错误对象
					如果读取成功，error就是null
				Data
					如果读取成功，data就是读取到的数据
					如果读取失败，error就是错误对象
*/
fs.readFile('./data/radTest',function (error,data) {
	//判断异常
	if(error){
		console.log('fail');
	}else{
		console.log(data);
	}
});