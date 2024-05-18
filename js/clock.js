const clock = document.querySelector("#clock");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

getclock(); // 페이지가 로드되면 1초뒤에 실행되기에 먼저 한 번 실행함
setInterval(getclock, 1000);