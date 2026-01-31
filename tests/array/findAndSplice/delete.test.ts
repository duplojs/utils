import { DArray, pipe } from "@scripts";

describe("findAndSpliceDelete", () => {
	const arr = [1, 2, 3, 4, 5];

	it("delete 2 element", () => {
		const index = DArray.findAndSpliceDelete(arr, (element) => element > 3, 2);

		expect(index).toStrictEqual([1, 2, 3]);
	});

	it("not found", () => {
		const index = DArray.findAndSpliceDelete(arr, (element) => element === 10, 12);

		expect(index).toStrictEqual(undefined);
	});

	it("use in pipe", () => {
		const index = pipe(
			arr,
			DArray.findAndSpliceDelete((element) => element > 2, 12),
		);

		expect(index).toStrictEqual([1, 2]);
	});
});
