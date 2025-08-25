import { type ExpectType } from "@scripts/common/types/expectType";
import { objectHasKeys } from "@scripts/object/hasKeys";

describe("objectHasKeys", () => {
	it("has", () => {
		const input: Partial<{ test: string }> = {
			test: "ok",
		};

		const output = objectHasKeys(
			input,
			["test"],
		);

		expect(output).toEqual(true);

		if (output) {
			type check = ExpectType<
				typeof input,
				{
					test: string;
				},
				"strict"
			>;
		}
	});

	it("missing", () => {
		const input: Partial<{ test: string }> = {};

		const output = objectHasKeys(
			input,
			["test"],
		);

		expect(output).toEqual(false);
	});
});
