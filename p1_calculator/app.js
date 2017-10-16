// 변수 선언
var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var btn_clear = document.getElementsByClassName('btn_clear')[0];
var btn_result = document.getElementsByClassName('btn_result')[0];

// 계산기 초기화
function clear(){
  inp['result'].value = 0;
}

// 계산기 입력 처리 함수
function calc(value){
  // 입력이 들어가면 0을 지움
  if(inp['result'].value == 0){ 
    inp['result'].value = '';
  }
  // 입력값을 결과창에 출력
  inp['result'].value += value;
}

// 계산 결과 처리 함수
function my_result(){
  var result = document.forms['cal']['result'];
  var calc = eval(result.value);
  // 결과창에 표시
  inp['result'].value = calc;
}

// 이벤트 핸들러 - 숫자 및 사칙연산 버튼
for(var i = 0; i < input.length;i++){
  if(input[i].value != '=' && input[i].value !='clear'){
    input[i].onclick = function(){
      calc(this.value);
    }
  }
}

// 이벤트 핸들러 - 초기화 버튼
btn_clear.onclick = function(){
    clear();
}

// 이벤트 핸들러 - 결과 버튼
btn_result.onclick = function(){
  try{
    my_result();  
  }
  catch(err){
    var result = inp['result'];
    result.value = '입력오류';
  }
}
