import { E, type ExpectType } from "@duplojs/utils";

const result = E.optionalFilled("value");

type check = ExpectType<
	typeof result,
	E.OptionalFilled<"value">,
	"strict"
>;
