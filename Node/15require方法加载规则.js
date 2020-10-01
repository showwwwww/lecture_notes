/* 
	当A require B
	B require C

	A require C时
	优先从缓存加载
	由于在B中已经加载过
	所以在A中不会重复加载
	可以拿到其中的接口对象
	这样做的目的是为了避免资源浪费
	
	判断模块标识
		路径形式的模块：使用相对路径
	
	核心模块的本质也是文件
		核心模块文件已经被编译至二进制文件中了，
		只需要按照名字来加载
	
	第三方模块
		凡是第三方模块都必须通过npm来下载
		使用的时候就可以通过require（‘包名’）的方式来进行加载才可以使用
		既不是核心模块，也不是路径形式的模块
		先找到当前文件所处目录中的node_modules目录
		node_modules/art-template
		node_moudules/art-template/package.json
		package.json文件中的main属性
		main属性中就记录了art-template的入口模块
		然后加载使用这个第三方包
		实际上最终加载的还是文件
		如果找不到，那就默认加载该目录中的index.js
		
		如果以上所有条件都不成立，则会进入上一级目录中的node_modules
		...
		直到到磁盘根目录
		如果查找都失败，则会返回错误
	
	注：一个项目有且只有一个node_modules,放在项目根目录中
	模块查找机制
		优先从缓存加载
		核心模块
		路径形式的文件模块
		第三方模块
 */