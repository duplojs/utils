import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts";

it("keys", () => {
	const keys = DObject.keys({
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
