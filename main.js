window.onload = function() {
    var countDownDate = new Date().getTime() + 21962000; // 6 hours, 10 minutes, 20 seconds in milliseconds

    var x = setInterval(function() {

        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var timeRemaining = countDownDate - now;

        // Calculate the hours, minutes, and seconds remaining
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the time remaining
        document.getElementById("timer").innerHTML = hours + "h "
        + minutes + "m " + seconds + "s ";

        // If the timer has expired, display "EXPIRED" and clear the interval
        if (timeRemaining < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000); // Update every second
}
// الحصول على التاريخ والوقت الحالي
var currentDateTime = new Date();

// إضافة 4 أيام إلى التاريخ الحالي
var futureDateTime = new Date(currentDateTime.getTime() + (4 * 24 * 60 * 60 * 1000));

// تحويل التاريخ الجديد إلى سلسلة نصية وعرضه مع اسم اليوم في خانة واحدة على الصفحة
document.getElementById("dateTime").innerHTML = futureDateTime.toLocaleString('ar-EG', { weekday: 'long', month: 'long', day: 'numeric' });
document.getElementById("dateTime").style.color = "black"
document.getElementById("dateTime").style.fontWeight = "400"