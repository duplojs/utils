import { DEither, DString, pipe, when, whenNot } from "@duplojs/utils";

const input = "username" as string;
const user = {
	username: "alice",
	email: "alice@example.com",
};
const result = pipe(
	input,
	when(
		DString.isKeyof(user),
		DEither.success,
	),
	whenNot(
		DEither.isRight,
		DEither.error,
	),
);
// result: DEither.EitherSuccess<"username" | "email"> | DEither.EitherError<string>
