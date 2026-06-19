import { DClean, DDataParser, forward, pipe, type ExpectType } from "@scripts";

describe("matchWithNumber", () => {
	it("should discriminate a union of number primitives", () => {
		const input = forward<
			| DClean.Primitive<1>
			| DClean.Primitive<2>
		>(DClean.Number.createOrThrow(2));
		const result = DClean.matchWithNumber(input, {
			1: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.Primitive<1>,
					"strict"
				>;

				return 42 as const;
			},
			2: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.Primitive<2>,
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
			DClean.Primitive<1 | 2>
		>(
			DClean.Number.createOrThrow(1),
		);
		const result = pipe(
			input,
			DClean.matchWithNumber({
				1: (value) => {
					type check = ExpectType<
						typeof value,
						DClean.Primitive<1 | 2> & DClean.Primitive<1>,
						"strict"
					>;

					expect(value).toBe(input);
					return 42 as const;
				},
				2: () => "failed" as const,
			}),
		);

		expect(result).toBe(42);

		type check = ExpectType<typeof result, 42 | "failed", "strict">;
	});

	it("should reject a non-literal number primitive in classic and curried forms", () => {
		const input = DClean.Number.createOrThrow(1 as number);
		const matcher: Record<
			number,
			(value: DClean.Primitive<number>) => string
		> = {
			1: (value) => {
				expect(value).toBe(input);
				return "matched";
			},
		};

		// @ts-expect-error input primitive must contain number literal values
		DClean.matchWithNumber(input, matcher);

		pipe(
			// @ts-expect-error curried matcher only accepts number literal primitives
			input,
			DClean.matchWithNumber(matcher),
		);

		expect(true).toBe(true);
	});

	it("should preserve constrained number types in each branch", () => {
		const input = forward<
			| DClean.ConstrainedType<"positive", 1>
			| DClean.ConstrainedType<"positive", 2>
		>(DClean.Positive.createOrThrow(2));
		const result = DClean.matchWithNumber(input, {
			1: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.ConstrainedType<"positive", 1>
						& DClean.Primitive<1>,
					"strict"
				>;

				return 42 as const;
			},
			2: (value) => {
				type check = ExpectType<
					typeof value,
					DClean.ConstrainedType<"positive", 2>
						& DClean.Primitive<2>,
					"strict"
				>;

				expect(value).toBe(input);
				return "failed" as const;
			},
		});

		expect(result).toBe("failed");
	});

	it("should preserve a number new type when discriminating in pipe", () => {
		const StatusCode = DClean.createNewType(
			"StatusCode",
			DDataParser.number(),
		);
		const input = forward<
			DClean.NewType<"StatusCode", 1 | 2, never>
		>(StatusCode.createOrThrow(1));
		const result = pipe(
			input,
			DClean.matchWithNumber({
				1: (value) => {
					type check = ExpectType<
						typeof value,
						DClean.NewType<"StatusCode", 1 | 2, never>
							& DClean.Primitive<1>,
						"strict"
					>;

					expect(value).toBe(input);
					return 42 as const;
				},
				2: () => "failed" as const,
			}),
		);

		expect(result).toBe(42);
	});

	it("should reject missing and additional literal matcher keys", () => {
		const input = DClean.Number.createOrThrow(1 as 1 | 2);

		// @ts-expect-error matcher must handle every wrapped literal
		DClean.matchWithNumber(input, {
			1: () => 42,
		});

		// @ts-expect-error matcher cannot contain keys outside the wrapped union
		DClean.matchWithNumber(input, {
			1: () => 42,
			2: () => "failed",
			3: () => false,
		});

		expect(true).toBe(true);
	});
});
