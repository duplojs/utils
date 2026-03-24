import { DFlow, type ExpectType } from "@scripts";

describe("finalizer", () => {
	it("yields a finalizer effect with the provided function", () => {
		const theFunction = () => "value";
		const result = DFlow.finalizer(theFunction);
		const firstResult = result.next();

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createFinalizer(theFunction),
		});
		expect(DFlow.finalizerKind.getValue(firstResult.value!)).toBe(theFunction);
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Finalizer<string>, undefined, any>,
			"strict"
		>;
	});
});
