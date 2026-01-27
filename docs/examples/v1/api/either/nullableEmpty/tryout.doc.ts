import { E, type ExpectType } from "@duplojs/utils";

const result = E.nullableEmpty();

type check = ExpectType<
	typeof result,
	E.NullableEmpty,
	"strict"
>;
