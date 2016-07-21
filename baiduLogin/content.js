var localUrl = window.location.href;
// 签到按钮
var loginBtn = document.getElementsByClassName('js-signin-btn')[0];

var disableInput = document.getElementById('v_code');

console.log(loginBtn)
console.log(disableInput)
console.log(localUrl)

//日期
var rencentDate = new Date();
rencentDate = rencentDate.getFullYear()+"-"
				+(rencentDate.getMonth()+1)+"-"
					+rencentDate.getDate();


// function isClose(){
// 	var loginInfo = loginBtn.innerHTML;
// 	if(loginInfo == '已签到' || loginInfo == (new Date().getDate())){
// 		window.close();
		
// 		setTimeout(function (){
// 			window.location.href = localUrl+'#signin';
// 		},1000);
// 	}
// 	setTimeout(isClose,5000);
// }


function logined(text){
	if(text == '已签到' || text == (new Date().getDate())){

		chrome.storage.sync.set({'loginDate' : rencentDate} , function (){
			console.log('chrome extension data stored');
		})
		
		window.location.href = localUrl+'#signin';
	}else{

		loginBtn.click();

		// loginBtn.className = 'g-btn g-btn-disable';

		disableInput.click();

		setTimeout(function (){
			window.location.href = localUrl+'#signin';
		},3000);

		// isClose();
	}
}


// 输出当前日期信信息
console.log(rencentDate);
// 输出签到按钮的文本内容
console.log(loginBtn.innerHTML);

logined(loginBtn.innerHTML);


