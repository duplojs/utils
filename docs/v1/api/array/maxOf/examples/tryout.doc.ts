import { DArray, DNumber, pipe } from "@duplojs/utils";

const input = [18, 45, 27, 45, 30] as const;

const result = DArray.maxOf(input);
// result: 45

const result2 = pipe(
	input,
	DArray.map(DNumber.add(10)),
	DArray.maxOf,
);
// result2: 55
