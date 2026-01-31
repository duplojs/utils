import { pipe, DEither, type ExpectType } from "@scripts";

describe("whenHasInformation", () => {
	it("whenHasInformation match with information", () => {
		const result = DEither.whenHasInformation(
			true ? DEither.right("right", true) : DEither.left("left"),
			"right",
			(value) => {
				type check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return 10;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			10 | DEither.Left<"left", undefined>,
			"strict"
		>;
	});

	it("whenHasInformation match with multi information", () => {
		const result = DEither.whenHasInformation(
			true ? DEither.left("left") : DEither.right("right", true),
			["right", "left"],
			(value) => {
				type check = ExpectType<
					typeof value,
					true | undefined,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(undefined);

		type check = ExpectType<
			typeof result,
			true | undefined,
			"strict"
		>;
	});

	it("whenHasInformation not match", () => {
		const result = DEither.whenHasInformation(
			true ? DEither.left("left") : DEither.right("right", true),
			"right",
			(value) => {
				type check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toStrictEqual(DEither.left("left"));

		type check = ExpectType<
			typeof result,
			true | DEither.Left<"left", undefined>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true ? DEither.right("right", true) : DEither.left("left"),
			DEither.whenHasInformation(
				"right",
				DEither.bool,
			),
		);

		expect(result).toStrictEqual(DEither.bool(true));

		type check = ExpectType<
			typeof result,
			DEither.Left<"left", undefined> | DEither.BoolTruthy<true>,
			"strict"
		>;
	});
});
