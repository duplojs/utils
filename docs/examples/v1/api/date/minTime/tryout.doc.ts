import { D } from "@duplojs/utils";

const time01 = D.createTime(1000, "millisecond");
const time05 = D.createTime(5000, "millisecond");
const time10 = D.createTime(10000, "millisecond");

const result = D.minTime([time10, time05, time01]);
// result: TheTime
