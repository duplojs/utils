import { E, type ExpectType } from "@duplojs/utils";

const result = E.optionalEmpty();

type check = ExpectType<
	typeof result,
	E.EitherOptionalEmpty,
	"strict"
>;
