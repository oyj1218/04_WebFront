// 정규 표현식 객체 생성 + 확인하기

document.getElementById("check1").addEventListener("click", function(){

    // 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");
                    // script와 일치하는 문자열이 있는지 검사하는 정규 표현식
    
    const regExp2 = /java/;
                    // 문자열 'java'와 일치하는 문자열이 있는지 검사하는 정규 표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다.";

    const str2 = "servlet/jsp(java server page)도 조만간 합니다.";

    const str3 = "java, java, java";

    console.log("regExp1.test(str1): " + regExp1.test(str1)); // true (str1 안에 script라는 문자가 있음)
    console.log(regExp1.exec(str1));


    console.log("regExp2.test(str2): " + regExp2.test(str2));
    console.log(regExp2.exec(str2));


    // 일치하는 게 없는 경우
    console.log("regExp1.test(str2): " + regExp1.test(str2));
    console.log(regExp1.exec(str2));

    // 일치하는 게 여러 개 있을 경우
    console.log("regExp2.test(str3): " + regExp2.test(str3));
    console.log(regExp2.exec(str3));

})

document.getElementById("btn1").addEventListener("click", function(){
    const div1 = document.getElementById("div1");

    div1.innerHTML=""; //문자 삭제 (div 초기화)

    // a(일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/ , apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/ , price : " + regExp1.test("price") + "<hr>"; // false
    
    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;

    div1.innerHTML += "/[abcd]/ , price : " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/ , sub : " + regExp2.test("sub") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/ , qwert : " + regExp2.test("qwert") + "<hr>"; // false
    
    
    // ^(캐럿) : 문자열의 시작 의미
    const regExp3 = /^group/; // 문자열의 시작이 "group"인지 확인

    div1.innerHTML += "/^group/ , group100 : " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/ , 100group : " + regExp3.test("100group") + "<hr>"; // false

    // $(달러) : 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 group 인자 확인

    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>"; // true

})

// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function(){
    
    // 결과 출력용 span
    const span = document.getElementById('inputNameResult');

    // 한글 2~5글자 정규 표현식(정규식)
    // [가-힣] : 한글(단일 자음, 모음 제외)
    const regExp = /^[가-힣]{2,5}$/;

    // 유효성 검사
    if(regExp.test(this.value)){
        // #inputName에 작성된 값이 유효한 경우
        span.innerHTML="유효한 이름 형식입니다.";
        span.style.color="green";
        span.style.fontWeight="bold";
    } else {
        span.innerHTML="이름 형식이 유효하지 않습니다.";
        span.style.color="red";
        span.style.fontWeight="bold";

        
    }
    // 빈칸인지 검사
    // 빈칸이라면 span에 작성된 내용 초기화(삭제)
    // (-> 이름을 쓰고 지웠을 때처럼 보여야 함)

    /* if(this.value == ""){
        span.innerHTML="";
    } */

    if(this.value.length == 0){
        span.innerHTML="";
    }

 // 주민등록번호 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", function(){
    
    const span = document.getElementById("inputPnoResult");
    
    // 주민등록번호 정규식
    // 생년월일(6)-고유번호(7)
    // const regExp = /^\d{6}\-\d{7}$/;
                   // 연도(2) 월(2) 일(2)
    
                   // 업그레이드
    const regExp = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])\-[1-4]\d{6}$/;
  
    /* 띄어쓰기 하지 마세요 */

    // () : 포획 괄호, 괄호 내부에서 대응되는 부분을 찾아 기억함
    // | : 또는

    // 월
    // 01 ~ 09 -> /0[1-9]/
    // 10 ~ 12 -> /1[0-2]/

    // (0[1-9]|1[0-2]) : 괄호 내 | 기호를 기준으로 구분되며
    // 0이 먼저 입력된 경우 다음 자리는 1~9
    // 1이 먼저 입력된 경우 다음 자리는 0~2
    
    // 일
    // 01 ~ 09 -> 0[1-9]
    // 10 ~ 19 -> 1[0-9]
    // 20 ~ 29 -> 2[0-9]
    // 30 ~ 31 -> 3[0-1]

    // (0[1-9]|1[0-9]|2[0-9]|3[0-1])
  
    // 유효성 검사
    if(regExp.test(this.value)){
        span.innerText = "유효한 주민등록번호 형식입니다."
        span.classList.remove("error"); // error 클래스 제거
        span.classList.add("confirm"); // confirm 클래스 추가
        // span.classList.toggle("confirm");
    } else{
        span.innerText = "주민등록번호 형식이 유효하지 않습니다."
        span.classList.remove("confirm"); // confirm 클래스 제거
        span.classList.add("error"); // error 클래스 추가
    }

    if(this.value.trim().length == 0){
        span.innerText = "";
    }
})
})

/* 이메일 유효성 검사, 비번 유휴성 검사 해보기 */
