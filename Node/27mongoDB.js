/* 
	使用第三方mongoose
 */
var mongoose =require('mongoose');
//链接MongoDB数据库
mongoose.connect('mongodb://localhost/test');

mongoose.Promise=global.Promise;

//创建一个模型
//就是在设计数据库
//MongoDB是动态的，非常灵活，只需要在代码中设计数据库
//mongoose这个包就可以让你的设计编写过程变得非常简单
var Cat=mongoose.model('Cat',{name:String});

//实例化一个Cat
var Kitty=new Cat({name:'Zildjian'});

//持久化保存kitty实例
Kitty.save(function(err){
	if(err){
		console.log(err);
	}else{
		console.log('meow');
	}
})
/* 
	MongoDB数据库的基本概念
	数据库
		可以有多个数据库
	集合
		一个数据库可以有多个集合（表）
	文档
		一个集合中可以有多个文档（表记录）
		文档结构很灵活，没有任何限制
	MongoDB非常灵活，不需要像MySQL一眼先创建数据库、表、设计表结构
		当需要插入数据的时候，只需指定数据库、集合进行操作
		一切都由MongoDB自动完成
	{
		qq:{
			users:[
				{},
				{},
				{},
				{}
			]
		}
		products:{
			[],
			...
		},
		taobao:{
			
		},
		baidu:{
			
		}
	}
 */