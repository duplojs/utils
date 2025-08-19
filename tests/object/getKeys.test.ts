import { type ExpectType } from "@scripts/common/types/expectType";
import { getKeys } from "@scripts/object/getKeys";

it("getKeys", () => {
	const keys = getKeys({
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
