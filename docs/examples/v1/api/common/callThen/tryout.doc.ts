import { type ExpectType, callThen } from "@duplojs/utils";

const directResult = callThen(
	3,
	(value) => value * 2,
);

const asyncResult = callThen(
	Promise.resolve({
		count: 2,
	}),
	({ count }) => count + 1,
);

type directCheck = ExpectType<
	typeof directResult,
	number,
	"strict"
>;

type asyncCheck = ExpectType<
	typeof asyncResult,
	Promise<number>,
	"strict"
>;
