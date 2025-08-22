import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherBoolFalsy, type EitherBoolTruthy, type EitherBoolFalsy, isEitherBoolFalsy, createEitherBoolTruthy, unknownIsEitherBoolFalsy, whenEitherIsBoolFalsy, createEitherFail, type EitherFail } from "@scripts/either";

describe("EitherBoolFalsy", () => {
	it("create", () => {
		const either = createEitherBoolFalsy(undefined);

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
		const either = createEitherBoolFalsy(undefined) as EitherBoolFalsy | EitherBoolTruthy;

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
		const either = createEitherBoolTruthy(10) as EitherBoolFalsy | EitherBoolTruthy;

		const predicate = isEitherBoolFalsy(either);

		expect(predicate).toBe(false);
	});

	it("unknownIsEitherBoolFalsy return false", () => {
		const either = 1 as unknown;

		const predicate = unknownIsEitherBoolFalsy(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherBoolFalsy,
				"strict"
			>;
		}
	});

	it("whenEitherIsBoolFalsy match", () => {
		const either = true
			? createEitherBoolFalsy(null)
			: createEitherBoolTruthy(true);

		const result = whenEitherIsBoolFalsy(
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
		const either = createEitherBoolTruthy(10);

		const result = whenEitherIsBoolFalsy(
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
			? createEitherFail()
			: createEitherBoolFalsy(null);

		const result = whenEitherIsBoolFalsy(
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

		const result = whenEitherIsBoolFalsy(
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

		const result = whenEitherIsBoolFalsy(
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

		expect(result).toStrictEqual(createEitherBoolTruthy(10));

		type check = ExpectType<
			typeof result,
			EitherBoolTruthy<10> | 0,
			"strict"
		>;
	});
});
