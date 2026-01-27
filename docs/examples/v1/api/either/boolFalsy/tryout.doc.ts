import { E, pipe, equal, when, type ExpectType } from "@duplojs/utils";

const input = "word" as string;

const result = pipe(
	input,
	when(
		equal(""),
		E.boolFalsy,
	),
);

type check = ExpectType<
	typeof result,
	string | E.BoolFalsy<"">,
	"strict"
>;
