import { type ExpectType } from "@scripts/common/types/expectType";
import { isKeyofObject } from "@scripts/object/isKeyof";

it("isKeyofObject", () => {
	expect(isKeyofObject({ toto: 1 }, "toto")).toBe(true);
	expect(isKeyofObject({ toto: 1 }, "test")).toBe(false);

	const key = "toto" as string;

	if (isKeyofObject({ toto: 1 }, key)) {
		type check = ExpectType<
			typeof key,
			"toto",
			"strict"
		>;
	}
});
