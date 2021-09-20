$(document).ready(function () {
    //setting up current date and time
    var today = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(today);
    $("#currentDay").append(today); //appending currentdate and time  to p
    //  var currentTime = moment().format("HH:ss"); //current time
    // console.log(currentTime);

    function timeChecker() {
        var currentTime = moment().hour(); //current time
        console.log(currentTime, "currentTime");
        console.log(typeof currentTime);
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id"));
            console.log(blockTime, "blocktime");
            //  console.log(typeof blockTime);
            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    timeChecker();
    var text8AM = $("#8AMtext");
    var text9AM = $("#9AMtext");
    var text10AM = $("#10AMtext");
    var text11AM = $("#11AMtext");
    var text12PM = $("#12PMtext");
    var text1PM = $("#1PMtext");
    var text2PM = $("#2PMtext");
    var text3PM = $("#3PMtext");
    var text4PM = $("#4PMtext");
    var text5PM = $("#5PMtext");
    //updating plans to local storage as key value pair key-time,Action-textboxvalue
    $(".saveBtn ").click(function () {
        localStorage.setItem("8AM", text8AM.val());
        localStorage.setItem("9AM", text9AM.val());
        localStorage.setItem("10AM", text10AM.val());
        localStorage.setItem("11AM", text11AM.val());
        localStorage.setItem("12PM", text12PM.val());
        localStorage.setItem("1PM", text1PM.val());
        localStorage.setItem("2PM", text2PM.val());
        localStorage.setItem("3PM", text3PM.val());
        localStorage.setItem("4PM", text4PM.val());
        localStorage.setItem("5PM", text5PM.val());
    });

    $("#8AMtext").append(localStorage.getItem("8AM"));
    $("#9AMtext").append(localStorage.getItem("9AM"));
    $("#10AMtext").append(localStorage.getItem("10AM"));
    $("#11AMtext").append(localStorage.getItem("11AM"));
    $("#12PMtext").append(localStorage.getItem("12PM"));
    $("#1PMtext").append(localStorage.getItem("1PM"));
    $("#2PMtext").append(localStorage.getItem("2PM"));
    $("#3PMtext").append(localStorage.getItem("3PM"));
    $("#4PMtext").append(localStorage.getItem("4PM"));
    $("#5PMtext").append(localStorage.getItem("5PM"));
});
