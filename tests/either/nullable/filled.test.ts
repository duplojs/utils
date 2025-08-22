import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherNullableEmpty, type EitherNullableEmpty, type EitherNullableFilled, createEitherNullableFilled, isEitherNullableFilled, unknownIsEitherNullableFilled, whenEitherIsNullableFilled, createEitherOk, type EitherOk } from "@scripts/either";

describe("EitherNullableFilled", () => {
	it("create", () => {
		const either = createEitherNullableFilled(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "nullable",
			"kind-either-right": null,
			"kind-either-nullable": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherNullableFilled<10>,
			"strict"
		>;
	});

	it("isEitherNullableFilled return true", () => {
		const either = createEitherNullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isEitherNullableFilled(either);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullableFilled<unknown>,
				"strict"
			>;
		}
	});

	it("isEitherNullableFilled return false", () => {
		const either = createEitherNullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isEitherNullableFilled(either);

		expect(predicate).toBe(false);
	});

	it("unknownIsEitherNullableFilled return false", () => {
		const either = 1 as unknown;

		const predicate = unknownIsEitherNullableFilled(either);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof either,
				EitherNullableFilled<unknown>,
				"strict"
			>;
		}
	});

	it("whenEitherIsNullableFilled match", () => {
		const either = true
			? createEitherNullableFilled(10)
			: createEitherNullableEmpty();

		const result = whenEitherIsNullableFilled(
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
			10 | EitherNullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with left", () => {
		const either = createEitherNullableEmpty();

		const result = whenEitherIsNullableFilled(
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
			EitherNullableEmpty,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with right", () => {
		const either = true
			? createEitherOk()
			: createEitherNullableFilled(10);

		const result = whenEitherIsNullableFilled(
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

	it("whenEitherIsNullableFilled match with falsy value", () => {
		const either = true
			? 10
			: null;

		const result = whenEitherIsNullableFilled(
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
			EitherNullableEmpty | 0,
			"strict"
		>;
	});

	it("whenEitherIsNullableFilled not match with truthy value", () => {
		const either = true
			? null
			: 10;

		const result = whenEitherIsNullableFilled(
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

		expect(result).toStrictEqual(createEitherNullableEmpty());

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | 0,
			"strict"
		>;
	});
});
