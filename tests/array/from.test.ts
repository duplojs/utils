import { pipe } from "@scripts/common";
import { DArray } from "@scripts/index";

describe("from", () => {
	it("creates array from arrayLike", () => {
		const arrayLike = {
			0: "a",
			1: "b",
			length: 2,
		};
		expect(DArray.from(["a", "b"])).toEqual(["a", "b"]);
	});

	it("creates array from iterable", () => {
		const iterable = new Set([1, 2, 3]);
		expect(DArray.from(iterable)).toEqual([1, 2, 3]);
	});

	it("creates array from string", () => {
		expect(DArray.from("abc")).toEqual(["a", "b", "c"]);
	});

	it("creates array from array", () => {
		expect(DArray.from(["a", "b", "c"])).toEqual(["a", "b", "c"]);
	});

	it("maps arrayLike with mapFn", () => {
		const arrayLike = {
			0: 1,
			1: 2,
			length: 2,
		};
		const result = DArray.from(arrayLike, (value, { index }) => value + index);
		expect(result).toEqual([1, 3]);
	});

	it("maps iterable with mapFn", () => {
		const iterable = new Set([1, 2, 3]);
		const result = DArray.from(iterable, (value, { index }) => value * index);
		expect(result).toEqual([0, 2, 6]);
	});

	it("works with pipe and curry (long test)", () => {
		const arrayLike = {
			0: "x",
			1: "y",
			2: "z",
			length: 3,
		};
		const result = pipe(
			arrayLike,
			DArray.from((value, { index }) => `${value}${index}`),
			DArray.join("-"),
		);
		expect(result).toBe("x0-y1-z2");
	});
});
