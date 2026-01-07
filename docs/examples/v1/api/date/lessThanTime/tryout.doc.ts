import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000, "millisecond");
const inputTime = D.createTime(60000, "millisecond");

const result = D.lessThanTime(inputTime, thresholdTime);
// result: true
