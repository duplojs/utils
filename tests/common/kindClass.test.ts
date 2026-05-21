import { createKind, keyKindPrefix, kindClass, pipe, type ExpectType } from "@scripts";

describe("kindClass", () => {
	it("creates a class from a string kind name", () => {
		class NamedKind extends kindClass("named-kind") {}

		const instance = new NamedKind("value");

		expect(instance).toBeInstanceOf(NamedKind);
		expect({ ...instance }).toStrictEqual({
			[`${keyKindPrefix}named-kind`]: "value",
		});
	});

	it("forwards constructor parameters to the parent class", () => {
		const errorKind = createKind<"error-kind", "failure">("error-kind");

		class CustomError extends kindClass(errorKind, Error) {
			public constructor(kindValue: "failure", message: string) {
				super(kindValue, message);
			}
		}

		const error = new CustomError("failure", "boom");

		expect(error).toBeInstanceOf(CustomError);
		expect(error).toBeInstanceOf(Error);
		expect(error.message).toBe("boom");
		expect({ ...error }).toStrictEqual({
			[`${keyKindPrefix}error-kind`]: "failure",
		});
	});

	it("uses the kind handler for instanceof checks", () => {
		const userKind = createKind<"user-kind", { role: "admin" }>("user-kind");

		class UserEntity extends kindClass(userKind) {}

		const taggedObject = userKind.addTo(
			{ id: 1 },
			{ role: "admin" },
		);

		expect(taggedObject instanceof UserEntity).toBe(true);
		expect({ id: 1 } instanceof UserEntity).toBe(false);
	});

	it("preserves specialized generic parent instance and constructor types", () => {
		const entityKind = createKind<"entity-kind", "ready">("entity-kind");

		class Parent<
			GenericName extends string,
		> {
			public constructor(
				public readonly name: GenericName,
				public readonly enabled: boolean,
			) {}
		}

		class KindedEntity<
			GenericName extends string,
		> extends kindClass(entityKind, Parent)<Parent<GenericName>> {
			public constructor(name: GenericName) {
				super("ready", name, true);
			}
		}

		const instance = new KindedEntity(
			"user",
		);

		expect(instance).toBeInstanceOf(KindedEntity);
		expect(instance.name).toBe("user");
		expect(instance.enabled).toBe(true);
		expect({ ...instance }).toStrictEqual({
			name: "user",
			enabled: true,
			[`${keyKindPrefix}entity-kind`]: "ready",
		});

		type Check2 = ExpectType<
			typeof instance.name,
			"user",
			"strict"
		>;

		type Check3 = ExpectType<
			typeof instance.enabled,
			boolean,
			"strict"
		>;
	});
});
