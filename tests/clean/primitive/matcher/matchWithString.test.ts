import { DClean, DDataParser, forward, pipe, type ExpectType } from "@scripts";

describe("matchWithString", () => {
	it("should discriminate a union of string primitives", () => {
		const input = forward<
			| DClean.Primitive<"success">
			| DClean.Primitive<"failure">
		>(DClean.String.createOrThrow("failure"));
		const result = DClean.matchWithString(input, {
			success: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.Primitive<"success">,
					"strict"
				>;

				return 42 as const;
			},
			failure: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.Primitive<"failure">,
					"strict"
				>;

				expect(value).toBe(input);
				return "failed" as const;
			},
		});

		expect(result).toBe("failed");

		type check = ExpectType<typeof result, 42 | "failed", "strict">;
	});

	it("should discriminate literal values contained in one primitive in pipe", () => {
		const input = forward<
			DClean.Primitive<"success" | "failure">
		>(
			DClean.String.createOrThrow("success"),
		);
		const result = pipe(
			input,
			DClean.matchWithString({
				success: (value) => {
					type check = ExpectType<
						typeof value,
						DClean.Primitive<"success" | "failure">
							& DClean.Primitive<"success">,
						"strict"
					>;

					expect(value).toBe(input);
					return 42 as const;
				},
				failure: () => "failed" as const,
			}),
		);

		expect(result).toBe(42);

		type check = ExpectType<typeof result, 42 | "failed", "strict">;
	});

	it("should reject a non-literal string primitive in classic and curried forms", () => {
		const input = DClean.String.createOrThrow("success" as string);
		const matcher: Record<
			string,
			(value: DClean.Primitive<string>) => string
		> = {
			success: (value) => {
				expect(value).toBe(input);
				return "matched";
			},
		};

		// @ts-expect-error input primitive must contain string literal values
		DClean.matchWithString(input, matcher);

		pipe(
			// @ts-expect-error curried matcher only accepts string literal primitives
			input,
			DClean.matchWithString(matcher),
		);

		expect(true).toBe(true);
	});

	it("should preserve constrained string types in each branch", () => {
		const constraint = DClean.StringMin(1);
		const input = forward<
			| DClean.ConstrainedType<"string-min-10", "success">
			| DClean.ConstrainedType<"string-min-1", "failure">
		>(constraint.createOrThrow("failure"));
		const result = DClean.matchWithString(input, {
			success: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.ConstrainedType<"string-min-10", "success">
						& DClean.Primitive<"success">,
					"strict"
				>;

				return 42 as const;
			},
			failure: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.ConstrainedType<"string-min-1", "failure">
						& DClean.Primitive<"failure">,
					"strict"
				>;

				expect(value).toBe(input);
				return "failed" as const;
			},
		});

		expect(result).toBe("failed");
	});

	it("should preserve a string new type when discriminating in pipe", () => {
		const Status = DClean.createNewType(
			"Status",
			DDataParser.string(),
		);
		const input = forward<
			DClean.NewType<"Status", "success" | "failure", never>
		>(Status.createOrThrow("success"));
		const result = pipe(
			input,
			DClean.matchWithString({
				success: (value) => {
					type check = ExpectType<
						typeof value,
						DClean.NewType<"Status", "success" | "failure", never>
							& DClean.Primitive<"success">,
						"strict"
					>;

					expect(value).toBe(input);
					return 42 as const;
				},
				failure: () => "failed" as const,
			}),
		);

		expect(result).toBe(42);
	});

	it("should reject missing and additional literal matcher keys", () => {
		const input = DClean.String.createOrThrow(
			"success" as "success" | "failure",
		);

		// @ts-expect-error matcher must handle every wrapped literal
		DClean.matchWithString(input, {
			success: () => 42,
		});

		// @ts-expect-error matcher cannot contain keys outside the wrapped union
		DClean.matchWithString(input, {
			success: () => 42,
			failure: () => "failed",
			unexpected: () => false,
		});

		expect(true).toBe(true);
	});
});
