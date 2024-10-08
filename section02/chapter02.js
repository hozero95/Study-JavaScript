function returnFalse() {
    console.log("returnFalse");
    return 0;
}

function returnTrue() {
    console.log("returnTrue");
    return 10;
}

console.log(returnFalse() && returnTrue());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person 값이 없음");
}
printName();
printName({name: "김호영"});

// Truthy || Truthy => 앞 Truthy 반환
// Truthy && Truthy => 뒤 Truthy 반환