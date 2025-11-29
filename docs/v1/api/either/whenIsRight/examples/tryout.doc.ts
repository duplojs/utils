import { E, pipe, type ExpectType } from "@duplojs/utils";

pipe(
	true
		? E.success("true")
		: E.error("false"),

	E.whenIsRight((value) => {
		type check = ExpectType<
			typeof value,
			"true",
			"strict"
		>;
	}),
);

