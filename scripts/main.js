/*
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
document.querySelector("html").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
});
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let pic1_src = "images/beginner-site-scripted.png"
    let pic2_src = "images/website-drawing-scan.png"
    let mySrc = myImage.getAttribute('src');
    if(mySrc === pic1_src) {
      myImage.setAttribute('src', pic2_src);
    } else {
      myImage.setAttribute('src', pic1_src);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
    setUserName();
 }