const WEEK = ["SUN", "MON" ,"TUE", "WED", "THURS", "FRI", "SAT"];
function updatetime(){
    var now = new Date();

    document.getElementById("time").innerHTML =
    zeroPadding(now.getHours(),2) + ":" +
    zeroPadding(now.getMinutes(),2) + ":" +
    zeroPadding(now.getSeconds(),2);

    document.getElementById("date").innerHTML =
    now.getFullYear() + "-" +
    zeroPadding(now.getMonth(),2) + "-" +
    zeroPadding(now.getDate(),2) + "  " +
    WEEK[now.getDay()];
}
updatetime();
setInterval(updatetime,1000);

function zeroPadding(num, digit){
    return String(num).padStart(digit,"0");
}