import { type ExpectType } from "@scripts/common/types/expectType";
import { getValues } from "@scripts/object/getValues";

it("getValues", () => {
	const values = getValues({
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
