import { type ExpectType, prepareAsyncPipe, DString } from "@duplojs/utils";

const numberToString: (
	input: number
) => Promise<string> = prepareAsyncPipe()(
	async(value) => Promise.resolve(value),
	DString.to,
);

const firstResult = await numberToString(10);
const secondResult = await numberToString(
	await Promise.resolve(42),
);

type firstCheck = ExpectType<
	typeof firstResult,
	string,
	"strict"
>;

console.log(firstResult); // "10"
console.log(secondResult); // "42"

const explicitlyTypedPipe = prepareAsyncPipe<number>()(
	async(value) => Promise.resolve(value * 2),
	DString.to,
);
const explicitResult = await explicitlyTypedPipe(21);

type explicitCheck = ExpectType<
	typeof explicitResult,
	`${number}`,
	"strict"
>;

console.log(explicitResult); // "42"
