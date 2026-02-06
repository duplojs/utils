import { D, pipe } from "@scripts";

const input = [
	D.createTime(3_000, "millisecond"),
	"time1000+",
	D.createTime(2_000, "millisecond"),
] as const;

const asc = D.sortTimes(input, "ASC");
// asc: TheTime[]

pipe(
	input,
	D.sortTimes("DSC"),
); // TheTime[]
