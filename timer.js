const timer = document.querySelector("#time");

function updateTime(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2,"0");
    const min = String(now.getMinutes()).padStart(2,"0");
    const sec = String(now.getSeconds()).padStart(2,"0");

    timer.innerText = `${hour}:${min}:${sec}`;
}
updateTime();
setInterval(updateTime, 1000);