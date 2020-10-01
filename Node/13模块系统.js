/* 
	什么是模块化
		文件作用域
		通信规则
			加载require
			导出
	CommonJS模块规范
		在Node中的JavaScript还有一个总要概念：模块系统
			模块作用
			使用require方法来加载模块
			使用exports接口对象用来导出模块中的成员
 */
var foo='bar';

function add(x,y){
	return x+y;
}
//将想要提供外部访问的成员赋值给exports对象
//解决了变量名冲突的问题
exports.add=add;
//可以通过多次为这个对象添加成员
exports.str='hello';
//当需要直接得到一个方法，而非对象时,该方法只能导出一个
//成员，后者会覆盖前者
module.exports=add;
/* 
	在Node中，每个模块内部都有一个自己的module对象
	该module对象中，有一个成员叫：exports也是一个对象
	如果需要对外导出成员，只需要把导出的成员挂载到exports
	Node为了简化操作，专门提供了一个操作：exports=module.exports
	
	var module={
		exports:{
			
		}
	}
	默认在代码的最后一句：
	return module.exports
 */