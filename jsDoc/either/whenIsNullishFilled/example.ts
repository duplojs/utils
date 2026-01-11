import { E, pipe, S } from "@scripts";

const result = pipe(
	E.nullish(true ? "value" : null),
	E.whenIsNullishFilled(S.toUpperCase),
);

// type: E.EitherNullishEmpty<null> | "VALUE"
