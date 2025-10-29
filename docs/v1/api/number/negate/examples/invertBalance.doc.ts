import { DNumber, DArray, pipe } from "@duplojs/utils";

const transactions = [100, -50, 200, -30, 150];

const result = pipe(
	transactions,
	DArray.map(DNumber.negate),
);

// result: [-100, 50, -200, 30, -150]
