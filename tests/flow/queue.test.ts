import { DFlow, pipe, type ExpectType } from "@scripts";

describe("queue", () => {
	it("yields a queue effect and returns the injected resolver", async() => {
		const result = DFlow.queue({
			concurrency: 3,
		});
		const firstResult = await result.next();
		const resolver = vi.fn();

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createQueue({
				concurrency: 3,
				injectResolver: expect.any(Function),
			}),
		});

		DFlow.queueKind.getValue(firstResult.value as DFlow.Queue).injectResolver(resolver);

		await expect(result.next()).resolves.toStrictEqual({
			done: true,
			value: resolver,
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.Queue, () => void, unknown>,
			"strict"
		>;
	});

	it("uses concurrency one by default", async() => {
		const result = DFlow.queue();
		const firstResult = await result.next();
		const injectedResolver = () => undefined;

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createQueue({
				concurrency: 1,
				injectResolver: expect.any(Function),
			}),
		});

		DFlow.queueKind.getValue(firstResult.value as DFlow.Queue).injectResolver(injectedResolver);

		await expect(result.next()).resolves.toStrictEqual({
			done: true,
			value: injectedResolver,
		});
	});
});
