import { DFlow, type ExpectType } from "@scripts";

describe("defer", () => {
	it("yields a defer effect with the provided function", () => {
		const theFunction = () => "value";
		const result = DFlow.defer(theFunction);
		const firstResult = result.next();

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createDefer(theFunction),
		});
		expect(DFlow.deferKind.getValue(firstResult.value!)).toBe(theFunction);
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Defer<string>, undefined, any>,
			"strict"
		>;
	});
});
