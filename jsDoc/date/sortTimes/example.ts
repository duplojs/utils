import { D, pipe } from "@scripts";

const input = [
	D.createTheTime(3_000),
	D.createTheTime(1_000),
	D.createTheTime(2_000),
];

const result = D.sortTimes(input, "ASC");
// result: ["time1000+", "time2000+", "time3000+"]

const result2 = D.sortTimes(input, "DSC");
// result2: ["time3000+", "time2000+", "time1000+"]

pipe(
	input,
	D.sortTimes("ASC"),
); // result: ["time1000+", "time2000+", "time3000+"]
