import { DArray, pipe } from "@scripts";

describe("isLastIndex", () => {
	it("index is last", () => {
		const input = ["a", "b", "c"];

		const result = DArray.isLastIndex(input, 2);

		expect(result).toBe(true);
	});

	it("index is not last", () => {
		const input = [10, 20, 30, 40];

		const result = DArray.isLastIndex(input, 1);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3],
			DArray.isLastIndex(2),
		);

		expect(result).toBe(true);
	});
});
