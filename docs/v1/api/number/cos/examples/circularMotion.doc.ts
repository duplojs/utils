import { N, A, pipe } from "@duplojs/utils";

const radius = 50;
const fullCircleRadians = N.multiply(2, Math.PI);
const frames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const frameCount = A.length(frames);

const positions = pipe(
	frames,
	A.map((frame) => ({
		frame,
		angle: pipe(
			N.multiply(frame, fullCircleRadians),
			N.divide(frameCount),
		),
	})),
	A.map(({ frame, angle }) => ({
		frame,
		xPosition: N.multiply(N.cos(angle), radius),
		yPosition: N.multiply(N.sin(angle), radius),
	})),
);

// result: [{frame: 0, xPosition: 50, yPosition: 0}, {frame: 1, xPosition: 43.3, yPosition: 25}, ...]
