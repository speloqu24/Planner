// variables for current date/time - this date/time will target the "currentDay" ID
// moment.js doesn't seem to be working for me i.e. var today = moment();
var currentHour = moment().hours()
currentHour = parseInt(currentHour)
// verified number data type
// console.log( typeof currentHour)
// console.log(currentHour)
document.getElementById("currentDay").innerHTML = "Current hour: " + currentHour;


// function timeCondition(){

//     var ninetime = document.getElementById("9")
//     console.log(ninetime)
// }

var task9 = document.getElementById("btn9");
var taskTxt9 = document.getElementById("task9");

task9.addEventListener("click", function (event){
event.preventDefault();
var nineAM = taskTxt9.value
localStorage.setItem("nineAM", nineAM);
})

var planner9get = localStorage.getItem("nineAM");
taskTxt9.textContent = planner9get;


var task10 = document.getElementById("btn10");
var taskTxt10 = document.getElementById("task10");

task10.addEventListener("click", function (event){
event.preventDefault();
var tenAM = taskTxt10.value
localStorage.setItem("tenAM", tenAM);
})

var planner10get = localStorage.getItem("tenAM");
taskTxt10.textContent = planner10get;


// 11

var task11 = document.getElementById("btn11");
var taskTxt11 = document.getElementById("task11");

task11.addEventListener("click", function (event){
event.preventDefault();
var elevenAM = taskTxt11.value
localStorage.setItem("elevenAM", elevenAM);
})

var planner11get = localStorage.getItem("elevenAM");
taskTxt11.textContent = planner11get;

// 12

var task12 = document.getElementById("btn12");
var taskTxt12 = document.getElementById("task12");

task12.addEventListener("click", function (event){
event.preventDefault();
var twelvePM = taskTxt12.value
localStorage.setItem("twelvePM", twelvePM);
})

var planner12get = localStorage.getItem("twelvePM");
taskTxt12.textContent = planner12get;


// 1
var task1 = document.getElementById("btn1");
var taskTxt1 = document.getElementById("task1");

task1.addEventListener("click", function (event){
event.preventDefault();
var onePM = taskTxt1.value
localStorage.setItem("onePM", onePM);
})

var planner1get = localStorage.getItem("onePM");
taskTxt1.textContent = planner1get;

// 2
var task2 = document.getElementById("btn2");
var taskTxt2 = document.getElementById("task2");

task2.addEventListener("click", function (event){
event.preventDefault();
var twoPM = taskTxt2.value
localStorage.setItem("twoPM", twoPM);
})

var planner2get = localStorage.getItem("twoPM");
taskTxt2.textContent = planner2get;

// 3
var task3 = document.getElementById("btn3");
var taskTxt3 = document.getElementById("task3");

task3.addEventListener("click", function (event){
event.preventDefault();
var threePM = taskTxt3.value
localStorage.setItem("threePM", threePM);
})

var planner3get = localStorage.getItem("threePM");
taskTxt3.textContent = planner3get;

// 4
var task4 = document.getElementById("btn4");
var taskTxt4 = document.getElementById("task4");

task4.addEventListener("click", function (event){
event.preventDefault();
var fourPM = taskTxt4.value
localStorage.setItem("fourPM", fourPM);
})

var planner4get = localStorage.getItem("fourPM");
taskTxt4.textContent = planner4get;

// 5
var task5 = document.getElementById("btn5");
var taskTxt5 = document.getElementById("task5");

task5.addEventListener("click", function (event){
event.preventDefault();
var fivePM = taskTxt5.value
localStorage.setItem("fivePM", fivePM);
})

var planner5get = localStorage.getItem("fivePM");
taskTxt5.textContent = planner5get;


$(".time-block").each(function() {
var timeID = +($(this).attr("id"));
var hourBlock = parseInt(timeID,("-")[1])
// verified number data type
//  console.log(typeof hourBlock)
 console.log(hourBlock)


 if (currentHour > hourBlock) {
$(".time-block").addClass("past")
 } else if (currentHour === hourBlock) {
     $(".time-block").addClass("present")
 } else (currentHour < hourBlock)
     $(".time-block").addClass("future")

})