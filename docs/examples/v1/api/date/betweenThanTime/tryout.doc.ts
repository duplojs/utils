import { D } from "@duplojs/utils";

const lowerTime = D.createTime(30000, "millisecond");
const upperTime = D.createTime(90000, "millisecond");
const inputTime = D.createTime(90000, "millisecond");

const result = D.betweenThanTime(inputTime, lowerTime, upperTime);
// result: false
