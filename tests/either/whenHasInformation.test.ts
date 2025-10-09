import { pipe, type ExpectType } from "@scripts/common";
import { bool, left, right, type EitherBoolTruthy, type EitherLeft, whenHasInformation } from "@scripts/either";

describe("whenHasInformation", () => {
	it("whenHasInformation match with information", () => {
		const result = whenHasInformation(
			true ? right("right", true) : left("left"),
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
			10 | EitherLeft<"left", undefined>,
			"strict"
		>;
	});

	it("whenHasInformation match with multi information", () => {
		const result = whenHasInformation(
			true ? left("left") : right("right", true),
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
		const result = whenHasInformation(
			true ? left("left") : right("right", true),
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

		expect(result).toStrictEqual(left("left"));

		type check = ExpectType<
			typeof result,
			true | EitherLeft<"left", undefined>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true ? right("right", true) : left("left"),
			whenHasInformation(
				"right",
				bool,
			),
		);

		expect(result).toStrictEqual(bool(true));

		type check = ExpectType<
			typeof result,
			EitherLeft<"left", undefined> | EitherBoolTruthy<true>,
			"strict"
		>;
	});
});
