+npm5以后不会有package-lock.json这个文件
+当你安装包的时候，npm都会生成或者更新package-lock.json这个文件
+packge-lock.json这个文件会保存node_modules中所有包的信息
	-这样的话重新 npm install 的时候速度可以提升
+从文件来看，有一个lock称之为锁
	-这个lock是用来锁定版本的
	-如果项目以来了1.1.1版本
	-如果你重新install其实会下载最新版本而不是1.1.1
	-我们的目的就是希望可以锁住这个版本
	-所以这个packge-lock.json这个文件的另一个作用就是锁定版本号，防止自动升级新版