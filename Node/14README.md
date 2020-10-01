#JQuery的each和原生的JavaScript方法forEach
	-EcmaScript 5 提供的
		+不兼容IE8
	-JQuery的each由JQuery这个第三方库提供
		+JQuery2以下的版本时兼容IE8的
		+它的each方法主要用来遍历JQuery实例对象（伪数组）
		+同时它也可以作为低版本浏览器中forEach替代品
		+JQuery的实例对象不能使用forEach方法，如果想要使用必须转为数组才可以使用
		+[].slice.call(jQuery实例对象)