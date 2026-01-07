import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000, "millisecond");
const inputTime = D.createTime(30000, "millisecond");

const result = D.lessTime(inputTime, thresholdTime);
// result: true
