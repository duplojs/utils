import { DClean, forward, pipe, type ExpectType } from "@scripts";

describe("matchWithNumberOtherwise", () => {
	it("should match a handled wrapped number and narrow both callbacks", () => {
		const input = forward<DClean.Primitive<1 | 2>>(DClean.Number.createOrThrow(1));
		const result = DClean.matchWithNumberOtherwise(input, {
			1: (value) => {
				type check = ExpectType<typeof value, DClean.Primitive<1 | 2> & DClean.Primitive<1>, "strict">;
				return "one" as const;
			},
		}, (value) => {
			type check = ExpectType<typeof value, DClean.Primitive<1 | 2> & DClean.Primitive<2>, "strict">;
			return "fallback" as const;
		});
		expect(result).toBe("one");
		type check = ExpectType<typeof result, "one" | "fallback", "strict">;
	});

	it("should delegate the original wrapped number in pipe", () => {
		const input = forward<DClean.Primitive<1 | 2>>(DClean.Number.createOrThrow(2));
		const result = pipe(input, DClean.matchWithNumberOtherwise({ 1: () => "one" as const }, (value) => {
			expect(value).toBe(input);
			return "fallback" as const;
		}));
		expect(result).toBe("fallback");
	});

	it("should reject matcher keys outside the wrapped union", () => {
		const input = DClean.Number.createOrThrow(1 as 1 | 2);
		DClean.matchWithNumberOtherwise(
			input,
			// @ts-expect-error matcher cannot contain unknown wrapped cases
			{
				1: () => "one",
				3: () => "three",
			},
			() => "fallback",
		);
		expect(true).toBe(true);
	});
});
