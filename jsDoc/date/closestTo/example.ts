import { D, pipe } from "@scripts";

const inputs = [
	D.create("2024-06-01"),
	D.create("2024-06-10"),
	D.create("2024-06-20"),
] as const;

const target = D.create("2024-06-15");
const nearest = D.closestTo(inputs, target);
// nearest: TheDate | undefined

const nearestPast = D.closestTo(inputs, target, {
	tieBreaker: "favorPast",
});
// nearestPast: TheDate | undefined

pipe(
	inputs,
	D.closestTo(target),
); // TheDate | undefined
