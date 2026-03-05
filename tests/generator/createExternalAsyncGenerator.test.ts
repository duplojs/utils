import { DArray, DGenerator, type ExpectType } from "@scripts";

describe("createExternalAsyncGenerator", () => {
	it("yields the external value when next is called", async() => {
		const external = DGenerator.createExternalAsyncGenerator<number>();
		const result = DArray.from(external.asyncGenerator);

		type _checkExternal = ExpectType<
			typeof external,
			{
				asyncGenerator: AsyncGenerator<number, void, unknown>;
				next(value: number): undefined;
				exit(): undefined;
			},
			"strict"
		>;

		external.next(10);

		await expect(result).resolves.toStrictEqual([10]);

		type _check = ExpectType<
			typeof result,
			Promise<number[]>,
			"strict"
		>;
	});

	it("stops without yielding when exit is called", async() => {
		const external = DGenerator.createExternalAsyncGenerator<number>();
		const result = DArray.from(external.asyncGenerator);

		external.exit();

		await expect(result).resolves.toStrictEqual([]);

		type _check = ExpectType<
			typeof result,
			Promise<number[]>,
			"strict"
		>;
	});

	it("ignores next and exit calls made before generator starts", async() => {
		const external = DGenerator.createExternalAsyncGenerator<number>();

		external.next(1);
		external.exit();

		const result = DArray.from(external.asyncGenerator);

		external.next(5);

		await expect(result).resolves.toStrictEqual([5]);
	});
});
