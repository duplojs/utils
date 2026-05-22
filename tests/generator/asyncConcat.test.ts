import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

describe("asyncConcat", () => {
	it("concatenates async and sync iterables from left to right", async() => {
		const result = DGenerator.asyncConcat(
			(async function *() {
				yield 1;
				yield await Promise.resolve(2);
			})(),
			[3],
			(async function *() {
				yield await Promise.resolve(4);
				yield 5;
			})(),
		);

		await expect(DArray.from(result)).resolves.toStrictEqual([1, 2, 3, 4, 5]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, unknown, unknown>,
			"strict"
		>;
	});

	it("supports curried style", async() => {
		const tail: AsyncIterable<string> = (async function *() {
			yield "c";
			yield await Promise.resolve("d");
		})();
		const result = DGenerator.asyncConcat(tail)(["a", "b"]);

		await expect(DArray.from(result)).resolves.toStrictEqual(["a", "b", "c", "d"]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<string, unknown, unknown>,
			"strict"
		>;
	});

	it("works in pipe with curried style", async() => {
		const tail: AsyncIterable<number> = (async function *() {
			yield 5;
			yield await Promise.resolve(6);
		})();
		const result = pipe(
			[1, 2, 3, 4],
			DGenerator.filter((value) => value > 2),
			DGenerator.asyncConcat(tail),
		);

		await expect(DArray.from(result)).resolves.toStrictEqual([3, 4, 5, 6]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number, unknown, unknown>,
			"strict"
		>;
	});
});
