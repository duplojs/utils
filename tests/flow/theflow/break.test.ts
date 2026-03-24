
import { DFlow, type ExpectType } from "@scripts";

describe("createBreak", () => {
	it("creates a break kind with the provided value", () => {
		const result = DFlow.createBreak("stop" as const);

		expect(DFlow.breakKind.has(result)).toBe(true);
		expect(DFlow.breakKind.getValue(result)).toStrictEqual({ value: "stop" });

		type check = ExpectType<
			typeof result,
			DFlow.Break<"stop">,
			"strict"
		>;
	});

	it("uses undefined as the default break value", () => {
		const result = DFlow.createBreak();

		expect(DFlow.breakKind.has(result)).toBe(true);
		expect(DFlow.breakKind.getValue(result)).toStrictEqual({ value: undefined });
	});
});
