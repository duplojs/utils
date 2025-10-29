import { DNumber, pipe } from "@duplojs/utils";

const point1 = {
	xPosition: 1,
	yPosition: 2,
};
const point2 = {
	xPosition: 4,
	yPosition: 6,
};

const deltaX = DNumber.subtract(point2.xPosition, point1.xPosition);
const deltaY = DNumber.subtract(point2.yPosition, point1.yPosition);

const square = 2;

const distance = pipe(
	deltaX,
	DNumber.power(square),
	DNumber.add(DNumber.power(deltaY, square)),
	DNumber.sqrt,
);

// distance: 5
