import { DFlow, pipe, type ExpectType } from "@scripts";

describe("calledByNext", () => {
	it("yields a called-by-next effect with the provided function", async() => {
		const theFunction = () => "value";
		const result = DFlow.calledByNext(theFunction);
		const firstResult = await result.next();

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createCalledByNext(theFunction),
		});
		expect(DFlow.calledByNextKind.getValue(firstResult.value!)).toBe(theFunction);
		expect(result.next()).toStrictEqual({
			done: true,
			value: undefined,
		});

		type check = ExpectType<
			typeof result,
			AsyncGenerator<DFlow.CalledByNext<string>, void, unknown>,
			"strict"
		>;
	});
});
