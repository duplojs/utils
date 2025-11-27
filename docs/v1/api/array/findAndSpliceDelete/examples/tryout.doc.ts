import { A, N } from "@duplojs/utils";

const steps = [
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
] as const;

const result = A.findAndSpliceDelete(
	steps,
	(step) => N.greaterThan(step.priority, 2),
	1,
);
// result: [
//  { id: "todo", priority: 1 },
//  { id: "inProgress", priority: 2 },
//  { id: "done", priority: 4 },
// ]
