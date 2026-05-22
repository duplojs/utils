import { promiseAll } from "@scripts";

const tupleInput = [
	Promise.resolve(1),
	"hello",
	Promise.resolve(true),
] as const;

const tupleResult = await promiseAll(tupleInput);
// type: [1, "hello", boolean]

const iterableInput: Iterable<number | Promise<number>> = new Set([
	1,
	Promise.resolve(2),
	3,
]);

const iterableResult = await promiseAll(iterableInput);
// type: number[]
