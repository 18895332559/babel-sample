export default function(){
	console.log('default 关键字') ;
};

//相当于：
//export {a as default}
//这种写法可以在import的时候省略{}