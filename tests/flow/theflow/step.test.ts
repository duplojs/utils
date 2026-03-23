import { DFlow, type ExpectType } from "@scripts";

describe("createStep", () => {
	it("creates a step kind with the provided name", () => {
		const result = DFlow.createStep("my-step");

		expect(DFlow.stepKind.has(result)).toBe(true);
		expect(DFlow.stepKind.getValue(result)).toBe("my-step");

		type check = ExpectType<
			typeof result,
			DFlow.Step<"my-step">,
			"strict"
		>;
	});
});
