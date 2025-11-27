import { N, A, pipe, innerPipe } from "@duplojs/utils";

const volumeAdjustments = [10, -5, 15, -20, 25];
const currentVolume = 50;

const result = pipe(
	volumeAdjustments,
	A.map(
		innerPipe(
			N.add(currentVolume),
			N.clamp(0, 100),
		),
	),
);

// result: [60, 45, 65, 30, 75]
