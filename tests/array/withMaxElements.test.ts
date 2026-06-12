import { type AnyTuple, DArray, type ExpectType, pipe } from "@scripts";

describe("withMaxElements", () => {
	it("creates a tuple constrained by its current length", () => {
		const value = ["one", "two", "three"] as const;

		const result = DArray.withMaxElements(value);

		type check = ExpectType<
			typeof result,
			readonly ["one", "two", "three"] & DArray.MaxElements<3>,
			"strict"
		>;

		expect(result).toBe(value);
	});

	it("creates a tuple constrained by a wider max elements length", () => {
		const value = ["one", "two", "three"] as const;

		const result = DArray.withMaxElements(value, 5);

		type check = ExpectType<
			typeof result,
			readonly ["one", "two", "three"] & DArray.MaxElements<5>,
			"strict"
		>;

		expect(result).toBe(value);
	});

	it("infers max elements length from a contextual contract", () => {
		const value = ["one", "two", "three"] as const;

		const result = DArray.withMaxElements(value) satisfies DArray.MaxElements<5>;

		type check = ExpectType<
			typeof result,
			readonly ["one", "two", "three"] & DArray.MaxElements<5>,
			"strict"
		>;

		expect(result).toBe(value);
	});

	it("creates a singleton tuple constrained by its current length in pipe", () => {
		const value = ["one"] as const;

		const result = pipe(
			value,
			DArray.withMaxElements,
		);

		type check = ExpectType<
			typeof result,
			readonly ["one"] & DArray.MaxElements<1>,
			"strict"
		>;

		expect(result).toBe(value);
	});

	it("rejects invalid max elements constraints at type level", () => {
		const value = ["one", "two", "three"] as const;

		// @ts-expect-error max elements length cannot be lower than the tuple length
		DArray.withMaxElements(value, 2);

		const unknownLength = ["one", "two", "three"];

		// @ts-expect-error input must be a tuple with finite length
		DArray.withMaxElements(unknownLength);

		expect(value).toStrictEqual(["one", "two", "three"]);
	});

	it("rejects contextual max elements contracts lower than the tuple length", () => {
		const value = ["one", "two", "three", "four", "five", "six"] as const;

		// @ts-expect-error contextual max elements length cannot be lower than the tuple length
		const result = DArray.withMaxElements(value) satisfies DArray.MaxElements<5>;

		expect(result).toBe(value);
	});

	it("rejects invalid tuple", () => {
		const value: AnyTuple<string> = ["one"];

		const result = pipe(
			value,
			// @ts-expect-error invalid tuple
			DArray.withMaxElements,
		);

		expect(result).toBe(value);
	});
});
