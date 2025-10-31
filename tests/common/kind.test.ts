import { createKind, keyKindPrefix, type KindDefinition, type Kind, type ExpectType, kindHeritage, type SimplifyTopLevel, createKindNamespace, isRuntimeKind } from "@scripts";

describe("theKind", () => {
	const myKind = createKind("testKind");

	it("runTimeKey", () => {
		expect(myKind.runTimeKey).toBe(`${keyKindPrefix}testKind`);
	});

	it("definition", () => {
		expect(myKind.definition).toStrictEqual({
			name: "testKind",
			value: null,
		});

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

	it("kindHeritage", () => {
		class TestClass extends kindHeritage("test", myKind) {
			public test = "toto";
		}
		const otherKind = createKind<"require", string>("require");
		class TestClass2 extends kindHeritage("test", [myKind, otherKind], Error) {
			public test = 13;
		}

		class CloneTestClass2 extends kindHeritage("test", [myKind, otherKind]) {
			public test = 13;
		}

		class SubTestClass2 extends kindHeritage("test1", [], TestClass2) {
		}

		expect((new TestClass()) instanceof TestClass2).toBe(false);
		expect((new TestClass2({ require: "test" }, ["test"])) instanceof TestClass2).toBe(true);
		expect((new TestClass2({ require: "test" }, ["test"])) instanceof Error).toBe(true);
		expect((new TestClass2({ require: "test" }, ["test"])) instanceof CloneTestClass2).toBe(true);
		expect((new SubTestClass2({}, [{ require: "test" }, ["test"]])) instanceof CloneTestClass2).toBe(true);
		expect((new SubTestClass2({}, [{ require: "test" }, ["test"]])) instanceof String).toBe(false);
		expect((new Error()) instanceof TestClass).toBe(false);

		expect((new TestClass2({ require: "test" }, ["test"]) as any)[otherKind.runTimeKey]).toBe("test");
		expect(myKind.has(new TestClass())).toBe(true);

		type Check = ExpectType<
			TestClass,
			SimplifyTopLevel<
				& Kind<typeof myKind["definition"]>
				& Kind<KindDefinition<"test", unknown>>
				& {
					test: string;
				}
			>,
			"strict"
		>;

		type Check1 = ExpectType<
			ConstructorParameters<ReturnType<typeof kindHeritage<"", typeof myKind>>>,
			[params?: { testKind?: unknown }],
			"strict"
		>;

		type Check3 = ExpectType<
			ConstructorParameters<ReturnType<typeof kindHeritage<"", typeof myKind | typeof otherKind>>>,
			[
				params: {
					testKind?: unknown;
					require: string;
				},
				parentParams?: unknown[],
			],
			"strict"
		>;
	});

	it("createKindNamespace", () => {
		const userNamespace = createKindNamespace("user");
		const userEmailKind = userNamespace("email");
		const userNameKind = userNamespace("name");

		const person = { id: 123 };
		const personWithEmail = userEmailKind.addTo(person, "user@example.com");
		const personComplete = userNameKind.addTo(personWithEmail, "John Doe");

		expect(personComplete).toStrictEqual({
			id: 123,
			[`${keyKindPrefix}@user/email`]: "user@example.com",
			[`${keyKindPrefix}@user/name`]: "John Doe",
		});

		expect(userEmailKind.getValue(personComplete)).toBe("user@example.com");
		expect(userNameKind.getValue(personComplete)).toBe("John Doe");

		type Chec1 = ExpectType<
			typeof userEmailKind.definition,
			KindDefinition<"@user/email">,
			"strict"
		>;

		type Check2 = ExpectType<
			typeof userNameKind.definition,
			KindDefinition<"@user/name">,
			"strict"
		>;
	});

	it("isRuntimeKind", () => {
		expect(isRuntimeKind(createKind("").runTimeKey)).toBe(true);
		expect(isRuntimeKind("")).toBe(false);
	});
});
