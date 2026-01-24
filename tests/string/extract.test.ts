import { DString, type ExpectType, pipe } from "@scripts";

describe("extract", () => {
	it("should return extract result with groups and named groups", () => {
		const result = DString.extract("id=order-42", /(?<name>\w+)-(\d+)/);
		expect(result).toEqual({
			matchedValue: "order-42",
			groups: ["order", "42"],
			namedGroups: { name: "order" },
			offset: 3,
			self: "id=order-42",
		});

		type check = ExpectType<
			typeof result,
			DString.ExtractResult | undefined,
			"strict"
		>;
	});

	it("should return undefined when no match", () => {
		expect(DString.extract("hello", /\d+/)).toBeUndefined();
	});

	it("use in pipe", () => {
		const result = pipe(
			"user-7",
			DString.extract(/(\w+)-(\d+)/),
		);
		expect(result?.groups).toEqual(["user", "7"]);

		type check = ExpectType<
			typeof result,
			DString.ExtractResult | undefined,
			"strict"
		>;
	});

	it("should fallback to input when match metadata is missing", () => {
		const matchSpy = vi.spyOn(String.prototype, "match").mockReturnValueOnce(
			Object.assign(["x"], {
				index: undefined,
				input: undefined,
			}) as RegExpMatchArray,
		);

		const result = DString.extract("x", /x/);

		expect(result).toEqual({
			matchedValue: "x",
			groups: [],
			namedGroups: undefined,
			offset: 0,
			self: "x",
		});

		matchSpy.mockRestore();
	});
});
