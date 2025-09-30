import { wrapValue } from "@scripts/common";
import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { boolTruthy, type EitherBoolTruthy, type EitherBoolFalsy, isBoolTruthy, boolFalsy, whenIsBoolTruthy, ok, type EitherOk } from "@scripts/either";

describe("EitherBoolTruthy", () => {
	it("create", () => {
		const either = boolTruthy(10);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<10>,
			"strict"
		>;
	});

	it("isEitherBoolTruthy return true", () => {
		const either = boolTruthy(10) as EitherBoolTruthy | EitherBoolFalsy;

		const predicate = isBoolTruthy(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherBoolTruthy,
				"strict"
			>;
		}
	});

	it("isEitherBoolTruthy return false", () => {
		const either = boolFalsy(null) as EitherBoolTruthy | EitherBoolFalsy;

		const predicate = isBoolTruthy(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsBoolTruthy match", () => {
		const either = true
			? boolTruthy(10)
			: boolFalsy(null);

		const result = whenIsBoolTruthy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(10);

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null> | 10,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with left", () => {
		const either = boolFalsy(null);

		const result = whenIsBoolTruthy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					never,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null>,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with right", () => {
		const either = true
			? ok()
			: boolTruthy(10);

		const result = whenIsBoolTruthy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherOk | 10,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = whenIsBoolTruthy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null> | 0,
			"strict"
		>;
	});

	it("whenEitherIsBoolTruthy not match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = whenIsBoolTruthy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(boolFalsy(null));

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? boolTruthy(true)
				: boolFalsy(null),
			whenIsBoolTruthy(
				(value) => {
					type check = ExpectType<
						typeof value,
						true,
						"strict"
					>;

					return value;
				},
			),
		);

		expect(result).toBe(true);

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null> | true,
			"strict"
		>;
	});
});
