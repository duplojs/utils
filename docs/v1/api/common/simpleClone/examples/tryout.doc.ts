import { type ExpectType, simpleClone } from "@duplojs/utils";

const original = [1, 2, 3];
const copy = simpleClone(original);

type check = ExpectType<
	typeof copy,
	number[],
	"strict"
>;
