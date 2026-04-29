import { type AnyTuple, DArray, type ExpectType, pipe, DDate } from "@scripts";

describe("findDuplicates", () => {
	it("returns undefined when array has no duplicates", () => {
		const result = DArray.findDuplicates(["a", 1, true, null, undefined]);

		expect(result).toBeUndefined();

		type check = ExpectType<
			typeof result,
			undefined | AnyTuple<string | number | true | null | undefined>,
			"strict"
		>;
	});

	it("returns each duplicated primitive only once", () => {
		const result = DArray.findDuplicates(["a", "b", "a", "a", "b", 1, 1, 1]);

		expect(result).toStrictEqual(["a", "b", 1]);

		type check = ExpectType<
			typeof result,
			undefined | readonly [string | number, ...(string | number)[]],
			"strict"
		>;
	});

	it("handles nullish and bigint duplicates", () => {
		const result = DArray.findDuplicates([undefined, null, 1n, undefined, 1n, null, 1n]);

		expect(result).toStrictEqual([undefined, 1n, null]);
	});

	it("works in pipe", () => {
		const result = pipe(
			[true, false, true, false, false],
			DArray.findDuplicates,
		);

		expect(result).toStrictEqual([true, false]);

		type check = ExpectType<
			typeof result,
			undefined | readonly [boolean, ...boolean[]],
			"strict"
		>;
	});

	it("returns only one duplicate for TheDate values sharing same serialized value", () => {
		const dateA = DDate.create("2024-01-01");
		const dateB = DDate.create("2024-01-01");
		const dateC = DDate.create("2024-01-01");

		const result = DArray.findDuplicates([dateA, dateB, dateC]);

		expect(result).toStrictEqual([dateA]);
		expect(result?.[0]).toBe(dateA);
	});

	it("returns only one duplicate for TheTime values sharing same serialized value", () => {
		const timeA = DDate.createTime(5, "minute");
		const timeB = DDate.createTime(5, "minute");
		const timeC = DDate.createTime(5, "minute");

		const result = DArray.findDuplicates([timeA, timeB, timeC]);

		expect(result).toStrictEqual([timeA]);
		expect(result?.[0]).toBe(timeA);
	});
});
