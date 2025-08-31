import { pipe } from "@scripts/common/pipe";
import { type ExpectType } from "@scripts/common/types/expectType";
import { createNullableEmpty, type EitherNullableEmpty, type EitherNullableFilled, createNullableFilled, isNullableFilled, whenIsNullableFilled, createOk, type EitherOk } from "@scripts/either";

describe("EitherNullableFilled", () => {
	it("create", () => {
		const either = createNullableFilled(10);

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
		const either = createNullableFilled(10) as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableFilled(either);

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
		const either = createNullableEmpty() as EitherNullableEmpty | EitherNullableFilled;

		const predicate = isNullableFilled(either);

		expect(predicate).toBe(false);
	});

	it("whenEitherIsNullableFilled match", () => {
		const either = true
			? createNullableFilled(10)
			: createNullableEmpty();

		const result = whenIsNullableFilled(
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
		const either = createNullableEmpty();

		const result = whenIsNullableFilled(
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
			? createOk()
			: createNullableFilled(10);

		const result = whenIsNullableFilled(
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

		const result = whenIsNullableFilled(
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

		const result = whenIsNullableFilled(
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

		expect(result).toStrictEqual(createNullableEmpty());

		type check = ExpectType<
			typeof result,
			EitherNullableEmpty | 0,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			true
				? createNullableFilled(true)
				: createNullableEmpty(),
			whenIsNullableFilled(
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
			true | EitherNullableEmpty,
			"strict"
		>;
	});
});
