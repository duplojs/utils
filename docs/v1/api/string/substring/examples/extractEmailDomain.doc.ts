import { DString, E, pipe, when, whenNot } from "@duplojs/utils";

const email = "john.doe@example.com";

const result = pipe(
	email,
	DString.indexOf("@"),
	when(
		(atIndex) => atIndex !== undefined,
		(atIndex) => pipe(
			email,
			(value) => E.success({
				username: DString.substring(value, 0, atIndex as number),
				domain: DString.substring(value, (atIndex as number) + 1),
			}),
		),
	),
	whenNot(
		E.isRight,
		() => E.error("Invalid email format: missing @"),
	),
);

/**
 * result: E.EitherSuccess<{
 *     username: "john.doe",
 *     domain: "example.com"
 * }> | E.EitherError<"Invalid email format: missing @">
 */
