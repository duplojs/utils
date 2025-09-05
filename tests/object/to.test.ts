import { DArray, DObject, pipe, type ExpectType } from "@scripts/index";

describe("to", () => {
	it("basic usage", () => {
		const result = DObject.to(
			[1, 2, 3] as const,
			({ addEntry }) => addEntry("first", DArray.first)
				.addEntry("rest", (input) => {
					type check = ExpectType<
						typeof input,
						readonly [1, 2, 3],
						"strict"
					>;

					return DArray.shift(input);
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
				first: 1;
				rest: [2, 3];
			},
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			[1, 2, 3] as const,
			DObject.to(
				({ addEntry }) => addEntry("first", DArray.first)
					.addEntry("rest", DArray.shift),
			),
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
				first: 1;
				rest: [2, 3];
			},
			"strict"
		>;
	});
});
