import { E, type ExpectType } from "@duplojs/utils";

const result = E.nullable(true ? "value" : null);

type check = ExpectType<
	typeof result,
	E.NullableEmpty | E.NullableFilled<"value">,
	"strict"
>;
