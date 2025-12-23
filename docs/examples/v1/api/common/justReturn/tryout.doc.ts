import { type ExpectType, justReturn, O, P, pipe } from "@duplojs/utils";

type Input =
	| {
		kind: "ok";
		value: number;
	} | {
		kind: "healt";
		info: string;
	} | {
		kind: "error";
		message: string;
	};

const input = {
	kind: "ok",
	value: 4,
} as Input;

const result = pipe(
	input,
	P.match(
		{ kind: "ok" },
		O.getProperty("value"),
	),
	// whatever else happens, we return "error"
	P.otherwise(justReturn("error")),
);

type check = ExpectType<
	typeof result,
	number | "error",
	"strict"
>;
