import { E, pipe, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.nullable(true ? "value" : null),
	E.whenIsNullableEmpty(() => "nullable" as const),
);

type check = ExpectType<
	typeof result,
	"nullable" | E.NullableFilled<"value">,
	"strict"
>;
