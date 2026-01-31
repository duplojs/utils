import { DArray, pipe } from "@scripts";

describe("findAndSpliceReplace", () => {
	const arr = [1, 2, 3, 4, 5];

	it("replace 2 element", () => {
		const index = DArray.findAndSpliceReplace(arr, (element) => element > 3, [2, 16]);

		expect(index).toStrictEqual([1, 2, 3, 2, 16]);
	});

	it("not found", () => {
		const index = DArray.findAndSpliceReplace(arr, (element) => element === 10, [2, 16]);

		expect(index).toStrictEqual(undefined);
	});

	it("use in pipe", () => {
		const index = pipe(
			arr,
			DArray.findAndSpliceReplace((element) => element > 2, [2, 16]),
		);

		expect(index).toStrictEqual([1, 2, 2, 16, 5]);
	});
});
