import { type ExpectType, pipe } from "@scripts/common";
import { DArray } from "@scripts";

describe("findAndSet", () => {
	const arr = [1, 2, 3, 4, 5];

	it("set 12 in array", () => {
		const newArray = DArray.findAndSet(arr, (element) => element > 3, 12);

		expect(newArray).toStrictEqual([1, 2, 3, 12, 5]);

		type check = ExpectType<
			typeof newArray,
			number[] | undefined,
			"strict"
		>;
	});

	it("not find element", () => {
		const newArray = DArray.findAndSet(arr, (element) => element === 10, 12);

		expect(newArray).toStrictEqual(undefined);
	});

	it("use in pipe", () => {
		const newArray = pipe(
			arr,
			DArray.findAndSet((element) => element > 2, 12),
		);

		expect(newArray).toStrictEqual([1, 2, 12, 4, 5]);
	});
});
