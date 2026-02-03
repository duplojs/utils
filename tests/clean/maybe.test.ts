import { DClean, DEither, DPE, pipe, type ExpectType } from "@scripts";

describe("maybe", () => {
	const Id = DClean.createNewType("id", DPE.number());

	const User = DClean.createEntity("User", () => ({
		id: Id,
	}));

	it("Some creates a right maybe with information based on entity name", () => {
		const user = User.new({
			id: Id.createOrThrow(1),
		});

		const result = DClean.some(user);

		expect(result).toStrictEqual(DEither.right("some-User", user));

		type check = ExpectType<
			typeof result,
			DClean.Some<typeof user>,
			"strict"
		>;
	});

	it("Some works with pipe", () => {
		const user = User.new({
			id: Id.createOrThrow(2),
		});

		const result = pipe(
			user,
			DClean.some,
		);

		expect(result).toStrictEqual(DEither.right("some-User", user));

		type check = ExpectType<
			typeof result,
			DClean.Some<typeof user>,
			"strict"
		>;
	});

	it("None creates a left maybe with null value", () => {
		const result = DClean.none("User");

		expect(result).toStrictEqual(DEither.left("none-User", null));

		type check = ExpectType<
			typeof result,
			DClean.None<"User">,
			"strict"
		>;
	});

	it("None works with pipe", () => {
		const result = pipe(
			"User",
			DClean.none,
		);

		expect(result).toStrictEqual(DEither.left("none-User", null));

		type check = ExpectType<
			typeof result,
			DClean.None<"User">,
			"strict"
		>;
	});
});
