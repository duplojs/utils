import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const scores = [85, 90, 78, 92];
const bonus = 5;

const result = pipe(
	scores,
	DArray.map(
		innerPipe(
			DNumber.add(bonus),
			DNumber.min(100),
		),
	),
);

// result: [90, 95, 83, 97]
