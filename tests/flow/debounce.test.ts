import { DFlow, type ExpectType } from "@scripts";

describe("debounce", () => {
	it("yields a debounce effect with the provided time and fallback value", async() => {
		const result = DFlow.debounce(
			100,
			{ returnValue: "skipped" as const },
		);

		await expect(result.next()).resolves.toStrictEqual({
			done: false,
			value: DFlow.createDebounce({
				time: 100,
				returnValue: "skipped",
			}),
		});
		await expect(result.next()).resolves.toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.Debounce<"skipped">, undefined, any>,
			"two-extends-one"
		>;
	});

	it("uses undefined as the fallback value by default", async() => {
		const result = DFlow.debounce(50);

		await expect(result.next()).resolves.toStrictEqual({
			done: false,
			value: DFlow.createDebounce({
				time: 50,
				returnValue: undefined,
			}),
		});
		await expect(result.next()).resolves.toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.Debounce<undefined>, undefined, any>,
			"two-extends-one"
		>;
	});
});
