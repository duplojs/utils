import { DFlow, type ExpectType } from "@scripts";

describe("step", () => {
	it("yields a step effect and returns the sync function result", () => {
		const result = DFlow.step("my-step", () => "value");

		expect(result.next()).toStrictEqual({
			done: false,
			value: DFlow.createStep("my-step"),
		});
		expect(result.next()).toStrictEqual({
			done: true,
			value: "value",
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Step<"my-step">, string, any>,
			"strict"
		>;
	});

	it("yields a step effect and awaits the async function result", async() => {
		const result = DFlow.step("my-step", async() => Promise.resolve("value"));

		expect(await result.next()).toStrictEqual({
			done: false,
			value: DFlow.createStep("my-step"),
		});
		expect(await result.next()).toStrictEqual({
			done: true,
			value: "value",
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.Step<"my-step">, string, any>,
			"strict"
		>;
	});

	it("returns undefined when no function is provided", () => {
		const result = DFlow.step("my-step");

		expect(result.next()).toStrictEqual({
			done: false,
			value: DFlow.createStep("my-step"),
		});
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Step<"my-step">, void, any>,
			"strict"
		>;
	});
});
