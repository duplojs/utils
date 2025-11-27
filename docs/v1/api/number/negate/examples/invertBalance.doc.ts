import { N, A, pipe } from "@duplojs/utils";

const transactions = [100, -50, 200, -30, 150];

const result = pipe(
	transactions,
	A.map(N.negate),
);

// result: [-100, 50, -200, 30, -150]
