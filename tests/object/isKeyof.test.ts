import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts/index";

it("isKeyof", () => {
	expect(DObject.isKeyof({ toto: 1 }, "toto")).toBe(true);
	expect(DObject.isKeyof({ toto: 1 }, "test")).toBe(false);

	const key = "toto" as string;

	if (DObject.isKeyof({ toto: 1 }, key)) {
		type check = ExpectType<
			typeof key,
			"toto",
			"strict"
		>;
	}
});
