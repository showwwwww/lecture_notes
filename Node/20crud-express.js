var express=require('express');
var fs=require('fs');

var app=express();

app.engine('html',require('express-art-template'));

app.set('views','./data');
app.use('/node_modules/',express.static('./node_modules/'));
app.use('/public/',express.static('./data/public/'));

app.get('/',function(req,res){
	//reaFile的第二个参数时可选的，进行编码转换
	fs.readFile('./data/db.json','utf8',function(err,data){
		if(err){
			return res.status(500).send('Server err.');
		}	
		
		var students=JSON.parse(data).students
	
		res.render('index.html',{
			fruits:[
				'苹果',
				'香蕉',
				'橘子'
			],
			students:students
		});
	});
});

app.listen(3000,function(){
	console.log('running...');
});
