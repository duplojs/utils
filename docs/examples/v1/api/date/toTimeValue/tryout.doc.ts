import { D } from "@duplojs/utils";

const positive = D.toTimeValue("time5400+");
const negative = D.toTimeValue("time90-");
const clamped = D.toTimeValue("time9999999999999999+");
// positive: 5400
// negative: -90
// clamped: 9007199254740991
