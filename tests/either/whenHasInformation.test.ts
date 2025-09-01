import { pipe, type ExpectType } from "@scripts/common";
import { createBool, createLeft, createRight, type EitherBoolTruthy, type EitherLeft, whenHasInformation } from "@scripts/either";

describe("whenHasInformation", () => {
	it("whenHasInformation match with information", () => {
		const result = whenHasInformation(
			true ? createRight("right", true) : createLeft("left"),
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
			true ? createLeft("left") : createRight("right", true),
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
			true ? createLeft("left") : createRight("right", true),
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

		expect(result).toStrictEqual(createLeft("left"));

		type check = ExpectType<
			typeof result,
			true | EitherLeft<"left", undefined>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true ? createRight("right", true) : createLeft("left"),
			whenHasInformation(
				"right",
				createBool,
			),
		);

		expect(result).toStrictEqual(createBool(true));

		type check = ExpectType<
			typeof result,
			EitherLeft<"left", undefined> | EitherBoolTruthy<true>,
			"strict"
		>;
	});
});
