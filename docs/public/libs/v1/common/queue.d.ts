import { type Kind } from "./kind";
import * as DEither from "../either";
export declare const queueKind: import("./kind").KindHandler<import("./kind").KindDefinition<"queue", unknown>>;
export interface Queue extends Kind<typeof queueKind.definition> {
    add<GenericOutput extends unknown>(theFunction: () => GenericOutput): Promise<Awaited<GenericOutput> | DEither.Left<"execution-error", unknown>>;
    addExternal(): Promise<() => void>;
}
export interface CreateQueueParams {
    concurrency?: number;
}
/**
 * The createQueue() function creates a FIFO queue object that limits how many tasks run at the same time and resolves each task result as a promise.
 * 
 * Supported call styles:
 * - Classic: `createQueue()` → returns a queue object
 * - Classic with options: `createQueue({ concurrency })` → returns a queue object
 * 
 * Behavior:
 * - `queue.add(callback)` starts the callback immediately when a slot is available, otherwise it enqueues it
 * - task results are always exposed through a promise
 * - thrown errors and rejected promises are converted to `DEither.left("execution-error", error)`
 * - `queue.addExternal()` reserves one slot and resolves with a release function
 * 
 * ```ts
 * const defaultQueue = createQueue();
 * const numberResult = await defaultQueue.add(() => 42);
 * // type: 42 | Left<"execution-error", unknown>
 * 
 * const serialQueue = createQueue({
 * 	concurrency: 1,
 * });
 * const textResult = await serialQueue.add(() => "hello" as const);
 * // type: "hello" | Left<"execution-error", unknown>
 * 
 * const asyncQueue = createQueue();
 * const asyncResult = await asyncQueue.add(
 * 	async() => Promise.resolve("done" as const),
 * );
 * // type: "done" | Left<"execution-error", unknown>
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/queue
 * 
 */
export declare function createQueue(params?: CreateQueueParams): Queue;
