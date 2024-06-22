document.getElementById("inputId").addEventListener("keyup", function(){
    const span = document.getElementById("inputIdResult");
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,10}$/;
    if(regExp.test(this.value)){
        // #inputId 작성된 값이 유효한 경우
        span.innerText = "사용 가능한 아이디입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "사용 불가능한 아이디입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
})
document.getElementById("inputPw").addEventListener("keyup", function(){
    const span = document.getElementById("inputPwResult");
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    if(regExp.test(this.value)){
        // #inputId 작성된 값이 유효한 경우
        span.innerText = "사용 가능한 비밀번호입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "사용 불가능한 비밀번호입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
})
document.getElementById("inputPw2").addEventListener("keyup", function(){
    const span = document.getElementById("inputPw2Result");
    var p1 = document.getElementById('inputPw').value;
    var p2 = document.getElementById('inputPw2').value;
    if(p1 === p2){
        // #inputId 작성된 값이 유효한 경우
        span.innerText = "일치합니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "일치하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
})




document.getElementById("inputName").addEventListener("keyup", function(){
    const span = document.getElementById("inputNameResult");
    const regExp = /^[가-힣]{2,5}$/;

    // 유효성 검사
    if(regExp.test(this.value)){
        // #inputName에 작성된 값이 유효한 경우
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "유효하지 않는 이름 형식입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
    
    // 빈칸인지 검사
    // 빈칸이라면 span에 작성된 내용 초기화(삭제)
    // (-> 이름을 쓰고 지웠을 때 처음 화면처럼 보여야 함)
    if(this.value.trim().length == 0){
        span.innerText = "";
    }
})

document.getElementById("inputEmail").addEventListener("keyup", function(){
    const span = document.getElementById("inputEmailResult");
    const regExp = /^([a-z0-9]{1,})$/;

    // 유효성 검사
    if(regExp.test(this.value)){
        // #inputName에 작성된 값이 유효한 경우
        span.innerText = "유효한 이메일 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "유효하지 이메일 형식입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
    
    // 빈칸인지 검사
    // 빈칸이라면 span에 작성된 내용 초기화(삭제)
    // (-> 이름을 쓰고 지웠을 때 처음 화면처럼 보여야 함)
    if(this.value.trim().length == 0){
        span.innerText = "";
    }
})
document.getElementById("inputPhone").addEventListener("keyup", function(){
    const span = document.getElementById("inputPhoneResult");
    const regExp = /^\d{3}-\d{3,4}-\d{4}$/;

    // 유효성 검사
    if(regExp.test(this.value)){
        // #inputName에 작성된 값이 유효한 경우
        span.innerText = "유효한 번호 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";

    } else{
        span.innerText = "유효하지 번호 형식입니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
    
    // 빈칸인지 검사
    // 빈칸이라면 span에 작성된 내용 초기화(삭제)
    // (-> 이름을 쓰고 지웠을 때 처음 화면처럼 보여야 함)
    if(this.value.trim().length == 0){
        span.innerText = "";
    }
})


