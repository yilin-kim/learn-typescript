function Person(name, age) {
  this.name = name;
  this.age = age;
}
let capt = new Person("캡틴", 100);

// ES6
// class는 syntatic sugar
class Person {
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

let yl = new Person("이린", 23); //constructor()가 실행됨
console.log(yl);
