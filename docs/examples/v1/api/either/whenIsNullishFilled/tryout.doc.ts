import { E, pipe, S, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.nullish(true ? "value" : null),
	E.whenIsNullishFilled(S.toUpperCase),
);

type check = ExpectType<
	typeof result,
	E.NullishEmpty<null> | "VALUE",
	"strict"
>;
