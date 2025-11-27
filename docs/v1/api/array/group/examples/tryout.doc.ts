import { A, pipe } from "@duplojs/utils";

const input = [
	{
		id: "T1",
		status: "todo",
		title: "Setup the editor",
	},
	{
		id: "T2",
		status: "inProgress",
		title: "Write the docs",
	},
	{
		id: "T3",
		status: "done",
		title: "Update the tests",
	},
	{
		id: "T4",
		status: "todo",
		title: "Create an example",
	},
	{
		id: "T5",
		status: "done",
		title: "Review the changes",
	},
] as const;

const result = A.group(
	input,
	(task, { output }) => output(task.status, task.title),
);
// result: {
//  todo: ["Setup the editor", "Create an example"],
//  inProgress: ["Write the docs"],
//  done: ["Update the tests", "Review the changes"],
// }

const result2 = pipe(
	input,
	A.group((task, { output }) => output(task.status, task.id)),
);
// result2: {
//  todo: ["T1", "T4"],
//  inProgress: ["T2"],
//  done: ["T3", "T5"],
// }
