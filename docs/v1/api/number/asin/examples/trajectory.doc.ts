import { N, A, pipe } from "@duplojs/utils";

interface Path {
	lateralDeviation: number;
	distance: number;
}

const paths: Path[] = [
	{
		lateralDeviation: 5,
		distance: 20,
	},
	{
		lateralDeviation: 10,
		distance: 30,
	},
	{
		lateralDeviation: 15,
		distance: 50,
	},
	{
		lateralDeviation: 8,
		distance: 25,
	},
];

const result = pipe(
	paths,
	A.map((path) => ({
		deviation: path.lateralDeviation,
		sinValue: N.divide(path.lateralDeviation, path.distance),
	})),
	A.map(({ deviation, sinValue }) => ({
		deviation,
		angle: pipe(
			sinValue,
			N.asin,
			N.multiply(N.divide(180, Math.PI)),
		),
	})),
);

// result: [
//   { deviation: 5, angle: 14.48 },
//   { deviation: 10, angle: 19.47 },
//   { deviation: 15, angle: 17.46 },
//   { deviation: 8, angle: 18.66 }
// ]
