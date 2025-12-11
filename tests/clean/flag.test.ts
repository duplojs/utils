import { DPE, type Kind, type ExpectType, type KindDefinition, DClean } from "@scripts";

describe("createFlag", () => {
	const Id = DClean.createNewType("id", DPE.number());

	const UserEntity = DClean.createEntity("User", () => ({
		id: Id,
	}));

	type User = DClean.GetEntity<typeof UserEntity>;

	const baseUser = UserEntity.new({
		id: Id.createOrThrow(1),
	});

	it("creates a handler with the provided name", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", boolean>("isAdmin");
		expect(isAdmin.name).toBe("isAdmin");
	});

	it("appends flags and merges existing flag data", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", boolean>("isAdmin");
		const beta = DClean.createFlag<User, "beta", string>("beta");
		const marker = DClean.createFlag<User, "marker">("marker");

		const withAdmin = isAdmin.append(baseUser, true);
		expect(DClean.flagKind.getValue(withAdmin)).toEqual({ isAdmin: true });
		expect(isAdmin.getValue(withAdmin)).toStrictEqual(true);

		type Check1 = ExpectType<
			typeof withAdmin,
			(
				& DClean.Entity<"User">
				& {
					id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", true>
			),
			"strict"
		>;

		const withBeta = beta.append(withAdmin, "on");
		expect(DClean.flagKind.getValue(withBeta)).toEqual({
			isAdmin: true,
			beta: "on",
		});
		expect(beta.getValue(withBeta)).toStrictEqual("on");

		type Check2 = ExpectType<
			typeof withBeta,
			(
				& DClean.Entity<"User">
				& {
					id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", true>
				& DClean.Flag<"beta", "on">
			),
			"strict"
		>;

		const withMarker = marker.append(withBeta);
		expect(DClean.flagKind.getValue(withMarker)).toEqual({
			isAdmin: true,
			beta: "on",
			marker: undefined,
		});
		expect(marker.getValue(withMarker)).toStrictEqual(undefined);

		type Check3 = ExpectType<
			typeof withMarker,
			(
				& DClean.Entity<"User">
				& {
					id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", true>
				& DClean.Flag<"beta", "on">
				& DClean.Flag<"marker", never>
			),
			"strict"
		>;

		expect(withMarker.id).toStrictEqual(Id.createOrThrow(1));
		expect(DClean.flagKind.has(withMarker)).toBe(true);
	});
});
