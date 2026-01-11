import { D, pipe } from "@scripts";

const input = 90_000;
const result = D.createTimeOrThrow(input);
// result: "time90000+"

const input2 = "time3600000+";
const result2 = D.createTimeOrThrow(input2);
// result2: "time3600000+"

const input3 = {
	hour: 1,
	minute: 30,
};
const result3 = D.createTimeOrThrow(input3);
// result3: "time5400000+"

pipe(
	input,
	D.createTimeOrThrow,
); // result: "time90000+"
