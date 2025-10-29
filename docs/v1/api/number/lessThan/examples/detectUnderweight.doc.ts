import { DNumber, DArray, pipe } from "@duplojs/utils";

interface Package {
	id: `P${number}`;
	weight: number;
}

const packages: Package[] = [
	{
		id: "P1",
		weight: 8,
	},
	{
		id: "P2",
		weight: 10,
	},
	{
		id: "P3",
		weight: 12,
	},
	{
		id: "P4",
		weight: 9,
	},
];

const minimumWeight = 10;

const result = pipe(
	packages,
	DArray.map((pkg) => ({
		...pkg,
		underweight: DNumber.lessThan(pkg.weight, minimumWeight),
	})),
);

// result: [
//   { id: "P1", weight: 8, underweight: true },
//   { id: "P2", weight: 10, underweight: false },
//   { id: "P3", weight: 12, underweight: false },
//   { id: "P4", weight: 9, underweight: true }
// ]
