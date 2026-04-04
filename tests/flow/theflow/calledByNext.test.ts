import { DFlow, type ExpectType } from "@scripts";

describe("createCalledByNext", () => {
	it("creates a called-by-next kind with the provided callback", () => {
		const spy = vi.fn(() => "done" as const);
		const result = DFlow.createCalledByNext(spy);

		expect(DFlow.calledByNextKind.has(result)).toBe(true);
		expect(DFlow.calledByNextKind.getValue(result)).toBe(spy);
		expect(DFlow.calledByNextKind.getValue(result)()).toBe("done");
		expect(spy).toHaveBeenCalledTimes(1);

		type check = ExpectType<
			typeof result,
			DFlow.CalledByNext<"done">,
			"strict"
		>;
	});
});
