// JS 문자열 선언
var str = "hello";

// TS 문자열 선언
let str2: string = "hello";
let num: number = 10;
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk", "Ironman"];
let items: number[] = [1, 2, 3];

// TS 튜플 (배열 각 인덱스에 타입 지정)
let address2: string[] = ["gangnam", "pangyo"];
let address3: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = { name: "capt", age: 100 };
let person: { name: string; age: number } = {
  name: "capt",
  age: 100,
};

// TS 진위값
let show: boolean = true;
