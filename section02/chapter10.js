// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1995-12-13 10:10:10"); // -, ., / 구분자 사용 가능
console.log(date2);

let date3 = new Date(1995, 11, 13, 23, 59, 59);
console.log(date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(협정 세계 시)로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
console.log(year, month, date, hour, minute, second);

// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(9);
date1.setDate(9);
date1.setHours(3);
date1.setMinutes(13);
date1.setSeconds(59);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleString());