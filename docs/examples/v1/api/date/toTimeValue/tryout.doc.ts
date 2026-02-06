import { D } from "@duplojs/utils";

const positive = D.toTimeValue(D.createTime(5400, "millisecond"));
const negative = D.toTimeValue("time90-");
const clamped = D.toTimeValue("time9999999999999999+");
// positive: 5400
// negative: -90
// clamped: 9007199254740991
