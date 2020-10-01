/* 
	student.js
	数据操作文件模块
	职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs=require('fs');

var dbpath='./data/db.json'
/* 
	获取所有学生列表
	return []
 */
//如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
exports.find=function(callback){
	fs.readFile(dbpath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		callback(null,JSON.parse(data).students);
	});
}

/* 
	添加保存学生
 */
exports.save=function(student,callback){
	fs.readFile(dbpath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		
		//处理id唯一不重复
		student.id=students[students.length-1].id+1;
		
		//把用户传递的对象保存到数组中
		students.push(student);
		
		//把对象数据转换成字符串
		var fileData=JSON.stringify({
			students:students
		})
		
		//把字符串保存到文件中
		fs.writeFile(dbpath,fileData,function(err){
			if(err){
				callback(err);
			}
			callback(null);
		})
	})
}

/* 
	更新保存学生
 */
exports.update=function(student,callback){
	fs.readFile(dbpath,'utf8',function(err,data){
		if(err){
			callback(err);
		}
		var students=JSON.parse(data).students;
		student.id=parseInt(student.id);
		//ES6中的一个数组方法：find
		//需要接受一个函数作为参数
		//当某个遍历项符合 item.id===student.id条件的时候，		
		//find会终止遍历，同时返回遍历项
		var stu=students.find(function(item){
			return item.id===student.id;
		})
		
		//遍历拷贝对象
		for(var key in student){
			stu[key]=student[key];
		}
		
		var fileData=JSON.stringify({
			students:students
		})
		
		fs.writeFile(dbpath,fileData,function(err){
			if(err){
				return callback(err);
			} 
			callback(null);
		 })
	})
}

/* 
	删除学生
 */
exports.delete=function(id,callback){
	//1、获取要删除的id
	//2、根据id执行删除操作
	//3、根据操作结果发送响应数据
	id=parseInt(id);
	fs.readFile(dbpath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		//findIndex方法专门用来根据条件查找元素的下标
		var deleteId=students.findIndex(function(item){
			return item.id===id;
		})
		students.splice(deleteId,1);
		var fileData=JSON.stringify({
			students:students
		});
		fs.writeFile(dbpath,fileData,function(err){
			if(err){
				return callback(err);
			}
			callback(null);
		})
	})
}

/* 
	根据id获取学生对象
 */
exports.findById=function(id,callback){
	fs.readFile(dbpath,'utf8',function(err,data){
		if(err){
			return callback(err);
		}
		var students=JSON.parse(data).students;
		
		stu=students.find(function(item){
			return item.id===id;
		});
		callback(null,stu);
	})
}