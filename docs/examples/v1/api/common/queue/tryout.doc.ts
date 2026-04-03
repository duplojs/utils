import { createExternalPromise, createQueue } from "@duplojs/utils";

const releaseSignal = createExternalPromise<void>();
const queue = createQueue({
	concurrency: 1,
});

const firstTask = queue.add(async() => {
	await releaseSignal.promise;
	return "first" as const;
});

const secondTask = queue.add(() => "second" as const);
releaseSignal.resolve();

const firstResult = await firstTask;
// firstResult: "first" or an execution-error Left
const secondResult = await secondTask;
// secondResult: "second" or an execution-error Left
