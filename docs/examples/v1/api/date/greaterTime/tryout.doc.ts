import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000);
const inputTime = D.createTime(120000);

const result = D.greaterTime(inputTime, thresholdTime);
// result: true
