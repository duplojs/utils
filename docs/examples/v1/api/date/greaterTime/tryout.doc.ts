import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000, "millisecond");
const inputTime = D.createTime(120000, "millisecond");

const result = D.greaterTime(inputTime, thresholdTime);
// result: true
