import { type ExpectType } from "@scripts/common/types/expectType";
import { haveKeys } from "@scripts/object/haveKeys";

describe("haveKeys", () => {
	it("have", () => {
		const input: Partial<{ test: string }> = {
			test: "ok",
		};

		const output = haveKeys(
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

		const output = haveKeys(
			input,
			["test"],
		);

		expect(output).toEqual(false);
	});
});
