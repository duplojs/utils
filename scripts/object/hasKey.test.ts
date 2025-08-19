import { type ExpectType } from "@scripts/common/types/expectType";
import { hasKey } from "./hasKey";

it("hasKey", () => {
	expect(hasKey({ toto: 1 }, "toto")).toBe(true);
	expect(hasKey({ toto: 1 }, "test")).toBe(false);

	const key = "toto";
	if (hasKey({ toto: 1 }, key)) {
		type check = ExpectType<
			typeof key,
			"toto",
			"strict"
		>;
	}
});
