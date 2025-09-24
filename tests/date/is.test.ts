import { DDate, type ExpectType } from "@scripts/index";

describe("is", () => {
	it("should validate the type predicate", () => {
		const value = DDate.create("2023-12-25T14:30:45.123Z");

		const result = DDate.is(value);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				DDate.NewDate<"2023-12-25T14:30:45.123Z">,
				"strict"
			>;
		}
	});
});
