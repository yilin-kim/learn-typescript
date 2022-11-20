// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText("하이");
// logText(true);

// 타입을 받아들이기 위해 중복으로 함수를 선언할 수 있지만 문제가 많고
// 유니온 타입을 사용해도...
// function logText(text: string | number) {
//   console.log(text);
//   // 문제1. string, number 공통으로 사용할 수 있는 메소드만 미리보기로 제공
//   return text;
// }
// const a = logText("a");
// a.split(" "); // 문제2. 반환값에 대한 문제
// logText(10);

// 어떤 타입을 받을 건지 먼저 <>로 정의하고
// parameter, return 타입을 정의
function logText<T>(text: T): T {
  console.log(text);
  return text;
}
// 제네릭의 이점: 호출하는 시점에 타입을 정하는 타입 정의의 이점
const abc = logText<string>("abc");
abc.split("");
const isLog = logText<boolean>(true);

// 인터페이스에서 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: false };
