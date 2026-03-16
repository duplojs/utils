import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

describe("asyncFlat", () => {
	it("flattens one level from an async iterable by default", async() => {
		const result = DGenerator.asyncFlat((async function *() {
			yield await Promise.resolve([1, 2]);
			yield [3, 4];
		})());

		await expect(DArray.from(result)).resolves.toStrictEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, void, unknown>,
			"strict"
		>;
	});

	it("flattens nested async and sync iterables up to the provided depth", async() => {
		const result = DGenerator.asyncFlat((async function *() {
			yield (async function *() {
				yield await Promise.resolve([1]);
				yield [2];
			})();
			yield await Promise.resolve([[3], [4]]);
		})(), 2);

		await expect(DArray.from(result)).resolves.toStrictEqual([1, 2, 3, 4]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, void, unknown>,
			"strict"
		>;
	});

	it("keeps nested iterables when the requested depth is reached", async() => {
		const result = DGenerator.asyncFlat((async function *() {
			yield [[1], [2]];
			yield await Promise.resolve([[3], [4]]);
		})(), 1);

		await expect(DArray.from(result)).resolves.toStrictEqual([[1], [2], [3], [4]]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number[], void, unknown>,
			"strict"
		>;
	});

	it("does not flatten non iterable values", async() => {
		const result = DGenerator.asyncFlat((async function *() {
			yield [1];
			yield 2;
			yield false;
			yield await Promise.resolve(null);
			yield undefined;
		})());

		await expect(DArray.from(result)).resolves.toStrictEqual([1, 2, false, null, undefined]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number | false | null | undefined, void, unknown>,
			"strict"
		>;
	});
});
