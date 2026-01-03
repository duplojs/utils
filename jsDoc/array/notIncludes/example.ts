import { A, pipe, when } from "@scripts";

const mixedList = ["alpha", null];

if (A.notIncludes(mixedList, null)) {
	// mixedList is string[]
}

pipe(
	mixedList,
	when(
		A.notIncludes(null),
		(items) => {
			// items is string[]
		},
	),
);
