import { N, pipe } from "@duplojs/utils";

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
		dx: N.subtract(point2.xPostion, point1.xPostion),
		dy: N.subtract(point2.yPostion, point1.yPostion),
	},
	({ dx, dy }) => pipe(
		N.add(
			N.power(N.abs(dx), 2),
			N.power(N.abs(dy), 2),
		),
		Math.sqrt,
		N.round,
	),
);
// result: 50
