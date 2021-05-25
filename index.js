const sec = document.querySelector(".sec-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60)* 360) + 90;
    min.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 24) * 360) + 90;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);