$(document).ready(function () {
    //setting up current date and time
    var today = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(today);
    $("#currentDay").append(today); //appending currentdate and time  to p
    //  var currentTime = moment().format("HH:ss"); //current time
    // console.log(currentTime);
});
