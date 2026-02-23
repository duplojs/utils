import { D, pipe } from "@scripts";

const input = D.create("2024-01-03");
const reference = D.create("2024-01-01");

const difference = D.getDifference(input, reference);
// difference: TheTime

const asMilliseconds = difference.toNative();
// asMilliseconds: number

const withSerialized = D.getDifference(
	"date172800000+",
	"date86400000+",
);
// withSerialized: TheTime

pipe(
	input,
	D.getDifference(reference),
); // TheTime
