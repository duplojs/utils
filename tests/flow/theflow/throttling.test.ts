import { DFlow, type ExpectType } from "@scripts";

describe("createThrottling", () => {
	it("creates a throttling kind with the provided properties", () => {
		const result = DFlow.createThrottling({
			time: 250,
			returnValue: "value" as const,
			keepLast: true,
		});

		expect(DFlow.throttlingKind.has(result)).toBe(true);
		expect(DFlow.throttlingKind.getValue(result)).toStrictEqual({
			time: 250,
			returnValue: "value",
			keepLast: true,
		});

		type check = ExpectType<
			typeof result,
			DFlow.Throttling<"value">,
			"strict"
		>;
	});
});
