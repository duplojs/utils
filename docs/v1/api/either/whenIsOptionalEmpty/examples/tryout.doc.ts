import { E, pipe, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.optional(true ? "value" : undefined),
	E.whenIsOptionalEmpty(() => "empty" as const),
);

type check = ExpectType<
	typeof result,
	E.EitherOptionalFilled<"value"> | "empty",
	"strict"
>;
