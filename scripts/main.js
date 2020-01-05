//测试函数
function multiply(num1, num2) {
	let reslut = num1 * num2;
	return reslut;
}

//测试注释
// let myText = "Hello " + "world!";
// let myHeading = document.querySelector('h1');
// if (myText === "Hello world!") {
// 	myHeading.textContent = myText;
// }
// else {
// 	myHeading.textContent = "Mozilla!";
// }

// document.querySelector('html').onclick = function() {
// 	alert('别戳我，我怕疼！');
// }

let myImg = document.querySelector('img');
myImg.onclick = function() {
	let mySrcImg = myImg.getAttribute('src');
	if ( mySrcImg === 'images/firefox.jpg') {
		myImg.setAttribute('src', 'images/firefox2.jpg');
	}
	else {
		myImg.setAttribute('src', 'images/firefox.jpg');
	}
}

let myBtn = document.querySelector('button');
let myHead = document.querySelector('h1');

function setUserName() {
	let myName = prompt('请输入你的名字:');
	if (!myName || myName === null ) {
		setUserName();
	}
	else {
		localStorage.setItem('name', myName);
		myHead.textContent = 'Mozilla 酷毙了! ' + myName;	
	}
}

if ( !localStorage.getItem('name')) {
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHead.textContent = 'Mozilla 酷毙了！ ' + storedName;
}

myBtn.onclick = function() {
	setUserName();
}
