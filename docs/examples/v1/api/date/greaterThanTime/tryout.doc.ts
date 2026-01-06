import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000);
const inputTime = D.createTime(60000);

const result = D.greaterThanTime(inputTime, thresholdTime);
// result: true
