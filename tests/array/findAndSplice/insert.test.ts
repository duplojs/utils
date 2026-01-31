import { DArray, pipe } from "@scripts";

describe("findAndSpliceInsert", () => {
	const arr = [1, 2, 3, 4, 5];

	it("insert 2 element", () => {
		const index = DArray.findAndSpliceInsert(arr, (element) => element > 3, [2, 16]);

		expect(index).toStrictEqual([1, 2, 3, 2, 16, 4, 5]);
	});

	it("not found", () => {
		const index = DArray.findAndSpliceInsert(arr, (element) => element === 10, [2, 16]);

		expect(index).toStrictEqual(undefined);
	});

	it("use in pipe", () => {
		const index = pipe(
			arr,
			DArray.findAndSpliceInsert((element) => element > 2, [2, 16]),
		);

		expect(index).toStrictEqual([1, 2, 2, 16, 3, 4, 5]);
	});
});
