// 배열 확인 1
document.getElementById("btn1").addEventListener("click", function(){

    // 배열 선언 방법
    const arr1 = new Array(3); // 3칸짜리 배열 생성
    const arr2 = new Array(); // 0칸짜리 배열(비어있는 배열)

    // console.log(arr1);
    // console.log(arr2);

    // 다른 자료형 대입
    arr1[0] = "크로칸슈";
    arr1[1] = 4500;
    arr1[2] = true;
    console.log(arr1);
    
    // 0칸 배열에 대입 -> 자동으로 길이 증가
    arr2[0] = "치즈프로마쥬 퐁라떼";
    arr2[1] = 7800;
    arr2[2] = true;
    console.log(arr2);

    // 배열 선언 방법
    const arr3 = []; // 비어있는 배열(0칸)
    const arr4 = ["메론", "딸기", "수박"]; // 선언 및 초기화

    // for문으로 배열 요소 반복 접근하기
    // 1. 일반 for문
    
    // 2. 향상된 for문 (for ... of) : 배열용 향상된 for문 for(변수 of 배열)
    for(let fruit of arr4){ // arr4 배열에서 요소를 하나씩 얻어와 아이템에 대입
        console.log(fruit);
    }

})

// 배열 확인 2
document.getElementById("btn2").addEventListener("click", function() {

    // 비어있는 배열 생성
    const arr = [];

    // push() : 배열 마지막 요소로 추가
    arr.push("삼계탕");
    arr.push("삼겹살");
    arr.push("치킨");
    arr.push("마라탕");

    console.log(arr);

    // pop() : 배열 마지막 요소 꺼내오기
    console.log("꺼내온 요소 : " + arr.pop());
    console.log(arr);

    // 배열.indexOf("값") : 일치하는 값을 가진 요소의 index를 반환
    console.log("치킨 인덱스 : " + arr.indexOf("치킨"));
    console.log("엽떡 인덱스 : " + arr.indexOf("엽떡")); //-1

    // 배열.sort([정렬기준 함수]) : 배열 내 요소를 오름차순 정렬(문자열)
    const arr2 = [5,3,7,10,1];
    console.log(arr.sort()); // 문자열

    console.log(arr2.sort()); // 숫자 -> 정상 정렬X
                              // 왜? -> 문자열로 변환되어서 정렬되기 때문
                              // 문자열 정렬 기준이 기본값이다.
    // 숫자 오름차순 정렬
    console.log(arr2.sort(function(a,b){ return a-b; }))

    // 문자열로 출력
    console.log(arr.toString());
    console.log(arr.join("/"));


})