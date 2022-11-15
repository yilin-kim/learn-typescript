// interface Student {
//   name: string;
//   age: number;
// }

// 타입 별칭은 새로운 타입 값을 생성하는 게 아니라 나중에 쉽게 참고할 수 있게 이름 부여하는 것
// 타입은 인터페이스와 달리 '확장'이 불가능
type Student = {
  name: string;
  age: number;
};

let yil: Student = {
  name: "yilin",
  age: 23,
};

type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
