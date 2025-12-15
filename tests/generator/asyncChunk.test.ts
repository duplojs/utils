import { DArray, DGenerator, pipe, type ExpectType } from "@scripts";

async function collect<T>(iter: AsyncIterable<T>) {
	return DArray.from(iter);
}

describe("asyncChunk", () => {
	const input = (async function *() {
		for (const value of [1, 2, 3, 4, 5]) {
			yield await value;
		}
	})();

	it("splits async iterable into equal chunks", async() => {
		const result = DGenerator.asyncChunk(input, 2);

		await expect(collect(result)).resolves.toStrictEqual([[1, 2], [3, 4], [5]]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number[], unknown, unknown>,
			"strict"
		>;
	});

	it("works with pipe (curried)", async() => {
		const result = pipe(
			(async function *() {
				for (const value of [1, 2, 3, 4, 5, 9]) {
					yield await value;
				}
			})(),
			DGenerator.asyncChunk(3),
		);

		await expect(collect(result)).resolves.toStrictEqual([[1, 2, 3], [4, 5, 9]]);

		type check = ExpectType<
			typeof result,
			AsyncGenerator<number[], unknown, unknown>,
			"strict"
		>;
	});
});
