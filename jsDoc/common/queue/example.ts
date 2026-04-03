import { createExternalPromise, createQueue } from "@scripts";

const syncQueue = createQueue();
const syncResult = await syncQueue.add(() => 42);
// syncResult: 42

const guardedQueue = createQueue({
	concurrency: 1,
});
const releaseSignal = createExternalPromise<void>();
const asyncResult = guardedQueue.add(async() => {
	await releaseSignal.promise;
	return "done";
});
releaseSignal.resolve();
// await asyncResult: "done"

const reservedQueue = createQueue();
const release = await reservedQueue.addExternal();
release();
