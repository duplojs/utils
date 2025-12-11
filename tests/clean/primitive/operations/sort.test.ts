import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive sort", () => {
	const n1 = DClean.Number.createOrThrow(3);
	const n2 = DClean.Number.createOrThrow(1);
	const n3 = DClean.Number.createOrThrow(2);

	const s1 = DClean.String.createOrThrow("b");
	const s2 = DClean.String.createOrThrow("a");
	const s3 = DClean.String.createOrThrow("c");

	const d1 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));
	const d2 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const d3 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));

	it("sorts numbers ascending and descending", () => {
		const asc = DClean.sort([n1, n2, n3], "ASC").map(unwrap);
		const dsc = DClean.sort([n1, n2, n3], "DSC").map(unwrap);

		expect(asc).toEqual([1, 2, 3]);
		expect(dsc).toEqual([3, 2, 1]);
	});

	it("sorts strings and supports currying", () => {
		const asc = DClean.sort("ASC")([s1, s2, s3] as never).map(unwrap);
		const dsc = DClean.sort([s1, s2, s3], "DSC").map(unwrap);

		expect(asc).toEqual(["a", "b", "c"]);
		expect(dsc).toEqual(["c", "b", "a"]);
	});

	it("sorts dates using TheDate values", () => {
		const asc = DClean.sort([d1, d2, d3], "ASC").map(unwrap);
		const dsc = DClean.sort("DSC")([d1, d2, d3]).map(unwrap);

		expect(asc).toEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-10"),
		]);
		expect(dsc).toEqual([
			DDate.create("2024-01-10"),
			DDate.create("2024-01-05"),
			DDate.create("2024-01-01"),
		]);
	});

	it("returns empty array when input empty", () => {
		expect(DClean.sort([], "ASC")).toEqual([]);
	});
});
