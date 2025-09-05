import { DArray, pipe } from "@scripts/index";

describe("lastIndexOf", () => {
	it("must not be in array", () => {
		const arrFilledShit = ["springBoot", "nestjs", "php", "django"] as const;
		const result = DArray.lastIndexOf(arrFilledShit, "duplojs");
		expect(result).toBeUndefined();
	});

	it("must be in array with fromIndex option", () => {
		const arr = [1, 2, 3, 4, 2, 3, 4, 2];
		const result = DArray.lastIndexOf(arr, 2, 5);
		expect(result).toEqual(4);
	});

	it("fromIndex negative", () => {
		const arr = [1, 2, 3, 4, 2, 3, 4, 2];
		const result = DArray.lastIndexOf(arr, 2, -2);
		expect(result).toEqual(4);
	});

	it("fromIndex = 0", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.lastIndexOf(arr, 2, 0);
		expect(result).toBeUndefined();
	});

	it("fromIndex negative out of range", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.lastIndexOf(arr, 2, -10);
		expect(result).toBeUndefined();
	});

	it("fromIndex out of range", () => {
		const arr = [1, 2, 3, 4, 2];
		const result = DArray.lastIndexOf(arr, 2, 10);
		expect(result).toEqual(4);
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3, 4, 2],
			DArray.lastIndexOf(2),
		);
		expect(result).toEqual(4);
	});
});
