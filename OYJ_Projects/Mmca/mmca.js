let nowZoom = 100;

// 화면크기 축소
function zoomOut() {
  nowZoom = nowZoom - 10;
    // 화면크기 최대 축소율 70%
    if(nowZoom <= 70){
      nowZoom = 70; 
    }   
    zooms();
}

// 화면크기 확대
function zoomIn() {
  nowZoom = nowZoom + 10;
    
    // 화면크기 최대 확대율 200%
    if(nowZoom >= 200){
      nowZoom = 200;
    }
    zooms();
}

// 원래 화면크기로 되돌아가기
function zoomReset() {
  nowZoom = 100;
    zooms();
}

function zooms() {
   document.body.style.zoom = nowZoom + "%";
   if(nowZoom == 70) {
      alert("더 이상 축소할 수 없습니다.");   // 화면 축소율이 70% 이하일 경우 
   }
   if(nowZoom == 200) {
      alert("더 이상 확대할 수 없습니다.");   // 화면 확대율이 200% 이상일 경우 
   }
}
