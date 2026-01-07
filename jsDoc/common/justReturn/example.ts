import { justReturn, O, P, pipe } from "@scripts";

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

// type: number | "error"
