// <타입 추론 기본 1>
// VS Code 내장 typescript intellisense 
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    // ts 내부적으로 타입 추론
    return b + c;
}

// <타입 추론 기본 2>
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// <타입 추론 기본 3>
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K>extends Dropdown<K>{
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<number> ={
    title: 'abc',
    description: 'ab',
    value: 1,
    tag: 2
}

// Best Common Type
// 배열에 들어있는 값들의 가장 근접한 타입을 추론해서 배열의 타입을 정해준다.
let arr = [1, 2, true];
