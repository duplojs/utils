import { E, type ExpectType } from "@duplojs/utils";

const result = E.nullishEmpty();

type check = ExpectType<
	typeof result,
	E.EitherNullishEmpty<undefined>,
	"strict"
>;
