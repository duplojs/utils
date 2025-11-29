import { N, A, pipe } from "@duplojs/utils";

const speeds = [45, 95, 120, 60, 150, 30];
const minSpeed = 50;
const maxSpeed = 110;

const result = pipe(
	speeds,
	A.map(N.clamp(minSpeed, maxSpeed)),
);

// result: [50, 95, 110, 60, 110, 50]
