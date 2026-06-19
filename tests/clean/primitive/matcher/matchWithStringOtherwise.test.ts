import { DClean, forward, pipe, type ExpectType } from "@scripts";

describe("matchWithStringOtherwise", () => {
	it("should match a handled wrapped string and narrow both callbacks", () => {
		const input = forward<DClean.Primitive<"success" | "failure">>(DClean.String.createOrThrow("success"));
		const result = DClean.matchWithStringOtherwise(input, {
			success: (value) => {
				type check = ExpectType<typeof value, DClean.Primitive<"success" | "failure"> & DClean.Primitive<"success">, "strict">;
				return 42 as const;
			},
		}, (value) => {
			type check = ExpectType<typeof value, DClean.Primitive<"success" | "failure"> & DClean.Primitive<"failure">, "strict">;
			return "fallback" as const;
		});
		expect(result).toBe(42);
		type check = ExpectType<typeof result, 42 | "fallback", "strict">;
	});

	it("should delegate the original wrapped string in pipe", () => {
		const input = forward<DClean.Primitive<"success" | "failure">>(DClean.String.createOrThrow("failure"));
		const result = pipe(input, DClean.matchWithStringOtherwise({ success: () => 42 as const }, (value) => {
			expect(value).toBe(input);
			return "fallback" as const;
		}));
		expect(result).toBe("fallback");
	});

	it("should reject matcher keys outside the wrapped union", () => {
		const input = DClean.String.createOrThrow("success" as "success" | "failure");
		DClean.matchWithStringOtherwise(
			input,
			// @ts-expect-error matcher cannot contain unknown wrapped cases
			{
				success: () => 42,
				unexpected: () => false,
			},
			() => "fallback",
		);
		expect(true).toBe(true);
	});
});
