import { DFlow, pipe, type ExpectType } from "@scripts";

describe("throttling", () => {
	it("yields a throttling effect with keepLast false by default", () => {
		const result = DFlow.throttling(100);

		expect(result.next()).toStrictEqual({
			done: false,
			value: DFlow.createThrottling({
				time: 100,
				returnValue: undefined,
				keepLast: false,
			}),
		});
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Throttling<undefined>, undefined, any>,
			"strict"
		>;
	});

	it("yields an async throttling effect when keepLast is true", async() => {
		const result = DFlow.throttling(
			50,
			{
				returnValue: "skipped" as const,
				keepLast: true,
			},
		);

		await expect(result.next()).resolves.toStrictEqual({
			done: false,
			value: DFlow.createThrottling({
				time: 50,
				returnValue: "skipped",
				keepLast: true,
			}),
		});
		await expect(result.next()).resolves.toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.Throttling<"skipped">, undefined, any>,
			"strict"
		>;
	});
});
