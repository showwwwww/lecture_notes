
var mongoose=require('mongoose');

var Schema=mongoose.Schema

//连接数据库
//指定连接的数据库不需要存在，当插入第一条数据之后会被自动创建出来
mongoose.connect('mongodb://localhost/itcast');

//设计集合结构（表结构）
//字段名称就是表结构中属性名称
//值
//约束时为了保证数据的完整性，不要由脏数据
var userSchema=new Schema({
	username:{
		type:String,
		required:true//必须有
	},
	password:{
		type:String,
		required:true
	},
	email:{
		type:String
	}
});

//将文档结构发布为模型
//mongoose.model方法就是将一个架构发布为model
//第一个参数：传入一个大写名词单数字符串来表示数据库的名称
//			mongoose会自动将大写名词字符串生成小写复数的集合名称
//			例如这里的User最终会变为users集合名称
//第二个参数：架构Schema
//返回值：模型构造函数
var User=mongoose.model('User',userSchema);

//当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数据操作
var admin=new User({
	username:'admin',
	password:'123456',
	emai:'test@email.com'
});

//增加数据
/* admin.save(function(err,ret){
	if(err){
		console.log('存储失败');
	}else{
		console.log('存储成功');
		console.log(ret);
	}
}) */

//查询数据
//查询所有
/* User.find(function(err,ret){
	if(err){
		console.log('查询失败');
	}else{
		console.log(ret);
	}
}) */
//条件查询
/*
	User.findOne({
		username:'admin'
	}),function(err,ret){
		if(err){
			console.log('查询失败');
		}else{
			console.log(ret);
		}
	}
 */
//删除数据
/* 
	User.remove({
		username:'admin'
	},function(err,ret){
		if(err){
			
		}else{
			
		}
	})
 */
//更新数据
/* 
	User.findByIdandUpdate('id',{
		password:'123'
	},fcuntion(err,rat){
		
	})
 */