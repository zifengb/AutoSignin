// 默认要打开的URL
var newUrl = "http://wenku.baidu.com/task/browse/daily";
// cookie url
var cookieUrl = "http://wenku.baidu.com/task/browse/daily";
// 日期
var date = null;

function getCookie(cookies){

	console.log(cookies);

	console.log(Number(new Date()))

	// cookie不存在，或者与日期不一致则打开默认URL
	if(cookies == null || cookies.value != date){
		// 设置浏览器cookie
		chrome.cookies.set(
			setCookieObj(cookieUrl,"loginDate",date,Number(new Date()))
		);
		// 打开URL
		window.open(newUrl);
	}else{
		console.log(cookies.value);
	}
}

function setCookieObj(url,name,value,expirationDate){
	// 返回要设置的cookie对象
	return {
		"url":url,
		"name":name,
		"value":value,
		"expirationDate":expirationDate
	}
}

window.onload = function (){
	//日期
	date = new Date();
	console.log(date);
	date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	console.log(date);


	// var getCookieByObj = {"url":cookieUrl,"name":"loginDate"};
	// 1.操作cookie
	// chrome.cookies.get(getCookieByObj,getCookie);
	
	// 2.操作chrome.storage

	chrome.storage.sync.get('loginDate',function(obj){

		console.log(JSON.stringify(obj))

		if(JSON.stringify(obj).indexOf(date) === -1){
			// 打开URL
			window.open(newUrl);
		}


	})


	
}