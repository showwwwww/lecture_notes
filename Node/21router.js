/* 
	router.js 路由模块
	职责：
		处理路由
		根据不同的请求方+请求路径设置具体的请求处理函数
 */
var fs=require('fs');
var express=require('express');
var Student=require('./23student');
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
	var student=req.body;
	Student.save(student,function(err){
		if(err){
			return res.status(500),send('Server error');
		}
		res.redirect('/students');
	})
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
	Student.findById(parseInt(req.query.id),function(err,student){
		if(err){
			return res.status(500).send('Server error');
		}
		res.render('edit.html',{
			student:student
		});
	}) 
	
	
});

router.post('/students/edit',function(req,res){
	 Student.update(req.body,function(err){
		if(err){
			return res.status(500).send("Server error");
		}
		res.redirect('/students');
	}); 
});

router.get('/students/delete',function(req,res){
	Student.delete(req.query.id,function(err){
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