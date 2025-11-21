import { DArray } from "@duplojs/utils";

const input = [
	{
		id: "C1",
		tags: ["web", "js"],
	},
	{
		id: "C2",
		tags: ["infra"],
	},
	{
		id: "C3",
		tags: ["api", "queue"],
	},
] as const;

const result = DArray.flatMap(
	input,
	(category) => DArray.map(
		category.tags,
		(tag) => ({
			id: category.id,
			tag,
		}),
	),
);
// result: [
//  { id: "C1", tag: "web" },
//  { id: "C1", tag: "js" },
//  { id: "C2", tag: "infra" },
//  { id: "C3", tag: "api" },
//  { id: "C3", tag: "queue" },
// ]
