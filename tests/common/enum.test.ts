import { createEnum, pipe, type ExpectType, type GetEnumValue } from "@scripts";

describe("enum", () => {
	const myEnum = createEnum([
		"value1",
		"value2",
		"value3",
	]);

	it("returns the expected enum structure including helper methods", () => {
		expect(myEnum).toStrictEqual({
			value1: "value1",
			value2: "value2",
			value3: "value3",
			contract: myEnum.contract,
			has: myEnum.has,
			toTuple: myEnum.toTuple,
		});
	});

	it("narrows values with has", () => {
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

	it("returns the original tuple with toTuple", () => {
		expect(myEnum.toTuple()).toStrictEqual([
			"value1",
			"value2",
			"value3",
		]);
	});

	it("returns a compatible enum with contract", () => {
		const result = myEnum.contract<
			"value1" | "value2" | "value3"
		>();

		expect(result).toStrictEqual({
			value1: "value1",
			value2: "value2",
			value3: "value3",
			contract: result.contract,
			has: result.has,
			toTuple: result.toTuple,
		});
		expect(result).not.toBe(myEnum);

		type check = ExpectType<
			typeof result,
			typeof myEnum,
			"strict"
		>;
	});

	it("returns enum values with GetEnumValue", () => {
		type result = GetEnumValue<typeof myEnum>;

		expectTypeOf<result>().toEqualTypeOf<
			"value1" | "value2" | "value3"
		>();
	});

	it("rejects incomplete contracts at type level", () => {
		const incompleteEnum = createEnum([
			"value1",
			"value2",
		]);

		incompleteEnum.contract<
			// @ts-expect-error missing enum values in the contract
			GetEnumValue<typeof myEnum>
		>();

		expectTypeOf(myEnum.value1).toBeString();
	});

	it("rejects duplicated enum values at type level", () => {
		const duplicatedEnum = createEnum([
			"value1",
			"value2",
			"value2",
		]);
		// @ts-expect-error duplicated values require a failing contract
		duplicatedEnum.contract<
			"value1" | "value2"
		>();

		expectTypeOf(duplicatedEnum.value2).toBeString();
	});
});
