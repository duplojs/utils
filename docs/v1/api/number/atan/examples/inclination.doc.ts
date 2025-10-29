import { DNumber, DArray, pipe } from "@duplojs/utils";

interface RoofStructure {
	// Height (m)
	rise: number;
	// Horizontal width (m)
	run: number;
	type: string;
}

const structures: RoofStructure[] = [
	{
		rise: 2,
		run: 5,
		type: "Low slope roof",
	},
	{
		rise: 4,
		run: 5,
		type: "Medium slope roof",
	},
	{
		rise: 6,
		run: 5,
		type: "Steep slope roof",
	},
	{
		rise: 1,
		run: 12,
		type: "Accessibility ramp",
	},
];

const result = pipe(
	structures,
	DArray.map((structure) => ({
		type: structure.type,
		ratio: DNumber.divide(structure.rise, structure.run),
	})),
	DArray.map(({ type, ratio }) => ({
		type,
		angle: pipe(
			ratio,
			DNumber.atan,
			DNumber.multiply(DNumber.divide(180, Math.PI)),
		),
		slope: `${pipe(
			DNumber.multiply(ratio, 100),
			DNumber.round,
		).toFixed(1)}%`,
	})),
);

// result: [
//   { type: "Low slope roof", angle: 21.8, slope: "40.0%" },
//   { type: "Medium slope roof", angle: 38.7, slope: "80.0%" },
//   { type: "Steep slope roof", angle: 50.2, slope: "120.0%" },
//   { type: "Accessibility ramp", angle: 4.76, slope: "8.3%" }
// ]
