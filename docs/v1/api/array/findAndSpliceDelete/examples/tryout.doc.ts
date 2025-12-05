import { A, N } from "@duplojs/utils";

const input = [
	{
		id: "todo",
		priority: 1,
	},
	{
		id: "inProgress",
		priority: 2,
	},
	{
		id: "review",
		priority: 3,
	},
	{
		id: "done",
		priority: 4,
	},
];

const result = A.findAndSpliceDelete(
	input,
	({ priority }) => N.greaterThan(priority, 2),
	1,
);
// result: [
//  { id: "todo", priority: 1 },
//  { id: "inProgress", priority: 2 },
//  { id: "done", priority: 4 },
// ]
