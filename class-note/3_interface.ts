interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let yilin: User = {
  age: 23,
  name: "yilin",
};

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const capt = {
  name: "capt",
};
getUser(yilin);
// getUser(capt);  // 에러 발생

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ["a", "b", "c"];
// arr[0] = 10; // 에러 발생

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj["cssFile"] = "a"; // 에러 발생
Object.keys(obj).forEach(function (value) {
  console.log(value);
});

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  language: string;
}
let captain: Developer = {
  language: "ts",
  age: 100,
  name: "capt",
};
