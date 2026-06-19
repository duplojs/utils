import { DPattern, pipe, type ExpectType } from "@scripts";

describe("matchWithString", () => {
	it("should call the matching handler with the narrowed string in classic form", () => {
		const input = "failure" as "success" | "failure";
		const result = DPattern.matchWithString(input, {
			success: (value) => {
				type check = ExpectType<
					typeof value,
					"success",
					"strict"
				>;

				return 42 as const;
			},
			failure: (value) => {
				type check = ExpectType<
					typeof value,
					"failure",
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
		const input = "success" as "success" | "failure";
		const result = pipe(
			input,
			DPattern.matchWithString({
				success: (value) => {
					type check = ExpectType<
						typeof value,
						"success",
						"strict"
					>;

					return 42 as const;
				},
				failure: (value) => {
					type check = ExpectType<
						typeof value,
						"failure",
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

	it("should reject non-literal strings in classic and curried forms", () => {
		const input = "success" as string;

		// @ts-expect-error input must be a string literal union
		DPattern.matchWithString(input, {
			success: () => 42,
		});

		pipe(
			// @ts-expect-error curried matcher only accepts its string literal keys
			input,
			DPattern.matchWithString({
				success: () => 42,
			}),
		);

		expect(true).toBe(true);
	});

	it("should reject matchers with missing or additional keys", () => {
		const input = "success" as "success" | "failure";

		// @ts-expect-error matcher must handle every input literal
		DPattern.matchWithString(input, {
			success: () => 42,
		});

		// @ts-expect-error matcher cannot declare keys outside the input union
		DPattern.matchWithString(input, {
			success: () => 42,
			failure: () => "failed",
			unexpected: () => false,
		});

		pipe(
			input,
			// @ts-expect-error curried matcher must handle every piped input literal
			DPattern.matchWithString({
				success: () => 42,
			}),
		);
		pipe(
			input,
			DPattern.matchWithString(
				// @ts-expect-error curried matcher cannot declare keys outside its input union
				{
					success: () => 42,
					failure: () => "failed",
					unexpected: () => false,
				},
			),
		);

		expect(true).toBe(true);
	});
});
