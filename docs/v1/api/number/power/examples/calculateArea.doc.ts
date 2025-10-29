import { DNumber, DArray, pipe } from "@duplojs/utils";

const sides = [3, 5, 7, 10];

const result = pipe(
	sides,
	DArray.map(DNumber.power(2)),
);

// result: [9, 25, 49, 100]
