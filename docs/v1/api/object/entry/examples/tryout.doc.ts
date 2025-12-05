import { type ExpectType, O } from "@duplojs/utils";

const result = O.entry("name", "Alice");

type check = ExpectType<
	typeof result,
	readonly ["name", string],
	"strict"
>;
