function myFunction(){
document.getElementById("loading").style.opacity="0";
setTimeout(()=>{
document.getElementById("loading").style.display="none";
},999)
window.scrollTo({
top: 0,
})
};

function scrollToBottom(){
window.scrollTo({
top: 99999,
behavior: 'smooth'
})
}

var SwipeStart ,SwipeMove;
function swipeStart(evt){
SwipeStart = evt.touches[0].clientX;
}
function swipeMove(evt){
SwipeMove = evt.touches[0].clientX;
}
function swipeEnd(){
if(SwipeStart+175 < SwipeMove){
openNav();
}
else if(SwipeStart-175 > SwipeMove){
closeNav();
}
}

function openNav(){
document.getElementById("blur").style.width="100%",
document.getElementById("blur").style.height="100%",
document.getElementById("blur").style.opacity="1",
document.getElementById("body").style.overflow="hidden",
document.getElementById("SOLUTIONS").style.position = "sticky";
document.getElementById("manu").style.width="50%",
document.getElementById("manu").style.border="4px solid orange",
document.getElementById("manu").style.height="95%",
document.getElementById("manu").style.boxShadow="0 0 0 0 rgba(0, 0, 0, 0.5), 4px 6px 13px 0 rgba(0, 0, 0, 1.5)";
}

function closeNav(){
document.getElementById("blur").style.width="0",
document.getElementById("blur").style.height="0",
document.getElementById("blur").style.opacity="0",
document.getElementById("body").style.overflow="auto",
document.getElementById("manu").style.width="0",
document.getElementById("SOLUTIONS").style.position = "fixed";
document.getElementById("manu").style.boxShadow="0",
document.getElementById("manu").style.border="0";
}

var OriginalPosition = 0;
function hideHeading(){
var scrol= document.querySelector('.scrollTop');
scrol.classList.toggle("visible" , window.scrollY > 500)
if ((document.body.getBoundingClientRect()).top > OriginalPosition){
document.getElementById("SOLUTIONS").style.opacity="1";	document.getElementById("SOLUTIONS").style.height="50px";
document.getElementById("rmenu").style.position="fixed";
}
else if((document.body.getBoundingClientRect()).top < OriginalPosition){
document.getElementById("SOLUTIONS").style.height="0";
document.getElementById("rmenu").style.position="relative";
setTimeout(()=>{
document.getElementById("SOLUTIONS").style.opacity="0";
},400)
}
OriginalPosition = (document.body.getBoundingClientRect()).top;
};

function scrollToTop(){
window.scrollTo({
top: 0,
behavior: 'smooth'
})
}

function notab(){
if (confirm("Are you sure?")==true){
window.close();
setTimeout(()=>{
navigator.vibrate(50);
document.getElementById("support").play();
alert("Exit is not supported by this browser!");
},999)
}
}

function share(){
navigator.share({
title: 'StudyBooks',
text: 'Install StudyBooks to get all NCERT eBooks & Solutions for free.',
url: 'https://swapnil-pradhan.github.io/StudyBooks/StudyBooks.apk'
}).then(()=>{
alert("Thanks for sharing!")
})
}
