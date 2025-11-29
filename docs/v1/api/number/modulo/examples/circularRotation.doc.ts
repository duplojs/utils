import { N, A, pipe, createEnum } from "@duplojs/utils";

const teamEnum = createEnum(["Alice", "Bob", "Charlie", "Diana"]);
const team = teamEnum.toTuple();
const tasks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const teamSize = A.length(team);

const result = pipe(
	tasks,
	A.map((taskNumber) => ({
		taskNumber,
		assignedTo: pipe(
			taskNumber,
			N.modulo(teamSize),
			(index) => A.at(team, index),
		),
	})),
);

// result: [
//   { taskNumber: 0, assignedTo: "Alice" },
//   { taskNumber: 1, assignedTo: "Bob" },
//   { taskNumber: 2, assignedTo: "Charlie" },
//   { taskNumber: 3, assignedTo: "Diana" },
//   { taskNumber: 4, assignedTo: "Alice" },
//   { taskNumber: 5, assignedTo: "Bob" },
//   ...
// ]
