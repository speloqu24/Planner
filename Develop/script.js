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
  var button = document.createElement("button")

  hourDisplay.textContent = hours[i];
  hourDisplay.setAttribute("class", "hour col-md-1")



  txtDisplay.setAttribute("class", "description col-md-10 ")

  
  button.textContent = "SAVE"
  button.setAttribute("class", "saveBtn col-md-1")

//   txtDisplay.classList.add("textarea");

  hourDiv.append(txtDisplay);
  hourDiv.append(hourDisplay);
  hourDiv.append(button)
}

var saveTask = document.querySelector(".saveBtn");
var txt = document.querySelector(".description")

saveTask.addEventListener("click", function (event){
    event.preventDefault();
    var newTask = txt.value
    localStorage.setItem("To do", newTask)

})

var taskEntry = localStorage.getItem("newTask");
txt.textContent = taskEntry;

