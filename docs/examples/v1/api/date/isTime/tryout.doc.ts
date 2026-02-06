import { D } from "@duplojs/utils";

const inputTime = D.createTime(1, "hour") as unknown;
const result = D.isTime(inputTime);
// result: true
