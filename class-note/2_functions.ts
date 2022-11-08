// 함수의 파라미터에 타입을 정의하는 방식
// TS Language Server가 돌아서 반환값이 알아서 number로 추론됨
// function sum(a: number, b: number): number {
//   return a + b;
// }

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
