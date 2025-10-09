import { DArray, DString, innerPipe, pipe } from "@scripts/index";

describe("every", () => {
	it("returns true when all elements satisfy the predicate", () => {
		const arr = [2, 4, 6, 8];
		const result = DArray.every(arr, (element) => element % 2 === 0);
		expect(result).toBe(true);
	});

	it("returns false when not all elements satisfy the predicate", () => {
		const arr = [2, 4, 6, 8];
		const result = DArray.every(arr, (element) => element > 5);
		expect(result).toBe(false);
	});

	it("returns true for an empty array", () => {
		const arr: number[] = [];
		const result = DArray.every(arr, (element) => element > 0);
		expect(result).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			[3, 12, 14],
			DArray.every((element) => element > 5),
		);
		expect(result).toBe(false);
	});

	it("works with complex pipe", () => {
		const urls = ["https://example.com", "https://test.com", "https://demo.com"] as const;

		const result = pipe(
			urls,
			DArray.every(
				innerPipe(
					DString.toLowerCase,
					DString.startsWith("https"),
				),
			),
		);

		expect(result).toBe(true);
	});

	it("works with split and at", () => {
		const emails = ["user@company.com", "admin@company.com", "support@company.com"] as const;

		const result = pipe(
			emails,
			DArray.every(
				innerPipe(
					DString.split("@"),
					DArray.at(1),
					(value) => value === "company.com",
				),
			),
		);

		expect(result).toBe(true);
	});
});
