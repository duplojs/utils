import { A, E, O, pipe, S, type ExpectType } from "@duplojs/utils";
import { DPattern } from "@scripts/index";

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
	DPattern.when(
		O.hasKeys(["2", "3"]),
		E.success,
	),
	DPattern.otherwise(
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
