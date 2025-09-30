import { pipe, wrapValue } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { optional, type EitherOptionalFilled, type EitherOptionalEmpty } from "@scripts/either";
import { DEither } from "@scripts/index";

describe("createEitherOptional", () => {
	it("create EitherOptionalEmpty", () => {
		const either = optional(undefined);

		expect(either).toStrictEqual({
			"kind-either-empty": null,
			"kind-either-information": "optional",
			"kind-either-left": null,
			"kind-either-optional": null,
			...wrapValue(undefined),
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalEmpty,
			"strict"
		>;
	});

	it("create EitherOptionalFilled", () => {
		const either = optional(10);

		expect(either).toStrictEqual({
			"kind-either-filled": null,
			"kind-either-information": "optional",
			"kind-either-right": null,
			"kind-either-optional": null,
			...wrapValue(10),
		});

		type check = ExpectType<
			typeof either,
			EitherOptionalFilled<10>,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			"test" as string | undefined,
			DEither.optional,
		);

		expect(result).toStrictEqual(DEither.optional("test"));

		type check = ExpectType<
			typeof result,
			EitherOptionalEmpty | EitherOptionalFilled<string>,
			"strict"
		>;
	});
});
