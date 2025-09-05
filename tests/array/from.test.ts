import { type ExpectType, pipe } from "@scripts/common";
import { DArray } from "@scripts/index";

describe("from", () => {
	it("creates array from arrayLike", () => {
		const arrayLike = {
			0: "a",
			1: "b",
			length: 2,
		};

		const result = DArray.from(arrayLike);

		expect(result).toEqual(["a", "b"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("creates array from iterable", () => {
		const iterable = new Set([1, 2, 3]);
		const result = DArray.from(iterable);

		expect(result).toEqual([1, 2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("creates array from async generator", async() => {
		const iterable = (async function *() {
			yield await Promise.resolve(1);
			yield Promise.resolve(2);
			yield Promise.resolve(3);
		})();

		const result = DArray.from(iterable);

		await expect(result).resolves.toEqual([1, 2, 3]);

		type check = ExpectType<
			Awaited<typeof result>,
			number[],
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.from,
		);

		expect(result).toEqual([1, 2, 3]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});
});
