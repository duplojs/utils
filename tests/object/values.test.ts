import { type ExpectType } from "@scripts/common/types/expectType";
import { objectValues } from "@scripts/object/values";

it("objectValues", () => {
	const values = objectValues({
		test: "ok",
		prop: 20,
	});

	expect(values).toStrictEqual(["ok", 20]);

	type check = ExpectType<
		typeof values,
		("ok" | 20)[],
		"strict"
	>;
});
