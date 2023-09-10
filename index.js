

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
function updateTime() {
    let currentTime = new Date();
    let currentTimeMillis = currentTime.getTime();
    let currentUTCTime = currentTime.toUTCString();
    let d = currentTimeMillis
    const dayOfWeek = daysOfWeek[currentTime.getDay()];
    document.getElementById("demo").innerHTML = d;
    document.getElementById("day").innerHTML = dayOfWeek;
    console.log("Current time in milliseconds: " + currentTimeMillis);
    console.log("Current time in UTC: " + currentUTCTime);
 }
 
 setInterval(updateTime, 1000); // Run updateTime() every second