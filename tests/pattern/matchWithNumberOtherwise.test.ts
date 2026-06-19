import { DPattern, pipe, type ExpectType } from "@scripts";

describe("matchWithNumberOtherwise", () => {
	it("should match a handled number and narrow both callbacks", () => {
		const input = 1 as 1 | 2;
		const result = DPattern.matchWithNumberOtherwise(input, {
			1: (value) => {
				type check = ExpectType<typeof value, 1, "strict">;
				return "one" as const;
			},
		}, (value) => {
			type check = ExpectType<typeof value, 2, "strict">;
			return value;
		});

		expect(result).toBe("one");
		type check = ExpectType<typeof result, "one" | 2, "strict">;
	});

	it("should delegate an unhandled number in pipe", () => {
		const result = pipe(
			2 as 1 | 2,
			DPattern.matchWithNumberOtherwise({ 1: () => "one" as const }, (value) => {
				type check = ExpectType<typeof value, 2, "strict">;
				return value;
			}),
		);
		expect(result).toBe(2);
		type check = ExpectType<typeof result, "one" | 2, "strict">;
	});

	it("should reject matcher keys outside the input union", () => {
		DPattern.matchWithNumberOtherwise(
			1 as 1 | 2,
			// @ts-expect-error matcher cannot contain unknown number cases
			{
				1: () => "one",
				3: () => "three",
			},
			() => "fallback",
		);
		expect(true).toBe(true);
	});
});
