import { createQueue } from "@scripts";

const defaultQueue = createQueue();
const numberResult = await defaultQueue.add(() => 42);
// type: 42 | Left<"execution-error", unknown>

const serialQueue = createQueue({
	concurrency: 1,
});
const textResult = await serialQueue.add(() => "hello" as const);
// type: "hello" | Left<"execution-error", unknown>

const asyncQueue = createQueue();
const asyncResult = await asyncQueue.add(
	async() => Promise.resolve("done" as const),
);
// type: "done" | Left<"execution-error", unknown>
