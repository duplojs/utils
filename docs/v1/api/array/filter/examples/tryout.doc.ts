import { A, N } from "@duplojs/utils";

const input = [
	{
		id: "T1",
		status: "todo",
		estimate: 2,
	},
	{
		id: "T2",
		status: "done",
		estimate: 8,
	},
	{
		id: "T3",
		status: "done",
		estimate: 5,
	},
	{
		id: "T4",
		status: "todo",
		estimate: 13,
	},
] as const;

const result = A.filter(
	input,
	(task) => N.greaterThan(task.estimate, 5),
);
// result: [
//  { id: "T2", status: "done", estimate: 8 },
//  { id: "T4", status: "todo", estimate: 13 },
// ]
