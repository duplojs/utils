import { E, pipe, S, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.nullable(true ? "value" : null),
	E.whenIsNullableFilled(S.capitalize),
);

type check = ExpectType<
	typeof result,
	E.EitherNullableEmpty | "Value",
	"strict"
>;
