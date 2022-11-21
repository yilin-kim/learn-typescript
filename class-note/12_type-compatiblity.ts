// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

// interface Person {
//     name: string;
// }

class Person {
    name: string;
}

let developer: Developer;
let person: Person;
// Developer 타입이 구조적으로 Person 타입을 포함하고 있기 때문에 오른쪽을 왼쪽에 할당 불가
// developer = person;

// 함수
let add = function(a: number) {
    // ...
}
let sum = function(a:number, b:number) {
    // ...
}

sum = add;
// add = sum; // 두 개의 인자를 받아야 하는 sum을 add에 할당 불가


// 제네릭
interface Empty<T>{
    //..
}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T>{
    data: T;
}
let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
// notempty1 = notempty2; // 제네릭 타입이 다르기 때문에 할당 불가
// notempty2 = notempty1;