// variables for current date/time - this date/time will target the "currentDay" ID
// moment.js doesn't seem to be working for me i.e. var today = moment();
var today = moment().format("LLLL");
// var now = moment().format("HH:MM")
document.getElementById("currentDay").innerHTML = today;
// document.getElementById("currentDay").innerHTML = today;

var hourDiv = document.getElementById("agenda");

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM" ];

for (var i = 0; i < hours.length; i++) {
  var hourDisplay = document.createElement("div");
  var txtDisplay = document.createElement("textarea");
  var button = document.createElement("button");

  hourDisplay.textContent = hours[i];
  hourDisplay.setAttribute("class", "row col-md-1 hour");
  hourDisplay.setAttribute("id", "hoursLoop");



  txtDisplay.setAttribute("class", "col-md-10 description");

  
  button.textContent = "SAVE";
  button.setAttribute("class", "saveBtn col-md-1");

  // txtDisplay.classList.add("textarea");

  hourDiv.append(hourDisplay);
  hourDiv.append(txtDisplay);
  hourDiv.append(button);
}

// function localStorage ( ){ 
// var hourID = document.getElementById("hoursLoop");

// var textInput = document.querySelectorAll(".description");

// var textInputLocalStorage = textInput.value;
// localStorage.setItem(hourID, textInputLocalStorage);

// // }

var saveTask = document.querySelector(".saveBtn");

saveTask.addEventListener("click", function (event){
    event.preventDefault();
    console.log("clicked")

var hourID = document.getElementById("hoursLoop");

var textInput = document.querySelectorAll(".description");

var textInputLocalStorage = textInput.value;
localStorage.setItem(hourID, textInputLocalStorage);




})

// var taskEntry = localStorage.getItem("newTask")
// textInput.textContent = taskEntry;