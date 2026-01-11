import { A, E, pipe, equal } from "@scripts";

const result = pipe(
	["duplo"],
	A.find(equal("nest")),
	E.bool,
);

// type: E.EitherBoolFalsy<undefined> | E.EitherBoolTruthy<"nest">
