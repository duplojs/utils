import { type ExpectType } from "@scripts/common/types/expectType";
import { DString } from "@scripts/index";

it("isKeyof", () => {
	expect(DString.isKeyof("toto", { toto: 1 })).toBe(true);
	expect(DString.isKeyof("test", { toto: 1 })).toBe(false);

	const key = "toto" as string;

	if (DString.isKeyof(key, { toto: 1 })) {
		type check = ExpectType<
			typeof key,
			"toto",
			"strict"
		>;
	}
});
