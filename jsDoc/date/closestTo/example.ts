import { D, pipe } from "@scripts";

const inputs = [
	D.create("2024-06-01"),
	D.create("2024-06-10"),
	D.create("2024-06-20"),
] as const;

const target = D.create("2024-06-15");
const result = D.closestTo(inputs, target);
// result: "date1717996800000+" (10 June 2024)

pipe(
	inputs,
	D.closestTo(target),
); // result: "date1717996800000+" (10 June 2024)
