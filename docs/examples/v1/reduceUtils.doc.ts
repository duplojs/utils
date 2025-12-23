import { A, type ExpectType } from "@duplojs/utils";

const array = [12, null, 20, 56, 19];

const result = A.reduce(
	array,
	0,
	({ lastValue, element, next, exit }) => element === null
		? exit(null) // just exit 🦁
		: next(lastValue + element),
);

type check = ExpectType<
	typeof result,
	number | null,
	"strict"
>;
