import { type ExpectType } from "@scripts/common/types/expectType";
import { createEitherLeft, type EitherLeft } from "@scripts/either";

it("createEitherLeft", () => {
	const either = createEitherLeft("info", 50);

	expect(either).toStrictEqual({
		"kind-either-information": "info",
		"kind-either-left": null,
		value: 50,
	});

	type check = ExpectType<
		typeof either,
		EitherLeft<"info", 50>,
		"strict"
	>;
});
