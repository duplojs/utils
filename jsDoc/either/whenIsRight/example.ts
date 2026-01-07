import { E, pipe } from "@scripts";

pipe(
	true
		? E.success("true")
		: E.error("false"),

	E.whenIsRight((value) => {
		// type: "true"
	}),
);

