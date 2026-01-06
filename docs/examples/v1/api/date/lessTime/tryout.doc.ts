import { D } from "@duplojs/utils";

const thresholdTime = D.createTime(60000);
const inputTime = D.createTime(30000);

const result = D.lessTime(inputTime, thresholdTime);
// result: true
