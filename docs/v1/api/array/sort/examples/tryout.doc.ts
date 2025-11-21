import { DArray, DNumber } from "@duplojs/utils";

const input = [
	{
		id: "P1",
		score: 78,
	},
	{
		id: "P2",
		score: 92,
	},
	{
		id: "P3",
		score: 65,
	},
	{
		id: "P4",
		score: 85,
	},
] as const;

const result = DArray.sort(
	input,
	(first, second) => DNumber.subtract(first.score, second.score),
);
// result: [
//  { id: "P3", score: 65 },
//  { id: "P1", score: 78 },
//  { id: "P4", score: 85 },
//  { id: "P2", score: 92 },
// ]
