// Union Type
// 하나 이상의 타입을 사용할 수 있음
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  // type guard
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

// Union Type의 특징
// 모든 속성에 접근할 수 있다고 생각할 수 있지만, 공통 속성에만 접근할 수 있음
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  someone.name;
  // someone.skill // error
}
// askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
// askSomeone({ name: "캡틴", age: 100 });

// Intersection Type
// typeguard 필요 없음
// 개발자의 속성과 사람의 속성을 모두 가지는 새로운 유형을 요구
function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.skill;
}
// askSomeone2({ name: "캡틴", age: 100 }); //error
askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 100 });
