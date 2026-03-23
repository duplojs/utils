import { DFlow, type ExpectType } from "@scripts";

describe("createDefer", () => {
	it("creates a defer kind with the provided callback", () => {
		const spy = vi.fn(() => "done" as const);
		const result = DFlow.createDefer(spy);

		expect(DFlow.deferKind.has(result)).toBe(true);
		expect(DFlow.deferKind.getValue(result)).toBe(spy);
		expect(DFlow.deferKind.getValue(result)()).toBe("done");
		expect(spy).toHaveBeenCalledTimes(1);

		type check = ExpectType<
			typeof result,
			DFlow.Defer<"done">,
			"strict"
		>;
	});
});
