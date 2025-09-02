import { type ExpectType } from "@scripts/common/types/expectType";
import { optional, type EitherOptionalFilled, type EitherOptionalEmpty } from "@scripts/either";

describe("createEitherOptional", () => {
	it("create EitherOptionalEmpty", () => {
		const either = optional(undefined);

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "optional",
			"kind-either-left": null,
			"kind-either-optional": null,
			value: undefined,
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalEmpty,
			"strict"
		>;

		expect(optional()).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "optional",
			"kind-either-left": null,
			"kind-either-optional": null,
			value: undefined,
		});
	});

	it("create EitherOptionalFilled", () => {
		const either = optional(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "optional",
			"kind-either-right": null,
			"kind-either-optional": null,
			value: 10,
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});
});
