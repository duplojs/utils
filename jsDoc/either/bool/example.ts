import { A, E, pipe, equal } from "@scripts";

const result = pipe(
	["duplo"],
	A.find(equal("nest")),
	E.bool,
);

// type: E.BoolFalsy<undefined> | E.BoolTruthy<"nest">
