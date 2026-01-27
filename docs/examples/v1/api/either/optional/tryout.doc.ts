import { E, type ExpectType } from "@duplojs/utils";

const result = E.optional(true ? "value" : undefined);

type check = ExpectType<
	typeof result,
	E.OptionalEmpty | E.OptionalFilled<"value">,
	"strict"
>;
