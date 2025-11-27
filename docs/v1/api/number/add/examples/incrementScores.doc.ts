import { N, A, pipe, innerPipe } from "@duplojs/utils";

const scores = [85, 90, 78, 92];
const bonus = 5;

const result = pipe(
	scores,
	A.map(
		innerPipe(
			N.add(bonus),
			N.min(100),
		),
	),
);

// result: [90, 95, 83, 97]
