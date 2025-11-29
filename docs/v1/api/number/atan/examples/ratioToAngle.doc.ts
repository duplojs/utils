import { N, A, pipe } from "@duplojs/utils";

const ratios = [
	{
		width: 16,
		height: 9,
		name: "16:9 (TV)",
	},
	{
		width: 4,
		height: 3,
		name: "4:3 (Classic)",
	},
	{
		width: 21,
		height: 9,
		name: "21:9 (Cinema)",
	},
	{
		width: 1,
		height: 1,
		name: "1:1 (Square)",
	},
];

const result = pipe(
	ratios,
	A.map((ratio) => ({
		name: ratio.name,
		heightToWidthRatio: N.divide(ratio.height, ratio.width),
	})),
	A.map(({ name, heightToWidthRatio }) => ({
		name,
		angle: pipe(
			heightToWidthRatio,
			N.atan,
			N.multiply(N.divide(180, Math.PI)),
		),
	})),
);

// result: [
//   { name: "16:9 (TV)", angle: 29.4 },
//   { name: "4:3 (Classic)", angle: 36.9 },
//   { name: "21:9 (Cinema)", angle: 23.2 },
//   { name: "1:1 (Square)", angle: 45 }
// ]
