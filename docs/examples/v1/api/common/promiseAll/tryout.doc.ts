import { type ExpectType, promiseAll } from "@duplojs/utils";

const tupleInput = [
	Promise.resolve(1),
	"hello",
	Promise.resolve(true),
] as const;

const tupleResult = await promiseAll(tupleInput);

type tupleCheck = ExpectType<
	typeof tupleResult,
	[number, "hello", boolean],
	"strict"
>;

const iterableInput: Iterable<number | Promise<number>> = new Set([
	1,
	Promise.resolve(2),
	3,
]);

const iterableResult = await promiseAll(iterableInput);

type iterableCheck = ExpectType<
	typeof iterableResult,
	number[],
	"strict"
>;
