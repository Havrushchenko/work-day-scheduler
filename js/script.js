// Display current day and time at the top of the planer
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(currentDay);
var hour = moment().hours();

// Save task by clicking on button 
$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".textarea").val();
        var time = $(this).parent().attr("id");
        if(text === '') {
            alert("No task to save!")
        } else {
            // Save text in local storage
            localStorage.setItem(time, text);
            console.log(text, time);
        }
    })
})








