import { D } from "@duplojs/utils";

const lowerTime = D.createTime(30000);
const upperTime = D.createTime(90000);
const inputTime = D.createTime(60000);

const result = D.betweenTime(inputTime, lowerTime, upperTime);
// result: true
