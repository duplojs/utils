import { DString, DEither, pipe, when, whenNot, isType } from "@duplojs/utils";

const email = "john.doe@example.com";

const result = pipe(
	email,
	DString.indexOf("@"),
	when(
		isType("number"),
		(atIndex) => pipe(
			email,
			(value) => DEither.success({
				username: DString.substring(value, 0, atIndex),
				domain: DString.substring(value, atIndex + 1),
			}),
		),
	),
	whenNot(
		DEither.isRight,
		() => DEither.error("Invalid email format: missing @"),
	),
);

/**
 * result: DEither.EitherSuccess<{
 *     username: "john.doe",
 *     domain: "example.com"
 * }> | DEither.EitherError<"Invalid email format: missing @">
 */
