import { DPattern, pipe, type ExpectType } from "@scripts";

describe("matchWithNumber", () => {
	it("should call the matching handler with the narrowed number in classic form", () => {
		const input = 2 as 1 | 2;
		const result = DPattern.matchWithNumber(input, {
			1: (value) => {
				type check = ExpectType<
					typeof value,
					1,
					"strict"
				>;

				return 42 as const;
			},
			2: (value) => {
				type check = ExpectType<
					typeof value,
					2,
					"strict"
				>;

				return "failed" as const;
			},
		});

		expect(result).toBe("failed");

		type check = ExpectType<
			typeof result,
			42 | "failed",
			"strict"
		>;
	});

	it("should work in pipe with the curried form", () => {
		const input = 1 as 1 | 2;
		const result = pipe(
			input,
			DPattern.matchWithNumber({
				1: (value) => {
					type check = ExpectType<
						typeof value,
						1,
						"strict"
					>;

					return 42 as const;
				},
				2: (value) => {
					type check = ExpectType<
						typeof value,
						2,
						"strict"
					>;

					return "failed" as const;
				},
			}),
		);

		expect(result).toBe(42);

		type check = ExpectType<
			typeof result,
			42 | "failed",
			"strict"
		>;
	});

	it("should reject non-literal numbers in classic and curried forms", () => {
		const input = 1 as number;

		// @ts-expect-error input must be a number literal union
		DPattern.matchWithNumber(input, {
			1: () => 42,
		});

		pipe(
			// @ts-expect-error curried matcher only accepts its number literal keys
			input,
			DPattern.matchWithNumber({
				1: () => 42,
			}),
		);

		expect(true).toBe(true);
	});

	it("should reject matchers with missing or additional keys", () => {
		const input = 1 as 1 | 2;

		// @ts-expect-error matcher must handle every input literal
		DPattern.matchWithNumber(input, {
			1: () => 42,
		});

		// @ts-expect-error matcher cannot declare keys outside the input union
		DPattern.matchWithNumber(input, {
			1: () => 42,
			2: () => "failed",
			3: () => false,
		});

		pipe(
			input,
			// @ts-expect-error curried matcher must handle every piped input literal
			DPattern.matchWithNumber({
				1: () => 42,
			}),
		);
		pipe(
			input,
			DPattern.matchWithNumber(
				// @ts-expect-error curried matcher cannot declare keys outside its input union
				{
					1: () => 42,
					2: () => "failed",
					3: () => false,
				},
			),
		);

		expect(true).toBe(true);
	});
});
