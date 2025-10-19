import { createKind, keyKindPrefix, type KindDefinition, type Kind, type ExpectType } from "@scripts";

describe("theKind", () => {
	const myKind = createKind("testKind");

	it("runTimeKey", () => {
		expect(myKind.runTimeKey).toBe(`${keyKindPrefix}testKind`);
	});

	it("definition", () => {
		expect(myKind.definition).toBe(undefined);

		type Check = ExpectType<
			typeof myKind.definition,
			KindDefinition<"testKind">,
			"strict"
		>;
	});

	it("addTo", () => {
		const newObject = myKind.addTo({ test: "" });

		expect(newObject).toStrictEqual({
			test: "",
			[`${keyKindPrefix}testKind`]: null,
		});

		type Check = ExpectType<
			typeof newObject,
			{ test: string } & Kind<typeof myKind.definition>,
			"strict"
		>;
	});

	it("setTo", () => {
		const input = { test: "" };
		const newObject = myKind.setTo(input);

		expect(newObject).toBe(input);
		expect(newObject).toStrictEqual({
			test: "",
			[`${keyKindPrefix}testKind`]: null,
		});

		type Check = ExpectType<
			typeof newObject,
			{ test: string } & Kind<typeof myKind.definition>,
			"strict"
		>;
	});

	it("has", () => {
		expect(myKind.has({ test: "" })).toBe(false);

		const newObject = myKind.addTo({ test: "" }) as ({ test: string } & Kind<typeof myKind.definition>) | string;

		const predicate = myKind.has(newObject);

		expect(predicate).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof newObject,
				{ test: string } & Kind<typeof myKind.definition>,
				"strict"
			>;
		}
	});

	it("getValue", () => {
		expect(myKind.getValue(myKind.addTo({ test: "" }, "testValue"))).toBe("testValue");
	});
});
