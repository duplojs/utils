import { N, A, pipe } from "@duplojs/utils";

const progressValues = [0.15, 0.47, 0.82, 0.93];

const result = pipe(
	progressValues,
	A.map((progress) => ({
		percentage: N.multiply(progress, 100),
		steps: pipe(
			N.multiply(progress, 10),
			N.ceil,
		),
	})),
);

// result: [
//   { percentage: 15, steps: 2 },
//   { percentage: 47, steps: 5 },
//   { percentage: 82, steps: 9 },
//   { percentage: 93, steps: 10 }
// ]
