import { A, type ExpectType, N } from "@duplojs/utils";

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

type check = ExpectType<
	typeof result,
	({
		readonly id: "T1";
		readonly status: "todo";
		readonly estimate: 2;
	} | {
		readonly id: "T2";
		readonly status: "done";
		readonly estimate: 8;
	} | {
		readonly id: "T3";
		readonly status: "done";
		readonly estimate: 5;
	} | {
		readonly id: "T4";
		readonly status: "todo";
		readonly estimate: 13;
	})[],
	"strict"
>;
