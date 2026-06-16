import { A, E, pipe, equal } from "@scripts";

const input = ["duplo"];
const result = pipe(
	input,
	A.find(equal("duplo")),
	E.bool,
);

// type: E.BoolFalsy<undefined> | E.BoolTruthy<"duplo">
