import { DArray, DNumber, pipe } from "@duplojs/utils";

const input = [120, 80, 150] as const;

const result = DArray.sum(input);
// result: 350

const result2 = pipe(
	input,
	DArray.filter(DNumber.greaterThan(90)),
	DArray.sum,
);
// result2: 270
