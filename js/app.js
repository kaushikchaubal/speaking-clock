responsiveVoice.OnVoiceReady = function() {
    console.log("Speaking clock loaded successfully");
    startTimeDisplayer();
};

function startTimeDisplayer() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var hoursWithMinutes = pad(hours) + ":" + pad(minutes);
    var time = hoursWithMinutes + ":" + pad(seconds);

    document.getElementById("time").innerHTML = time;
    if (seconds == "00") {
        responsiveVoice.speak("The Time is " + hoursWithMinutes);
    }

    setTimeout(startTimeDisplayer, 1000);
}

function pad(number) {
    var result = number + "";
    while (result.length < 2) result = "0" + result;
    return result;
}