import { DArray, DString, type ExpectType, pipe } from "@scripts";

describe("extractAll", () => {
	it("should return all extractions", () => {
		const result = DString.extractAll("id=1; id=2", /id=(?<id>\d+)/g);
		expect(DArray.from(result)).toStrictEqual([
			{
				matchedValue: "id=1",
				groups: ["1"],
				namedGroups: { id: "1" },
				offset: 0,
				self: "id=1; id=2",
			},
			{
				matchedValue: "id=2",
				groups: ["2"],
				namedGroups: { id: "2" },
				offset: 6,
				self: "id=1; id=2",
			},
		]);

		type check = ExpectType<
			typeof result,
			Generator<DString.ExtractResult>,
			"strict"
		>;
	});

	it("should return empty array when no match", () => {
		const result = DString.extractAll("hello", /\d+/g);
		expect(DArray.from(result)).toEqual([]);

		type check = ExpectType<
			typeof result,
			Generator<DString.ExtractResult>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"a1b2",
			DString.extractAll(/(\d)/g),
			DArray.from,
			DArray.map((value) => value.matchedValue),
		);
		expect(result).toEqual(["1", "2"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("should fallback to input when match metadata is missing", () => {
		const fakeMatch = Object.assign(["id=1", "1"], {
			index: undefined,
			input: undefined,
		});
		const fakeIterator = (function *() {
			yield fakeMatch;
		})();

		const matchAllSpy = vi.spyOn(String.prototype, "matchAll").mockReturnValueOnce(
			fakeIterator as any,
		);

		const result = DString.extractAll("id=1", /id=(\d+)/g);

		expect(DArray.from(result)).toStrictEqual([
			{
				matchedValue: "id=1",
				groups: ["1"],
				namedGroups: undefined,
				offset: 0,
				self: "id=1",
			},
		]);

		matchAllSpy.mockRestore();
	});
});
