import { DNumber, DArray, pipe } from "@duplojs/utils";

const seconds = [125, 487, 92, 3456];

const result = pipe(
	seconds,
	DArray.map((totalSeconds) => ({
		minutes: DNumber.floor(DNumber.divide(totalSeconds, 60)),
		seconds: DNumber.modulo(totalSeconds, 60),
	})),
);

// result: [
//   { minutes: 2, seconds: 5 },
//   { minutes: 8, seconds: 7 },
//   { minutes: 1, seconds: 32 },
//   { minutes: 57, seconds: 36 }
// ]
