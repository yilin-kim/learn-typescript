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
