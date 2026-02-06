import { D, pipe } from "@scripts";

const input = [
	D.create("2024-06-03"),
	"date1717286400000+",
	D.create("2024-06-01"),
] as const;

const asc = D.sort(input, "ASC");
// asc: TheDate[]

pipe(
	input,
	D.sort("DSC"),
); // TheDate[]
