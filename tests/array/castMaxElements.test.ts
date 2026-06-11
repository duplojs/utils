import { DArray, type ExpectType, pipe } from "@scripts";

describe("castMaxElements", () => {
	it("casts a max elements array to a wider max elements type", () => {
		const value = ["one", "two", "three"];

		if (DArray.maxElements(value, 10)) {
			const result = DArray.castMaxElements(value, 15);

			type check = ExpectType<
				typeof result,
				string[] & DArray.MaxElements<10> & DArray.MaxElements<15>,
				"strict"
			>;

			expect(result).toBe(value);
		}
	});

	it("casts a max elements array to a wider max elements type in pipe", () => {
		const value = ["one", "two", "three"];

		if (DArray.maxElements(value, 10)) {
			const result = pipe(
				value,
				DArray.castMaxElements(20),
				DArray.castMaxElements(15),
			);

			type check = ExpectType<
				typeof result,
				string[] & DArray.MaxElements<10> & DArray.MaxElements<15> & DArray.MaxElements<20>,
				"strict"
			>;

			expect(result).toBe(value);
		}
	});
});
