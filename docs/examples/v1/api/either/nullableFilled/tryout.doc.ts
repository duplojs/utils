import { E, type ExpectType } from "@duplojs/utils";

const result = E.nullableFilled("value");

type check = ExpectType<
	typeof result,
	E.EitherNullableFilled<"value">,
	"strict"
>;
