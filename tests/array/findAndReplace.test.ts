import { type ExpectType, pipe, innerPipe } from "@scripts/common";
import { DArray, DString } from "@scripts";

describe("findAndSet", () => {
	const arr = [1, 2, 3, 4, 5];

	it("set 12 in array", () => {
		const newArray = DArray.findAndReplace(arr, (element) => element > 3, 12);

		expect(newArray).toStrictEqual([1, 2, 3, 12, 5]);

		type check = ExpectType<
			typeof newArray,
			number[] | undefined,
			"strict"
		>;
	});

	it("not find element", () => {
		const newArray = DArray.findAndReplace(arr, (element) => element === 10, 12);

		expect(newArray).toStrictEqual(undefined);
	});

	it("use in pipe", () => {
		const newArray = pipe(
			arr,
			DArray.findAndReplace((element) => element > 2, 12),
		);

		expect(newArray).toStrictEqual([1, 2, 12, 4, 5]);
	});

	it("works with complex pipe", () => {
		const tags = ["admin", "user", "guest"];

		const result = pipe(
			tags,
			DArray.findAndReplace(
				innerPipe(
					DString.toUpperCase,
					(value) => value === "USER",
				),
				"moderator",
			),
		);

		expect(result).toStrictEqual(["admin", "moderator", "guest"]);

		type check = ExpectType<
			typeof result,
			string[] | undefined,
			"strict"
		>;
	});
});
