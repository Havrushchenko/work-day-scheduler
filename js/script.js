// Display current day and time at the top of the planer
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);
var hour = moment().hours();

// Save task by clicking on button 
$(document).ready(function () {
    $(".saveBtn").one("click", function () {
        var data = $(".textarea").val();
        console.log(data);

        // Set data to local storage
        localStorage.setItem("data", data);
        console.log("set data to local storage");
        
        // Get data from local storage
        $(".textarea").val(localStorage.getItem(".textarea"));
        console.log("get data from local storage");
    });
});

function trackTheTime() {
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        if (hour > timeBlock) {
            $(this).addClass("past");
        } else if (hour < timeBlock) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}








