import { entry } from "@scripts/object/entry";
import { type ExpectType } from "@scripts/common/types/expectType";

describe("entry", () => {
	it("creates readonly tuple with literal key and value", () => {
		const result = entry("id", 42 as const);

		expect(result).toStrictEqual(["id", 42]);

		type check = ExpectType<
			typeof result,
			readonly ["id", 42],
			"strict"
		>;
	});

	it("supports symbol keys", () => {
		const key = Symbol("token");
		const value = { token: true } as const;

		const result = entry(key, value);

		expect(result).toStrictEqual([key, value]);

		type check = ExpectType<
			typeof result,
			readonly [typeof key, { readonly token: true }],
			"strict"
		>;
	});
});
