import { type ExpectType } from "@scripts/common/types/expectType";
import { nullable, type EitherNullableFilled, type EitherNullableEmpty } from "@scripts/either";

describe("createEitherNullable", () => {
	it("create EitherNullableEmpty", () => {
		const either = nullable(null);

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullable",
			"kind-either-left": null,
			"kind-either-nullable": null,
			value: null,
		});

		type check = ExpectType<
			typeof either,
			EitherNullableEmpty,
			"strict"
		>;

		expect(nullable()).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "nullable",
			"kind-either-left": null,
			"kind-either-nullable": null,
			value: null,
		});
	});

	it("create EitherNullableFilled", () => {
		const either = nullable(10);

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
});
