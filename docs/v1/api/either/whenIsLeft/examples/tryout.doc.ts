import { E, pipe, type ExpectType } from "@duplojs/utils";

pipe(
	true
		? E.success("true")
		: E.error("false"),

	E.whenIsLeft((value) => {
		type check = ExpectType<
			typeof value,
			"false",
			"strict"
		>;
	}),
);

