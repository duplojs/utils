import { N, pipe } from "@duplojs/utils";

const point1 = {
	xPosition: 1,
	yPosition: 2,
};
const point2 = {
	xPosition: 4,
	yPosition: 6,
};

const deltaX = N.subtract(point2.xPosition, point1.xPosition);
const deltaY = N.subtract(point2.yPosition, point1.yPosition);

const square = 2;

const distance = pipe(
	deltaX,
	N.power(square),
	N.add(N.power(deltaY, square)),
	N.sqrt,
);

// distance: 5
