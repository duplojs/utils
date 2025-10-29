import { DNumber, pipe } from "@duplojs/utils";

const point1 = {
	xPostion: 10,
	yPostion: 20,
};
const point2 = {
	xPostion: 40,
	yPostion: 60,
};

const result = pipe(
	{
		dx: DNumber.subtract(point2.xPostion, point1.xPostion),
		dy: DNumber.subtract(point2.yPostion, point1.yPostion),
	},
	({ dx, dy }) => pipe(
		DNumber.add(
			DNumber.power(DNumber.abs(dx), 2),
			DNumber.power(DNumber.abs(dy), 2),
		),
		Math.sqrt,
		DNumber.round,
	),
);
// result: 50
