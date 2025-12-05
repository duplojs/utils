import { E, pipe, S, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.optional(true ? "value" : undefined),
	E.whenIsOptionalFilled(S.capitalize),
);

type check = ExpectType<
	typeof result,
	E.EitherOptionalEmpty | "Value",
	"strict"
>;
