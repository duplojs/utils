/* eslint-disable require-yield */
import { DFlow, type ExpectType } from "@scripts";

describe("toFunction", () => {
	it("converts a flow function into a callable function", () => {
		const handler = DFlow.toFunction(
			function *(input: number) {
				return input + 1;
			},
		);
		const result = handler(41);

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;

		type checkHandler = ExpectType<
			typeof handler,
			(input: number) => number,
			"strict"
		>;
	});

	it("converts a created flow into a callable function", () => {
		const flow = DFlow.create(
			function *(input: string) {
				return input.toUpperCase();
			},
		);
		const handler = DFlow.toFunction(flow);
		const result = handler("duplo");

		expect(result).toBe("DUPLO");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("supports includeDetails", () => {
		const handler = DFlow.toFunction(
			function *(input: string) {
				yield *DFlow.step("to-function");
				return input.length;
			},
			{
				includeDetails: true,
			},
		);
		const result = handler("value");

		expect(result).toStrictEqual({
			result: 5,
			steps: ["to-function"],
		});

		type check = ExpectType<
			typeof result,
			DFlow.FlowDetails<number, "to-function">,
			"strict"
		>;
	});

	it("passes dependencies to the wrapped run call", () => {
		const dependence = DFlow.createDependence("service")<string>;
		const handler = DFlow.toFunction(
			function *() {
				const service = yield *DFlow.inject(dependence);

				return `hello ${service}`;
			},
			{
				dependencies: {
					service: "world",
				},
			},
		);
		const result = handler(undefined);

		expect(result).toBe("hello world");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
