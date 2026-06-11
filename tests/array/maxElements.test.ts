import { DArray, type ExpectType, pipe } from "@scripts";

describe("maxElements", () => {
	it("predicate 10", () => {
		const value = ["string"];

		const predicate = DArray.maxElements(value, 10);

		if (predicate) {
			type check = ExpectType<
				typeof value,
				string[] & DArray.MaxElements<10>,
				"strict"
			>;
		}

		expect(predicate).toBe(true);
	});

	it("use in pipe", () => {
		const value = ["string"];

		const result = pipe(
			value,
			DArray.maxElements(10),
		);

		expect(result).toBe(true);
	});
});
