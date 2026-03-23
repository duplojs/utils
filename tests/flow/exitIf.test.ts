import { DFlow, type ExpectType } from "@scripts";

describe("exitIf", () => {
	it("yields a exit effect when the predicate returns true", () => {
		const result = DFlow.exitIf("value", (input) => input === "value");

		expect(result.next()).toStrictEqual({
			done: false,
			value: DFlow.createExit("value"),
		});
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Exit<"value">, string, any>,
			"strict"
		>;
	});

	it("returns the input when the predicate returns false", () => {
		const result = DFlow.exitIf("test" as "value" | "test", (input) => input === "value");

		expect(result.next()).toStrictEqual({
			done: true,
			value: "test",
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Exit<"value">, "test", any>,
			"strict"
		>;
	});

	it("supports not predicate", () => {
		const result = DFlow.exitIf(
			10,
			(input) => input > 20,
		);

		expect(result.next()).toStrictEqual({
			done: true,
			value: 10,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Exit<10>, 10, any>,
			"strict"
		>;
	});
});
