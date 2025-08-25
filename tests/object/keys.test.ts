import { type ExpectType } from "@scripts/common/types/expectType";
import { objectKeys } from "@scripts/object/keys";

it("objectKeys", () => {
	const keys = objectKeys({
		toto: 1,
		tt: "ee",
	});

	expect(keys).toStrictEqual(["toto", "tt"]);

	type check = ExpectType<
		typeof keys,
		("toto" | "tt")[],
		"strict"
	>;
});
