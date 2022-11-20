// 별도의 값 지정하지 않으면 숫자형 enum으로 지정됨
// enum Shoes {
//   Nike,
//   Adidas,
// }
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스",
}

let myShoe = Shoes.Nike;
console.log(myShoe);

// 이넘 활용 사례
enum Answer {
  Yes = "Y",
  No = "N",
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion(Answer.Yes);
// askQuestion("Yes"); // 에러 발생
