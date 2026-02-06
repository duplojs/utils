import { A, D, pipe } from "@scripts";

const range = {
	start: D.create("2024-06-01"),
	end: D.create("2024-06-03"),
} as const;

const iterator = D.each(range, "day");
const values = A.from(iterator);
// values: TheDate[]

const reverse = A.from(
	D.each({
		start: D.create("2024-06-03"),
		end: D.create("2024-06-01"),
	}),
);
// reverse: TheDate[]

pipe(
	range,
	D.each,
); // Iterator<TheDate>
