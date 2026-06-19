import { pipe, prepareAsyncPipe, S } from "@scripts";

const fetchLabel = prepareAsyncPipe<number>()(
	async(value) => Promise.resolve(value * 2),
	S.to,
);

await fetchLabel(10); // "20"
await fetchLabel(Promise.resolve(15)); // "30"

const numberToString: (
	input: number
) => Promise<string> = prepareAsyncPipe()(
	S.to,
);

await numberToString(42); // "42"

const normalizeName = prepareAsyncPipe<string>()(
	async(value) => Promise.resolve(value.trim()),
	(value) => value.toUpperCase(),
);

await pipe(
	"  Ada  ",
	normalizeName,
); // "ADA"
