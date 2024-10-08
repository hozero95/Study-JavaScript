// 호이스팅
// -> 끌어올리다 라는 뜻
let area3 = getArea(120, 200);
console.log(area3);

// 함수 선언
function getArea(width, height) {
    // let width = 10;
    // let height = 20;

    function another() { // 중첩 함수
        console.log("another");
    }

    another();

    return width * height;
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);