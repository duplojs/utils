import { DArray, DObject, innerPipe, pipe, type ExpectType } from "@scripts/index";

describe("to", () => {
	it("basic usage", () => {
		const result = DObject.to(
			[1, 2, 3] as const,
			{
				first: DArray.first,
				rest: (input) => {
					type check = ExpectType<
						typeof input,
						readonly [1, 2, 3],
						"strict"
					>;

					return DArray.shift(input);
				},
				test: undefined,
			},
		);

		expect(result).toStrictEqual({
			first: 1,
			rest: [
				2,
				3,
			],
			test: undefined,
		});

		type check = ExpectType<
			typeof result,
			{
				first: 1;
				rest: [2, 3];
				test: undefined;
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3] as const,
			(value) => value,
			DObject.to({
				first: true ? DArray.first : undefined,
				rest: DArray.shift,
			}),
		);

		expect(result).toStrictEqual({
			first: 1,
			rest: [
				2,
				3,
			],
		});

		type check = ExpectType<
			typeof result,
			{
				first: 1 | undefined;
				rest: [2, 3];
			},
			"strict"
		>;
	});
});
