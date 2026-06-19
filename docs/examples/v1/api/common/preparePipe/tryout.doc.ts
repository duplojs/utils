import { type ExpectType, preparePipe, DString } from "@duplojs/utils";

const numberToString: (input: number) => string = preparePipe()(
	DString.to,
);

const firstResult = numberToString(10);
const secondResult = numberToString(42);

type firstCheck = ExpectType<
	typeof firstResult,
	string,
	"strict"
>;

console.log(firstResult); // "10"
console.log(secondResult); // "42"

const explicitlyTypedPipe = preparePipe<number>()(
	(value) => value * 2,
	DString.to,
);
const explicitResult = explicitlyTypedPipe(21);

type explicitCheck = ExpectType<
	typeof explicitResult,
	`${number}`,
	"strict"
>;

console.log(explicitResult); // "42"
