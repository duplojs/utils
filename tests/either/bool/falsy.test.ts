import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createBoolFalsy, type EitherBoolTruthy, type EitherBoolFalsy, isEitherBoolFalsy, createBoolTruthy, whenIsBoolFalsy, createFail, type EitherFail } from "@scripts/either";

describe("EitherBoolFalsy", () => {
	it("create", () => {
		const either = createBoolFalsy(undefined);

		expect(either).toStrictEqual({
			"kind-either-bool": null,
			"kind-either-falsy": null,
			"kind-either-information": "bool",
			"kind-either-left": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherBoolFalsy<undefined>,
			"strict"
		>;
	});

	it("isEitherBoolFalsy return true", () => {
		const either = createBoolFalsy(undefined) as EitherBoolFalsy | EitherBoolTruthy;

		const predicate = isEitherBoolFalsy(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherBoolFalsy,
				"strict"
			>;
		}
	});

	it("isEitherBoolFalsy return false", () => {
		const either = createBoolTruthy(10) as EitherBoolFalsy | EitherBoolTruthy;

		const predicate = isEitherBoolFalsy(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsBoolFalsy match", () => {
		const either = true
			? createBoolFalsy(null)
			: createBoolTruthy(true);

		const result = whenIsBoolFalsy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(null);

		type check = ExpectType<
			typeof result,
			EitherBoolTruthy<true> | null,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with right", () => {
		const either = createBoolTruthy(10);

		const result = whenIsBoolFalsy(
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
			EitherBoolTruthy<10>,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with left", () => {
		const either = true
			? createFail()
			: createBoolFalsy(null);

		const result = whenIsBoolFalsy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return value;
			},
		);

		expect(result).toBe(either);

		type check = ExpectType<
			typeof result,
			EitherFail | null,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy match with falsy value", () => {
		const either = true
			? null
			: 10;

		const result = whenIsBoolFalsy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toBe(0);

		type check = ExpectType<
			typeof result,
			EitherBoolTruthy<10> | 0,
			"strict"
		>;
	});

	it("whenEitherIsBoolFalsy not match with truthy value", () => {
		const either = true
			? 10
			: null;

		const result = whenIsBoolFalsy(
			either,
			(value) => {
				type check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return 0;
			},
		);

		expect(result).toStrictEqual(createBoolTruthy(10));

		type check = ExpectType<
			typeof result,
			EitherBoolTruthy<10> | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createBoolFalsy(null)
				: createBoolTruthy(true),
			whenIsBoolFalsy(
				(value) => {
						type check = ExpectType<
							typeof value,
							null,
							"strict"
						>;

						return value;
				},
			),
		);

		expect(result).toBe(null);

			type check = ExpectType<
				typeof result,
				EitherBoolTruthy<true> | null,
				"strict"
			>;
	});
});
