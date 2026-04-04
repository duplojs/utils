import { DFlow, type ExpectType } from "@scripts";

describe("createDebounce", () => {
	it("creates a debounce kind with the provided properties", () => {
		const result = DFlow.createDebounce({
			time: 250,
			returnValue: "value" as const,
		});

		expect(DFlow.debounceKind.has(result)).toBe(true);
		expect(DFlow.debounceKind.getValue(result)).toStrictEqual({
			time: 250,
			returnValue: "value",
		});

		type check = ExpectType<
			typeof result,
			DFlow.Debounce<"value">,
			"strict"
		>;
	});
});
