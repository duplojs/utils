import { DFlow, type ExpectType } from "@scripts";

describe("createFinalizer", () => {
	it("creates a finalizer kind with the provided callback", () => {
		const spy = vi.fn(() => "done" as const);
		const result = DFlow.createFinalizer(spy);

		expect(DFlow.finalizerKind.has(result)).toBe(true);
		expect(DFlow.finalizerKind.getValue(result)).toBe(spy);
		expect(DFlow.finalizerKind.getValue(result)()).toBe("done");
		expect(spy).toHaveBeenCalledTimes(1);

		type check = ExpectType<
			typeof result,
			DFlow.Finalizer<"done">,
			"strict"
		>;
	});
});
