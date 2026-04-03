import { createQueue } from "@duplojs/utils";

const queue = createQueue({
	concurrency: 1,
});
const firstTask = queue.add(() => "first" as const);
const secondTask = queue.add(() => "second" as const);

const firstResult = await firstTask;
// firstResult: "first" or an execution-error Left
const secondResult = await secondTask;
// secondResult: "second" or an execution-error Left
