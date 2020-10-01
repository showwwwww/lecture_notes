//Node中的JavaScript
/* 
	核心模块
	Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了
	一个具名的核心模块中了。例如文件操作的fs核心模块，http服务构建的http模块，
	path路径操作模块，os操作系统模块
 */
//用来获取机器信息的
var os=require('os');
console.log(os.cpus());
//用来获取路径的
var path=require('path');