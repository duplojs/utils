import { DClean, DPE, type ExpectType, DDate, unwrap, type toNative, toJSON } from "@scripts";

describe("unwrapEntity", () => {
	const Id = DClean.createNewType("id", DPE.number());
	const Tag = DClean.createNewType("tag", DPE.string());
	const Profile = DClean.createNewType(
		"profile",
		DPE.object({
			name: DPE.string(),
		}),
	);
	const Hours = DClean.createNewType(
		"hour",
		DPE.time(),
	);

	const UserEntity = DClean.createEntity("User", ({ array }) => ({
		id: Id,
		tags: array(Tag),
		profile: Profile,
		hours: Hours,
	}));

	type User = DClean.GetEntity<typeof UserEntity>;

	type Check = ExpectType<
		DClean.UnwrapEntity<User>,
		{
			readonly id: number;
			readonly profile: {
				readonly name: string;
			};
			readonly hours: DDate.TheTime;
			readonly tags: readonly string[];
			readonly _entityName: "User";
		},
		"strict"
	>;

	type CheckTransformer = ExpectType<
		DClean.UnwrapEntity<User, typeof toNative>,
		{
			readonly id: number;
			readonly profile: {
				readonly name: string;
			};
			readonly hours: number;
			readonly tags: readonly string[];
			readonly _entityName: "User";
		},
		"strict"
	>;

	const baseUser = UserEntity.new({
		id: Id.createOrThrow(1),
		tags: [Tag.createOrThrow("superTag")],
		profile: Profile.createOrThrow({
			name: "Ada",
		}),
		hours: Hours.createOrThrow(DDate.createTime(10, "hour")),
	});

	it("unwraps properties and adds entity metadata", () => {
		const unwrapped = DClean.unwrapEntity(baseUser);

		expect(unwrapped).toStrictEqual({
			id: 1,
			tags: ["superTag"],
			profile: {
				name: "Ada",
			},
			hours: unwrap(baseUser.hours),
			_entityName: "User",
		});

		type Check = ExpectType<
			typeof unwrapped,
			{
				readonly id: 1;
				readonly profile: {
					readonly name: "Ada";
				};
				readonly hours: DDate.TheTime;
				readonly tags: readonly ["superTag"];
				readonly _entityName: "User";
			},
			"strict"
		>;
	});

	it("includes flags when present", () => {
		const isAdmin = DClean.createFlag<User, "isAdmin", boolean>("isAdmin");

		const flagged = isAdmin.append(baseUser, true);
		const unwrapped = DClean.unwrapEntity(flagged);

		expect(unwrapped).toStrictEqual({
			id: 1,
			tags: ["superTag"],
			profile: {
				name: "Ada",
			},
			_entityName: "User",
			hours: unwrap(baseUser.hours),
			_flags: {
				isAdmin: true,
			},
		});

		type Check = ExpectType<
			typeof unwrapped,
			{
				readonly id: 1;
				readonly tags: readonly ["superTag"];
				readonly profile: {
					readonly name: "Ada";
				};
				readonly hours: DDate.TheTime;
				readonly _entityName: "User";
				readonly _flags: {
					readonly isAdmin: true;
				};
			},
			"strict"
		>;
	});

	it("unwrap with transformer", () => {
		const unwrapped = DClean.unwrapEntity(baseUser, { transformer: toJSON });

		expect(unwrapped).toStrictEqual({
			id: 1,
			tags: ["superTag"],
			profile: {
				name: "Ada",
			},
			hours: unwrap(baseUser.hours).toJSON(),
			_entityName: "User",
		});

		type Check = ExpectType<
			typeof unwrapped,
			{
				readonly id: 1;
				readonly profile: {
					readonly name: "Ada";
				};
				readonly hours: DDate.SerializedTheTime;
				readonly tags: readonly ["superTag"];
				readonly _entityName: "User";
			},
			"strict"
		>;
	});
});
