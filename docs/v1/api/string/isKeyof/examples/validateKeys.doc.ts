import { E, DString, pipe, when, whenNot } from "@duplojs/utils";

const input = "username" as string;
const user = {
	username: "alice",
	email: "alice@example.com",
};
const result = pipe(
	input,
	when(
		DString.isKeyof(user),
		E.success,
	),
	whenNot(
		E.isRight,
		E.error,
	),
);
// result: E.EitherSuccess<"username" | "email"> | E.EitherError<string>
