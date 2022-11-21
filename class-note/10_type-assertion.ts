// 타입 단언(type assertion)
// 타입스크립트보다 개발자 입장에서 더 많은 정보를 가지고 있을 때 타입스크립트에게 알려주는 것
let a;
a = 20;
a = 'a';
let b = a as string;

// DOM API 조작
// <div id='app'>hi</div>
let div = document.querySelector('.container') as HTMLDivElement;
if (div) {
    div.innerText;
}