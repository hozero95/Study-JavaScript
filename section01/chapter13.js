// 1. 콜백함수
function main(value) {
    value();
}

function sub() {
    console.log("i am sub");
}

main(sub);
main(() => {
    console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});