import { S, pipe, when } from "@scripts";

const statusList = [
	"draft",
	"published",
];

const maybeStatus = true ? "draft" : "archived";

if (S.isIn(maybeStatus, statusList)) {
	// maybeStatus is "draft" | "published"
}

pipe(
	maybeStatus,
	when(
		S.isIn(statusList),
		(value) => {
			// value is "draft" | "published"
		},
	),
);

S.isIn("archived", statusList); // false
