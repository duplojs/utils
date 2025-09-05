import { pipe } from "@scripts/common";
import { DArray } from "@scripts/index";

describe("from", () => {
	it("creates array from arrayLike", () => {
		const arrayLike = {
			0: "a",
			1: "b",
			length: 2,
		};
		expect(DArray.from(arrayLike)).toEqual(["a", "b"]);
	});

	it("creates array from iterable", () => {
		const iterable = new Set([1, 2, 3]);
		expect(DArray.from(iterable)).toEqual([1, 2, 3]);
	});

	it("creates array from generator", () => {
		const iterable = (function *() {
			yield 1;
			yield 2;
			yield 3;
		})();
		expect(DArray.from(iterable)).toEqual([1, 2, 3]);
	});

	it("creates array from string", () => {
		expect(DArray.from("abc")).toEqual(["a", "b", "c"]);
	});

	it("creates array from array", () => {
		expect(DArray.from(["a", "b", "c"])).toEqual(["a", "b", "c"]);
	});

	it("creates array from async generator", async() => {
		const iterable = (async function *() {
			yield await Promise.resolve(1);
			yield Promise.resolve(2);
			yield Promise.resolve(3);
		})();

		await expect(DArray.from(iterable)).resolves.toEqual([1, 2, 3]);
	});
});
