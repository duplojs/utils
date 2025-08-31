import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts";

describe("hasKeys", () => {
	it("has", () => {
		const input: Partial<{ test: string }> = {
			test: "ok",
		};

		const output = DObject.hasKeys(
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

		const output = DObject.hasKeys(
			input,
			["test"],
		);

		expect(output).toEqual(false);
	});
});
