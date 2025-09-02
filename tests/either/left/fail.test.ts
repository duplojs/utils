import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, type EitherFail } from "@scripts/either";

it("createEitherFail", () => {
	const either = fail();

	expect(either).toStrictEqual({
		"kind-either-fail": null,
		"kind-either-information": "fail",
		"kind-either-left": null,
		value: undefined,
	});

	type check = ExpectType<
		typeof either,
		EitherFail,
		"strict"
	>;
});
