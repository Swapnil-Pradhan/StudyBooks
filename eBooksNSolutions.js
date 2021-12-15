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

var SwipeStart, SwipeMove;
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
var blur = document.getElementById("blur");
var manu = document.getElementById("manu");
blur.style.width="100%";
blur.style.height="100%";
document.getElementById("body").style.overflow="hidden";
blur.style.opacity="1";
manu.style.width="50%";
document.getElementById("SOLUTIONS").style.position="sticky";
manu.style.border="4px solid orange";
manu.style.height="95%";
manu.style.boxShadow="0 0 0 0 rgba(0, 0, 0, 0.5), 4px 6px 13px 0 rgba(0, 0, 0, 1.5)";
}

function closeNav(){
var manu = document.getElementById("manu");
var blur = document.getElementById("blur");
blur.style.width="0";
blur.style.height="0";
document.getElementById("body").style.overflow="auto";
blur.style.opacity="0";
manu.style.width="0";
document.getElementById("SOLUTIONS").style.position="fixed";
manu.style.boxShadow="0";
manu.style.border="0";
}

var OriginalPosition = 0;
function hideHeading(){
var scrol = document.querySelector('.scrollTop');
var solution = document.getElementById("SOLUTIONS");
scrol.classList.toggle("visible" , window.scrollY > 500)
if ((document.body.getBoundingClientRect()).top > OriginalPosition){
solution.style.opacity="1";
solution.style.height="50px";
document.getElementById("rmenu").style.position="fixed";
}
else if((document.body.getBoundingClientRect()).top < OriginalPosition){
solution.style.height="0";
document.getElementById("rmenu").style.position="relative";
setTimeout(()=>{
solution.style.opacity="0";
},400)
}
OriginalPosition=(document.body.getBoundingClientRect()).top;
};

function scrollToTop(){
window.scrollTo({
top: 0,
behavior: 'smooth'
})
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