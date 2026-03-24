import { DFlow, type ExpectType } from "@scripts";

describe("breakIf", () => {
	it("yields a break effect when the predicate returns true", () => {
		const result = DFlow.breakIf("value", (input) => input === "value");

		expect(result.next()).toStrictEqual({
			done: false,
			value: DFlow.createBreak("value"),
		});
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Break<"value">, string, any>,
			"strict"
		>;
	});

	it("returns the input when the predicate returns false", () => {
		const result = DFlow.breakIf("test" as "value" | "test", (input) => input === "value");

		expect(result.next()).toStrictEqual({
			done: true,
			value: "test",
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Break<"value">, "test", any>,
			"strict"
		>;
	});

	it("supports not predicate", () => {
		const result = DFlow.breakIf(
			10,
			(input) => input > 20,
		);

		expect(result.next()).toStrictEqual({
			done: true,
			value: 10,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Break<10>, 10, any>,
			"strict"
		>;
	});
});
