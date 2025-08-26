import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherBoolTruthy, type EitherBoolTruthy, type EitherBoolFalsy, isEitherBoolTruthy, createEitherBoolFalsy, whenEitherIsBoolTruthy, createEitherOk, type EitherOk } from "@scripts/either";

describe("EitherBoolTruthy", () => {
	it("create", () => {
		const either = createEitherBoolTruthy(10);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-truthy": null,
			"kind-either-information": "bool",
			"kind-either-right": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolTruthy<10>,
			"strict"
		>;
	});

	it("isEitherBoolTruthy return true", () => {
		const either = createEitherBoolTruthy(10) as EitherBoolTruthy | EitherBoolFalsy;

		const predicate = isEitherBoolTruthy(either);

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
		const either = createEitherBoolFalsy(null) as EitherBoolTruthy | EitherBoolFalsy;

		const predicate = isEitherBoolTruthy(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsBoolTruthy match", () => {
		const either = true
			? createEitherBoolTruthy(10)
			: createEitherBoolFalsy(null);

		const result = whenEitherIsBoolTruthy(
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
		const either = createEitherBoolFalsy(null);

		const result = whenEitherIsBoolTruthy(
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
			? createEitherOk()
			: createEitherBoolTruthy(10);

		const result = whenEitherIsBoolTruthy(
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

		const result = whenEitherIsBoolTruthy(
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

		const result = whenEitherIsBoolTruthy(
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

		expect(result).toStrictEqual(createEitherBoolFalsy(null));

		type check = ExpectType<
			typeof result,
			EitherBoolFalsy<null> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createEitherBoolTruthy(true)
				: createEitherBoolFalsy(null),
			whenEitherIsBoolTruthy(
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
