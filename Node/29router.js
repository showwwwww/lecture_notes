/* 
	router.js 路由模块
	职责：
		处理路由
		根据不同的请求方+请求路径设置具体的请求处理函数
 */
var fs=require('fs');
var express=require('express');
var Student=require('./28改造CRUD');
//express提供了一种更好的方式，专门用来包装路由
//1、创建一个路由容器
var router=express.Router();

//2、把路由都挂在到router容器中
router.get('/students',function(req,res){
	Student.find(function(err,students){
		if(err){
			return res.status(500).send('Server error');
		}
		res.render('index.html',{
			fruits:[
				'苹果',
				'香蕉',
				'橘子'
			],
			students:students
		})
	})
});

router.get('/students/new',function(req,res){
	res.render('new.html');
});
router.post('/students',function(req,res){
	//1、获取表单数据
	//2、处理
	//		将数据保存到db.json文件中用以持久化
	//3、发送响应
	new Student(req.body).save(function(err){
		if(err){
			return res.status(500),send('Server error');
		}
		res.redirect('/students');
	});
});

/* 
	渲染编辑学生页面
 */
router.get('/students/edit',function(req,res){
	//1、在客户端的列表页中处理链接问题（需要id参数）
	//2、获取要编辑的学生id
	//3、渲染编辑页面
	//		根据id把学生信息查出来
	//		使用模板引擎渲染页面
	
	//replace
	//字符串模式
	//	简单，但是不支持全局和忽略大小写问题
	//正则表达式模式
	//	强大，支持全局和忽略大小写
	Student.findById(req.query.id.replace(/"/g,''),function(err,student){
		if(err){
			return res.status(500).send('Server error');
		}
		res.render('edit.html',{
			student:student
		});
	}) 
	
	
});

router.post('/students/edit',function(req,res){
	 Student.findByIdAndUpdate(req.body.id.replace(/"/g,''),req.body,function(err){
		if(err){
			return res.status(500).send("Server error");
		}
		res.redirect('/students');
	}); 
});

router.get('/students/delete',function(req,res){
	Student.findByIdAndRemove(req.query.id.replace(/"/g,''),function(err,ret){
		if(err){
			return res.status(500).send('Server error');
		}
		res.redirect('/students');
	});
});

router.get('/',function(req,res){
	res.redirect('/students');
});
//3、把router导出
module.exports=router;