import { A, pipe } from "@scripts";

A.groupOutput(
	"even",
	2,
); // { group: "even", value: 2 }

pipe(
	3,
	A.groupOutput("odd"),
); // { group: "odd", value: 3 }

A.groupOutput(
	"status",
	true,
); // { group: "status", value: true }
