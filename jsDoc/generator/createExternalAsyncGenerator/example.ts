import { G } from "@scripts";

const first = G.createExternalAsyncGenerator<number>();
const firstPending = first.asyncGenerator.next();
first.next(42);
const firstResult = await firstPending;
// firstResult: { done: false, value: 42 }

const second = G.createExternalAsyncGenerator<string>();
const secondPending = second.asyncGenerator.next();
second.exit();
const secondResult = await secondPending;
// secondResult: { done: true, value: undefined }

const third = G.createExternalAsyncGenerator<string>();
const collected: string[] = [];
const consume = (async() => {
	for await (const value of third.asyncGenerator) {
		collected.push(value);
	}
})();
third.next("hello");
await consume;
// collected: ["hello"]
