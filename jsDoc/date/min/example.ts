import { D, pipe } from "@scripts";

const input = [
	D.create("2024-06-20"),
	"date1718668800000+",
	D.create("2024-06-25"),
] as const;

const value = D.min(input);
// value: TheDate

pipe(
	input,
	D.min,
); // TheDate
