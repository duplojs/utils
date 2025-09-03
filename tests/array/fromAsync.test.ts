import { DArray, type ExpectType, asyncPipe } from "@scripts/index";

describe("fromAsync", () => {
	const input = [
		{
			id: 1,
			name: "Alice",
			age: 28,
		},
		{
			id: 2,
			name: "Bob",
			age: 17,
		},
		{
			id: 3,
			name: "Charlie",
			age: 35,
		},
	] as const;

	it("array of numbers with async doubling", async() => {
		const arr = [1, 2, 3, 4];
		const result = await DArray.fromAsync(arr, async(value) => {
			await new Promise((res) => void setTimeout(res, 5));
			return value * 2;
		});

		expect(result).toStrictEqual([2, 4, 6, 8]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("use in async pipe", async() => {
		const result = await asyncPipe(
			input,
			DArray.filter((user) => user.age >= 18),
			DArray.fromAsync(async(user) => {
				await new Promise((res) => void setTimeout(res, 5));
				return {
					...user,
					isAdult: true,
					upperName: user.name.toUpperCase(),
				};
			}),
			DArray.map((user) => user.upperName),
		);

		expect(result).toStrictEqual(["ALICE", "CHARLIE"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("fromAsync with empty array", async() => {
		const result = await DArray.fromAsync([], async(value) => {
			await new Promise((res) => void setTimeout(res, 1));
			return value;
		});
		expect(result).toEqual([]);

		type check = ExpectType<
			typeof result,
			never[],
			"strict"
		>;
	});

	it("fromAsync with arrayLike and delayed mapFn", async() => {
		const arrayLike = {
			0: 10,
			1: 20,
			length: 2,
		};
		const result = await DArray.fromAsync(
			arrayLike,
			async(value, { index }) => {
				await new Promise((res) => void setTimeout(res, 1));
				return value * (index + 1);
			},
		);
		expect(result).toEqual([10, 40]);

		type check = ExpectType<
			typeof result,
			number[],
			"strict"
		>;
	});

	it("creates array from arrayLike", async() => {
		const arrayLike = {
			0: "a",
			1: "b",
			length: 2,
		};
		const result = await DArray.fromAsync(arrayLike);
		expect(result).toEqual(["a", "b"]);

		type check = ExpectType<
			typeof result,
			string[],
			"strict"
		>;
	});

	it("use pipe without mapFn", async() => {
		const result = await asyncPipe(
			["x", "y", "z"],
			DArray.fromAsync(),
			DArray.join("-"),
		);

		expect(result).toBe("x-y-z");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});
});
