import { D } from "@duplojs/utils";

const time01 = D.createTime(1000);
const time05 = D.createTime(5000);
const time10 = D.createTime(10000);

const result = D.maxTime([time01, time10, time05]);
// result: time10000+
