import { E, pipe, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.nullish(true ? "value" : null),
	E.whenIsNullishEmpty(() => "nullish" as const),
);

type check = ExpectType<
	typeof result,
	"nullish" | E.EitherNullishFilled<"value">,
	"strict"
>;
