import { DFlow, type ExpectType } from "@scripts";

describe("createQueue", () => {
	it("creates a queue kind with the provided concurrency and resolver injector", () => {
		const injectResolver = vi.fn();
		const result = DFlow.createQueue({
			concurrency: 3,
			injectResolver,
		});
		const resolver = vi.fn();

		expect(DFlow.queueKind.has(result)).toBe(true);
		expect(DFlow.queueKind.getValue(result)).toStrictEqual({
			concurrency: 3,
			injectResolver,
		});

		DFlow.queueKind.getValue(result).injectResolver(resolver);

		expect(injectResolver).toHaveBeenCalledWith(resolver);

		type check = ExpectType<
			typeof result,
			DFlow.Queue,
			"strict"
		>;
	});
});
