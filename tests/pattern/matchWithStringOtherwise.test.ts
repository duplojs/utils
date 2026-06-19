import { DPattern, pipe, type ExpectType } from "@scripts";

describe("matchWithStringOtherwise", () => {
	it("should match a handled string and narrow both callbacks", () => {
		const input = "success" as "success" | "failure";
		const result = DPattern.matchWithStringOtherwise(input, {
			success: (value) => {
				type check = ExpectType<typeof value, "success", "strict">;
				return 42 as const;
			},
		}, (value) => {
			type check = ExpectType<typeof value, "failure", "strict">;
			return "fallback" as const;
		});

		expect(result).toBe(42);
		type check = ExpectType<typeof result, 42 | "fallback", "strict">;
	});

	it("should delegate an unhandled string in pipe", () => {
		const result = pipe(
			"failure" as "success" | "failure",
			DPattern.matchWithStringOtherwise({ success: () => 42 as const }, (value) => {
				type check = ExpectType<typeof value, "failure", "strict">;
				return value;
			}),
		);
		expect(result).toBe("failure");
		type check = ExpectType<typeof result, 42 | "failure", "strict">;
	});

	it("should reject matcher keys outside the input union", () => {
		DPattern.matchWithStringOtherwise(
			"success" as "success" | "failure",
			// @ts-expect-error matcher cannot contain unknown string cases
			{
				success: () => 42,
				unexpected: () => false,
			},
			() => "fallback",
		);
		expect(true).toBe(true);
	});
});
