import { type ExpectType, toString } from "@duplojs/utils";

const result = toString(42n);

type check = ExpectType<
	typeof result,
	"42",
	"strict"
>;
