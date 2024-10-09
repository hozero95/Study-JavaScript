// npm init : node package 설치
// node {파일명}.js : node 로 javascript 파일 실행
// npm run start : package.json > scripts > start 에 설정한 경로로 실행
// npm i : package.json 을 기준으로 모든 npm package 설치

// Common JS (CJS) 방식
// const {add, sub} = require("./math");

// ES 모듈 시스템 (ESM) 방식 (대부분의 방식)
// import mul from "./math.js";
import mul, {add, sub} from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

const color = randomColor();
console.log(color);