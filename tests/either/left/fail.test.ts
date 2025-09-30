import { wrapValue } from "@scripts/common";
import { type ExpectType } from "@scripts/common/types/expectType";
import { fail, type EitherFail } from "@scripts/either";

it("createEitherFail", () => {
	const either = fail();

	expect(either).toStrictEqual({
		"kind-either-fail": null,
		"kind-either-information": "fail",
		"kind-either-left": null,
		...wrapValue(undefined),
	});

	type check = ExpectType<
		typeof either,
		EitherFail,
		"strict"
	>;
});
