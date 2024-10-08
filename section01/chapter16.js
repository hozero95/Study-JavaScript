// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black"
};

// 상수에 저장된 객체여도 프로퍼티의 삽입, 수정, 삭제는 가능
// 새로운 값(객체)을 할당하는건 안되지만 이미 할당된 객체의 프로퍼티를 바꾸는건 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
    name: "김호영",
    sayHi() {
        console.log("안녕");
    }
};

person.sayHi();
person["sayHi"]();