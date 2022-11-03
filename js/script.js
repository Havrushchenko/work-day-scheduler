// Display current day and time at the top of the planer
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay);

// Save task by clicking on button 
$(".saveBtn").click(function() {
    var text = $(".description").val()
    console.log(text);
});
