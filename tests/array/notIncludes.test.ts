import { DArray, type ExpectType, pipe, when } from "@scripts";

describe("notIncludes", () => {
	const input = [1 as const, "", { test: 10 }];

	it("value is not included", () => {
		const predicate = DArray.notIncludes(input, 1);

		expect(predicate).toBe(false);

		if (predicate) {
			type Check = ExpectType<
				typeof input,
				(string | {
					test: number;
				})[],
				"strict"
			>;
		}
	});

	it("value is included", () => {
		expect(DArray.notIncludes(input as (1 | 2)[], 2)).toBe(true);
	});

	it("use in pipe", () => {
		const result = pipe(
			input,
			when(
				DArray.notIncludes(1),
				(input) => {
					type Check = ExpectType<
						typeof input,
						(string | {
							test: number;
						})[],
						"strict"
					>;
					return 10;
				},
			),
		);

		expect(result).toBe(input);
	});

	it("narrows union arrays in pipe for literal exclusions", () => {
		const input = [1, 2, "a"] as (1 | 2 | "a")[];

		const result = pipe(
			input,
			when(
				DArray.notIncludes(1),
				(input) => {
					type Check = ExpectType<
						typeof input,
						(2 | "a")[],
						"strict"
					>;

					return input.length;
				},
			),
		);

		expect(result).toBe(input);
	});

	it("narrows complex unions and keeps else typing coherent", () => {
		const example = [2] as (1 | 2)[] | 2[] | [2] | [1, 2] | [1 | 2, 2];
		const predicate = DArray.notIncludes(example, 1);

		expect(predicate).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof example,
				2[] | [2] | [2, 2],
				"strict"
			>;
		} else {
			type CheckElse = ExpectType<
				typeof example,
				(1 | 2)[] | [1, 2] | [1 | 2, 2],
				"strict"
			>;
		}
	});

	it("narrows tuple unions in both if and else branches", () => {
		const input = [2, 2] as [1, 2] | [2, 2] | [1 | 2, 2];
		const predicate = DArray.notIncludes(input, 1);

		expect(predicate).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof input,
				[2, 2],
				"strict"
			>;
		} else {
			type CheckElse = ExpectType<
				typeof input,
				[1, 2] | [1 | 2, 2],
				"strict"
			>;
		}
	});

	it("falls back to boolean for broad primitive array types", () => {
		const input = ["a", "b", "c"];
		const predicate = DArray.notIncludes(input, "a");

		expect(predicate).toBe(false);

		type Check = ExpectType<
			typeof predicate,
			boolean,
			"strict"
		>;

		if (predicate) {
			type InputCheck = ExpectType<
				typeof input,
				string[],
				"strict"
			>;
		}
	});

	it("keeps complex narrowing when used with pipe and when", () => {
		const input = [2, 2] as [1, 2] | [2, 2] | [1 | 2, 2];

		const result = pipe(
			input,
			when(
				DArray.notIncludes(1),
				(value) => {
					type Check = ExpectType<
						typeof value,
						[2, 2],
						"strict"
					>;

					return "ok" as const;
				},
			),
		);

		expect(result).toBe("ok");

		type Check = ExpectType<
			typeof result,
			"ok" | [1, 2] | [1 | 2, 2],
			"strict"
		>;
	});
});
