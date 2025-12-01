import { E, type ExpectType } from "@duplojs/utils";

const result = E.nullishFilled("string");

type check = ExpectType<
	typeof result,
	E.EitherNullishFilled<"string">,
	"strict"
>;
