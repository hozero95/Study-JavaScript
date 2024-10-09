// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

// Common JS (CJS) 방식
// module.exports = {
//     add,
//     sub,
// };

// ES 모듈 시스템 (ESM) 방식 (대부분의 방식)
// package.json 에 "type": "module" 작성해야함.
// ESM 방식을 쓰면 기존의 CJS 방식을 사용할 수 없음
// export {add, sub};