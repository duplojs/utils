import { createExternalPromise, createQueue, DEither, type EscapeVoid, pipe, type ExpectType, type Queue, sleep } from "@scripts";

describe("queue", () => {
	it("executes queued tasks in FIFO order with concurrency one", async() => {
		const queue = createQueue({
			concurrency: 1,
		});
		const blocker = createExternalPromise<EscapeVoid>();
		const executionOrder: string[] = [];

		const firstTask = queue.add(async() => {
			executionOrder.push("first-start");
			await blocker.promise;
			executionOrder.push("first-end");
			return "first" as const;
		});
		const secondTask = queue.add(() => {
			executionOrder.push("second");
			return "second" as const;
		});
		const thirdTask = queue.add(() => {
			executionOrder.push("third");
			return "third" as const;
		});

		await sleep();
		expect(executionOrder).toStrictEqual(["first-start"]);

		blocker.resolve();

		await expect(firstTask).resolves.toBe("first");
		await expect(secondTask).resolves.toBe("second");
		await expect(thirdTask).resolves.toBe("third");
		expect(executionOrder).toStrictEqual([
			"first-start",
			"first-end",
			"second",
			"third",
		]);

		type check = ExpectType<
			typeof secondTask,
			Promise<
				| "second"
				| DEither.Left<"execution-error", unknown>
			>,
			"strict"
		>;
	});

	it("falls back to concurrency one when the provided value is lower than one", async() => {
		const queue = createQueue({
			concurrency: 0,
		});
		const blocker = createExternalPromise<EscapeVoid>();
		let secondTaskStarted = false;

		const firstTask = queue.add(async() => {
			await blocker.promise;
			return 1 as const;
		});
		const secondTask = queue.add(() => {
			secondTaskStarted = true;
			return 2 as const;
		});

		await Promise.resolve();
		expect(secondTaskStarted).toBe(false);

		blocker.resolve();

		await expect(firstTask).resolves.toBe(1);
		await expect(secondTask).resolves.toBe(2);
	});

	it("wraps a thrown error into an execution-error left", async() => {
		const queue = createQueue();
		const error = new Error("sync boom");

		const result = await queue.add(() => {
			throw error;
		});

		expect(result).toStrictEqual(
			DEither.left("execution-error", error),
		);
	});

	it("wraps a rejected promise into an execution-error left", async() => {
		const queue = createQueue();
		const error = new Error("async boom");

		const result = await queue.add(
			() => Promise.reject(error),
		);

		expect(result).toStrictEqual(
			DEither.left("execution-error", error),
		);
	});

	it("reserves a slot with addExternal until the returned resolver is called", async() => {
		const queue = createQueue({
			concurrency: 1,
		});
		const blocker = createExternalPromise<EscapeVoid>();
		const executionOrder: string[] = [];

		const firstTask = queue.add(async() => {
			executionOrder.push("first");
			await blocker.promise;
			return "first" as const;
		});
		const releaseTask = queue.addExternal();
		const queuedTask = queue.add(() => {
			executionOrder.push("queued");
			return "queued" as const;
		});

		await sleep();
		blocker.resolve();

		await expect(firstTask).resolves.toBe("first");

		const release = await releaseTask;
		await sleep();
		expect(executionOrder).toStrictEqual(["first"]);

		release();

		await expect(queuedTask).resolves.toBe("queued");
		expect(executionOrder).toStrictEqual([
			"first",
			"queued",
		]);
	});
});
