import { DPE, type ExpectType, DClean, pipe } from "@scripts";

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
		const isAdmin = DClean.createFlag<User, "isAdmin", { value: boolean }>("isAdmin");

		type check = ExpectType<
			DClean.GetFlag<typeof isAdmin>,
			DClean.Flag<"isAdmin", { value: boolean }>,
			"strict"
		>;

		expect(isAdmin.name).toBe("isAdmin");
	});

	it("appends flags and merges existing flag data", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", { value: boolean }>("isAdmin");
		const beta = DClean.createFlag<User, "beta", { value: string }>("beta");
		const marker = DClean.createFlag<User, "marker">("marker");

		const withAdmin = isAdmin.append(baseUser, { value: true });
		expect(DClean.flagKind.getValue(withAdmin)).toEqual({ isAdmin: { value: true } });
		expect(isAdmin.getValue(withAdmin)).toStrictEqual({ value: true });

		type Check1 = ExpectType<
			typeof withAdmin,
			(
				& DClean.Entity<"User">
				& {
					readonly id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", { readonly value: true }>
			),
			"strict"
		>;

		const withBeta = beta.append(withAdmin, { value: "on" });
		expect(DClean.flagKind.getValue(withBeta)).toEqual({
			isAdmin: { value: true },
			beta: { value: "on" },
		});
		expect(beta.getValue(withBeta)).toStrictEqual({ value: "on" });

		type Check2 = ExpectType<
			typeof withBeta,
			(
				& DClean.Entity<"User">
				& {
					readonly id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", { readonly value: true }>
				& DClean.Flag<"beta", { readonly value: "on" }>
			),
			"strict"
		>;

		const withMarker = marker.append(withBeta);
		expect(DClean.flagKind.getValue(withMarker)).toEqual({
			isAdmin: { value: true },
			beta: { value: "on" },
			marker: undefined,
		});
		expect(marker.getValue(withMarker)).toStrictEqual(undefined);

		type Check3 = ExpectType<
			typeof withMarker,
			(
				& DClean.Entity<"User">
				& {
					readonly id: DClean.NewType<"id", 1, never>;
				}
				& DClean.Flag<"isAdmin", { readonly value: true }>
				& DClean.Flag<"beta", { readonly value: "on" }>
				& DClean.Flag<"marker", never>
			),
			"strict"
		>;

		expect(withMarker.id).toStrictEqual(Id.createOrThrow(1));
		expect(DClean.flagKind.has(withMarker)).toBe(true);
	});

	it("checks if a flag is present on the entity", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", { value: boolean }>("isAdmin");
		const marker = DClean.createFlag<User, "marker">("marker");

		expect(isAdmin.has(baseUser)).toBe(false);
		expect(marker.has(baseUser)).toBe(false);

		const withAdmin = isAdmin.append(baseUser, { value: true });

		if (isAdmin.has(withAdmin)) {
			type check = ExpectType<
				typeof withAdmin,
				DClean.Entity<"User"> & {
					readonly id: DClean.NewType<"id", 1, never>;
				} & DClean.Flag<"isAdmin", { readonly value: true }>,
				"strict"
			>;
		}

		expect(isAdmin.has(withAdmin)).toBe(true);

		const withMarker = marker.append(baseUser);
		expect(marker.has(withMarker)).toBe(true);
	});

	it("append in pipe", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", { value: boolean }>("isAdmin");
		const marker = DClean.createFlag<User, "marker">("marker");

		const entityIsAdmin = pipe(
			baseUser,
			isAdmin.append({ value: false }),
		);

		type check = ExpectType<
			typeof entityIsAdmin,
			DClean.Entity<"User"> & {
				readonly id: DClean.NewType<"id", 1, never>;
			} & DClean.Flag<"isAdmin", {
				readonly value: false;
			}>,
			"strict"
		>;

		const entityWithMarker = pipe(
			baseUser,
			marker.append,
		);

		type check1 = ExpectType<
			typeof entityWithMarker,
			DClean.Entity<"User"> & {
				readonly id: DClean.NewType<"id", number, never>;
			} & DClean.Flag<"marker", never>,
			"strict"
		>;
	});
});
