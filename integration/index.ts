import { A, E, O, pipe, S, when, whenNot, type ExpectType } from "@duplojs/utils";

const result = pipe(
	"test",
	S.split(""),
	O.to({
		first: A.first,
		2: A.at(1),
		3: A.at(2),
		last: A.last,
	}),
	O.entries,
	A.filter((entry) => entry[1] !== "t"),
	O.fromEntries,
	when(
		O.hasKeys(["2", "3"]),
		E.success,
	),
	whenNot(
		E.isRight,
		E.error,
	),
);

type Check = ExpectType<
	typeof result,
	| E.EitherSuccess<{
		2: "e";
		3: "s";
	}>
	| E.EitherError<{
		2?: "e" | undefined;
		3?: "s" | undefined;
	}>,
	"strict"
>;
