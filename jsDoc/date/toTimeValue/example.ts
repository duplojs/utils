import { D, pipe } from "@scripts";

const input = D.createTime(90_000, "millisecond");
const value = D.toTimeValue(input);
// value: number

const value2 = D.toTimeValue("time3600000-");
// value2: number

pipe(
	input,
	D.toTimeValue,
); // number
