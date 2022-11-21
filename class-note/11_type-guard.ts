interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person {
    return { name: 'YL', age: 23, skill: 'Say Hi' }
}
let yl = introduce();
console.log(yl.skill); // 유니온 타입으로 선언된 변수는 공통된 속성만 접근 가능

// 타입 단언이 반복되는 문제점을 해결하기 위해 타입 가드를 사용
if ((yl as Developer).skill){
    let skill = (yl as Developer).skill;
    console.log(skill);
} else if((yl as Person).age){
    let age = (yl as Person).age;
    console.log(age);
}

// 타입 가드 정의
// is 키워드 사용
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(yl)){
    console.log(yl.skill);
} else {
    console.log(yl.age);
}