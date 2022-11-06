function sum(a, b) {
  return a + b;
}

// sum(10, "20"); // 1020
let res = sum(10, 20); // 30
res.tolocaleString(); // ts가 아니기 때문에 자동으로 메소드 추천이 안됨
