//读写文件
var a=require('fs');

a.readFile('./data/readTest.txt',function(error,data){
	if(error){
		console.log('读取失败');
	}else{
		console.log(data.toString());	
	}
});

a.writeFile('./data/testOne.txt','hello Node!',function(error){
	console.log('success');
});

