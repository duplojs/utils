import { DArray, DClean, DDate, pipe, unwrap } from "@scripts";

describe("clean primitive sort", () => {
	const n1 = DClean.Number.createOrThrow(3);
	const n2 = DClean.Number.createOrThrow(1);
	const n3 = DClean.Number.createOrThrow(2);

	const b1 = DClean.BigInt.createOrThrow(3n);
	const b2 = DClean.BigInt.createOrThrow(1n);
	const b3 = DClean.BigInt.createOrThrow(2n);

	const s1 = DClean.String.createOrThrow("b");
	const s2 = DClean.String.createOrThrow("a");
	const s3 = DClean.String.createOrThrow("c");

	const d1 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));
	const d2 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const d3 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));

	const t1 = DClean.Time.createOrThrow(DDate.createTime(1, "second"));
	const t2 = DClean.Time.createOrThrow(DDate.createTime(5, "second"));
	const t3 = DClean.Time.createOrThrow(DDate.createTime(10, "second"));

	it("sorts numbers ascending and descending", () => {
		const asc = DClean.sort([n1, n2, n3], "ASC").map(unwrap);
		const dsc = DClean.sort([n1, n2, n3], "DSC").map(unwrap);

		expect(asc).toEqual([1, 2, 3]);
		expect(dsc).toEqual([3, 2, 1]);
	});

	it("sorts strings and supports currying", () => {
		const asc = DClean.sort("ASC")([s1, s2, s3] as never).map(unwrap);
		const dsc = pipe(
			[s1, s2, s3],
			DClean.sort("DSC"),
			DArray.map(unwrap),
		);

		expect(asc).toEqual(["a", "b", "c"]);
		expect(dsc).toEqual(["c", "b", "a"]);
	});

	it("sorts dates using TheDate values", () => {
		const asc = DClean.sort([d1, d2, d3], "ASC").map(unwrap);
		const dsc = pipe(
			[d1, d2, d3],
			DClean.sort("DSC"),
			DArray.map(unwrap),
		);

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

	it("sorts times using TheTime values", () => {
		const asc = DClean.sort([t2, t3, t1], "ASC").map(unwrap);
		const dsc = pipe(
			[t1, t2, t3],
			DClean.sort("DSC"),
			DArray.map(unwrap),
		);

		expect(asc).toEqual([
			DDate.createTime(1, "second"),
			DDate.createTime(5, "second"),
			DDate.createTime(10, "second"),
		]);
		expect(dsc).toEqual([
			DDate.createTime(10, "second"),
			DDate.createTime(5, "second"),
			DDate.createTime(1, "second"),
		]);
	});

	it("returns empty array when input empty", () => {
		expect(DClean.sort([], "ASC")).toEqual([]);
	});
});
