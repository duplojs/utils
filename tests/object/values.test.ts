import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts";

it("values", () => {
	const values = DObject.values({
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
