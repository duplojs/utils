import { DArray, pipe } from "@scripts";

describe("includes", () => {
	const input = [1, "", { test: 10 }];

	it("value is includes", () => {
		expect(DArray.includes(input, 1)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			DArray.includes(2),
		);

		expect(result).toBe(false);
	});
});
