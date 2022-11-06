// Display current day and time at the top of the planer
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").text(currentDay);

// Save task by clicking on button 
$(document).ready(function () {
    // Click listener 
    $(".saveBtn").on("click", function () {
        // Get values from textarea class
        var text = $(this).siblings(".textarea").val();
        // Get values from time block
        var time = $(this).parent().attr("id");
        // Alert when user leave input field empty and click on saveBtn
        if (text === '') {
            alert("No task to save!")
        } else {
            // Save data in local storage
            localStorage.setItem(time, text);
            console.log(text, time);
        }
    })

    function timeTracker() {
        // Loop over time blocks
        $(".time-block").each(function () {
            // Get current number of hours.
            var currentHour = moment().hours();
            // 'parseInt' converts string numbers into numbers, 
            //  the attr grabs the id of .time-block
            //  then we split the 'hour' and grab the first index which is the number
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            // Load saved data from local storage
            var id = $(this).attr('id')
            $(this).children('textarea').val(localStorage.getItem(id))
            // Add the classes for background indicators and chanche a background color
            // If (blockTime < currentHour) then add .past class to the textarea of .time-block
            if (blockTime < currentHour) {
                $(this).addClass("past");
            }
            // If (blockTime === currentHour) then remove the .past class and add .present class to the textarea of .time-block
            else if (blockTime === currentHour) {
                $(this).addClass("present");
            }
            // Remove both .past and present classes and add .future class to the textarea of .time-block
            else {
                $(this).addClass("future");

            }
        })
    }
    timeTracker();
})








