var http=require('http');
var fs=require('fs');
var template=require('art-template');

var words=[
	{
		message:"狗小靳"
	},
	{
		message:"是只傻狗"
	},
	{
		message:"爸爸打死你"
	}
]

http.
	createServer(function(req,res){
		fs.readFile('./views/art-template练习.html',function(err,data){
			if(err){
				return res.end('404 Not Found.');
			}
			var htmlStr=template.render(data.toString(),{
				words:words
			});
			res.end(htmlStr);
		});
	})
.listen(3000,function(){
	console.log('running...')
})