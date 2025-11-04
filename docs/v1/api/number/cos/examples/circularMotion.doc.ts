import { DNumber, DArray, pipe } from "@duplojs/utils";

const radius = 50;
const fullCircleRadians = DNumber.multiply(2, Math.PI);
const frames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const frameCount = DArray.length(frames);

const positions = pipe(
	frames,
	DArray.map((frame) => ({
		frame,
		angle: pipe(
			DNumber.multiply(frame, fullCircleRadians),
			DNumber.divide(frameCount),
		),
	})),
	DArray.map(({ frame, angle }) => ({
		frame,
		xPosition: DNumber.multiply(DNumber.cos(angle), radius),
		yPosition: DNumber.multiply(DNumber.sin(angle), radius),
	})),
);

// result: [{frame: 0, xPosition: 50, yPosition: 0}, {frame: 1, xPosition: 43.3, yPosition: 25}, ...]
