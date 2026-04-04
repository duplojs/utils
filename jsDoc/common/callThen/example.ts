import { callThen } from "@scripts";

const syncResult = callThen(
	2,
	(value) => value * 3,
);
// type: number

const asyncFromSync = callThen(
	"duplo",
	async(value) => Promise.resolve(value.toUpperCase()),
);
// type: Promise<string>

const asyncFromPromise = callThen(
	Promise.resolve({
		count: 2,
	}),
	({ count }) => count + 1,
);
// type: Promise<number>
