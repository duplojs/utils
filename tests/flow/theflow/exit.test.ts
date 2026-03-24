
import { DFlow, type ExpectType } from "@scripts";

describe("createExit", () => {
	it("creates an exit kind with the provided value", () => {
		const result = DFlow.createExit("stop" as const);

		expect(DFlow.exitKind.has(result)).toBe(true);
		expect(DFlow.exitKind.getValue(result)).toStrictEqual({ value: "stop" });

		type check = ExpectType<
			typeof result,
			DFlow.Exit<"stop">,
			"strict"
		>;
	});

	it("uses undefined as the default exit value", () => {
		const result = DFlow.createExit();

		expect(DFlow.exitKind.has(result)).toBe(true);
		expect(DFlow.exitKind.getValue(result)).toStrictEqual({ value: undefined });
	});
});
