import { S, isType, pipe, when, whenNot, type ExpectType } from "@duplojs/utils";

const text = "foo,bar" as string;

const maybeTokens = pipe(
	text,
	when(
		S.includes(","),
		S.split(","),
	),
);

type CheckMaybeTokens = ExpectType<
	typeof maybeTokens,
	string | [string, ...string[]],
	"strict"
>;

const tokens = pipe(
	text,
	when(
		S.includes(","),
		S.split(","),
	),
	whenNot(
		isType("array"),
		(value) => <const>[value],
	),
);

type CheckTokens = ExpectType<
	typeof tokens,
	[string, ...string[]] | [string],
	"strict"
>;
