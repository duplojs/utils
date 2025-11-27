import { N, A, pipe } from "@duplojs/utils";

const temperatureChanges = [5, -3, 8, -2];
const currentTemp = 20;

const result = pipe(
	temperatureChanges,
	A.map(N.negate),
	A.map(N.add(currentTemp)),
);

// result: [15, 23, 12, 22]
