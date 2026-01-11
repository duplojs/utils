import { E, pipe } from "@scripts";

pipe(
	true
		? E.success("true")
		: E.error("false"),

	E.whenIsLeft((value) => {
		// type: "false"
	}),
);

