import { createEnum } from "@scripts/common/enum";
import { type ExpectType } from "@scripts/common/types/expectType";

describe("enum", () => {
	const myEnum = createEnum([
		"value1",
		"value2",
		"value3",
	]);

	it("valid structure", () => {
		expect(myEnum).toStrictEqual({
			value1: "value1",
			value2: "value2",
			value3: "value3",
			has: myEnum.has,
			toTuple: myEnum.toTuple,
		});
	});

	it("has", () => {
		const value = "value1" as string;

		const isEnumValue = myEnum.has(value);

		if (isEnumValue) {
			type check = ExpectType<
				typeof value,
				"value1" | "value2" | "value3",
				"strict"
			>;
		}

		expect(isEnumValue).toBe(true);

		expect(myEnum.has("value4")).toBe(false);
	});

	it("toTuple", () => {
		expect(myEnum.toTuple()).toStrictEqual([
			"value1",
			"value2",
			"value3",
		]);
	});
});
