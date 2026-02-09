import { A, type ExpectType } from "@duplojs/utils";

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

type check = ExpectType<
	typeof result,
	{
		todo?: ("Setup the editor" | "Write the docs" | "Update the tests" | "Create an example" | "Review the changes")[] | undefined;
		inProgress?: ("Setup the editor" | "Write the docs" | "Update the tests" | "Create an example" | "Review the changes")[] | undefined;
		done?: ("Setup the editor" | "Write the docs" | "Update the tests" | "Create an example" | "Review the changes")[] | undefined;
	},
	"strict"
>;
