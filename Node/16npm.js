/* 
	node package manager
	npm命令行工具
		npm的第二层含义就是一个命令行工具，只要你安装了node就已经安装了npm
		npm --version 查看版本
		npm isntall --global npm
		npm init
			npm init -y 可以跳过向导，快速生成
		npm install 包名
			npm install 包名 --save
			下载并且保存依赖项（package.json文件中的dependencies选项）
			npm i -S 包名
		npm uninstall 包名
			只删除，如果有依赖项会依然保存
			npm un -S 包名 同时删除依赖信息
		npm --help
		
	package.json
	我们建议每一个项目都要一个package.json文件（包描述文件）
	
	npm init 以向导的方式创建一个新项目
	version 版本
	description 描述
	entry point 入口
	test command 
	git repository 仓库地址
	keywords
	author 作者
	license ISC 开源许可证
	
	建议每个项目的根目录下都有一个package.jason文件
	在下载模块的时候加上 --save 保存一个包信息
	
	解决npm被墙问题
	安装淘宝的cnpm
	http://npm.taobao.org/
	安装cnpm淘宝镜像
	npm install --global cnpm
	更改路径
	npm install jquery --registry=http://npm.taobao.org/
	永久更改下载路径no
	npm config set registry https://registry.npm.taobao.org/
 */