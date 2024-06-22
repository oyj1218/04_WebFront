// window.setTimeout(함수, 지연시간(ms))
document.getElementById("btn1").addEventListener("click", function(){
    
    setTimeout(function(){
       alert("3초 후 출력 확인!"); 
    }, 3000 );

})

// window.setInterval(함수, 지연시간(ms))
let interval; // setInterval을 저장하기 위한 전역 변수

// setInterval(함수, 지연시간(ms))
function clockFn(){
    const clock = document.getElementById("clock");
    clock.innerHTML = currentTime(); // 현재 시간 화면에 출력

    // 지연 시간 마다 반복(첫 반복도 지연 시간 후에 시작)
    // -> 페이지 로딩 후 1초 후부터 반복(지연 -> 함수 -> 지연 -> 함수)
    interval = setInterval(function(){
        clock.innerHTML = currentTime();
    }, 1000);
}

// 현재 시간 문자열로 변환 함수
function currentTime(){
    const now = new Date(); // 

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hour < 10)   hour = "0" + hour;
    if(min < 10)    min = "0" + min;
    if(sec < 10)    sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}

// clearInterval
document.getElementById("stop").addEventListener("click", function(){
    clearInterval(interval);
})

clockFn(); // 함수 호출