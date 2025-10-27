import { DString, DEither, pipe, when, whenNot } from "@duplojs/utils";

const email = "john.doe@example.com";

const result = pipe(
	email,
	DString.indexOf("@"),
	when(
		(atIndex) => atIndex !== undefined,
		(atIndex) => pipe(
			email,
			(value) => DEither.success({
				username: DString.substring(value, 0, atIndex as number),
				domain: DString.substring(value, (atIndex as number) + 1),
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
