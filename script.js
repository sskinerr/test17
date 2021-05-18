var date,input, minute;
var hour = 0;
var second = 0;
var hourIn = 0;
var secondIn = 0;
var minuteIn = 0;
var timerI = document.getElementById("timer");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hourOutL = document.getElementById("hourL");
var minutesOutL = document.getElementById("minutesL");
var secondOutL = document.getElementById("secondL");
var hourOutIn =  document.getElementById("hourIn");
var minutesOutIn = document.getElementById("minuteIn");
var secondOutIn = document.getElementById("secondIn");


clock();
setInterval("clock()",1000);
function clock(date = new Date()){
if(date.getHours() < 10){
hours.innerHTML = "0" + date.getHours();}else{
hours.innerHTML = date.getHours();}
if(date.getMinutes() < 10){
minutes.innerHTML = "0" + date.getMinutes();}else{
minutes.innerHTML = date.getMinutes()}
if(date.getSeconds() < 10){
seconds.innerHTML = "0" + date.getSeconds();}else{
seconds.innerHTML = date.getSeconds()}}

function timeInput(){
input = document.getElementById("input").value;
document.getElementById("input").value = "";
if(input > 0){timeIndicator();a()
}else{
document.getElementById("t3").innerHTML = "";
document.getElementById("t1").style.width = "100%";
timerI.style.height = "0";
timerI.style.border = "0px"
stopwatch();
setInterval("stopwatch()",1000)}}


function timeIndicator(){
timerI.style.transition = input*60 + "s linear";
timerI.style.width = "0px"}


function a(){
while (input>60) {
input = input - 60; hour++	;}
if(input == 60){hour++; input=0}
minute = input;
output();
setInterval("timer()",1000)}


function output(){
if(hour < 10){hourOutL.innerHTML = "0" + hour;
}else{hourOutL.innerHTML = hour;}
if(minute<10){minutesOutL.innerHTML="0"+minute;
}else{minutesOutL.innerHTML = minute;}
if(second<10){secondOutL.innerHTML = "0"+second;
}else{secondOutL.innerHTML = second;}
if(hourIn < 10){hourOutIn.innerHTML= "0"+ hourIn;
}else{hourOutIn.innerHTML = hourIn;}
if(minuteIn<10){minutesOutIn.innerHTML="0"+minuteIn;}else{
minutesOutIn.innerHTML = minuteIn;}
if(secondIn<10){secondOutIn.innerHTML="0"+secondIn;}else{
secondOutIn.innerHTML = secondIn;}}

function timer(){
if(minute == 0 && hour > 0){hour--; minute = 60}
if(second == 0 && minute>0){minute--; second = 60}
second--;
secondIn++;
if(secondIn == 60){minuteIn++; secondIn = 0}
if(minuteIn == 60){hourIn++; minuteIn = 0}
output();}

function stopwatch(){
secondIn++;
if(secondIn == 60){minuteIn++; secondIn = 0}
if(minuteIn == 60){hourIn++; minuteIn = 0}
if(hourIn < 10){hourOutIn.innerHTML= "0"+ hourIn;
}else{hourOutIn.innerHTML = hourIn;}
if(minuteIn<10){minutesOutIn.innerHTML="0"+minuteIn;}else{
minutesOutIn.innerHTML = minuteIn;}
if(secondIn<10){secondOutIn.innerHTML="0"+secondIn;}else{
secondOutIn.innerHTML = secondIn;}}
