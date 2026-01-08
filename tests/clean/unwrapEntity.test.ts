import { DClean, DPE, type ExpectType } from "@scripts";

describe("unwrapEntity", () => {
	const Id = DClean.createNewType("id", DPE.number());
	const Tag = DClean.createNewType("tag", DPE.string());
	const Profile = DClean.createNewType(
		"profile",
		DPE.object({
			name: DPE.string(),
		}),
	);

	const UserEntity = DClean.createEntity("User", ({ array }) => ({
		id: Id,
		tags: array(Tag),
		profile: Profile,
	}));

	type User = DClean.GetEntity<typeof UserEntity>;

	type Check = ExpectType<
		DClean.UnwrapEntity<User>,
		{
			readonly id: number;
			readonly profile: {
				readonly name: string;
			};
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
	});

	it("unwraps properties and adds entity metadata", () => {
		const unwrapped = DClean.unwrapEntity(baseUser);

		expect(unwrapped).toStrictEqual({
			id: 1,
			tags: ["superTag"],
			profile: {
				name: "Ada",
			},
			_entityName: "User",
		});

		type Check = ExpectType<
			typeof unwrapped,
			{
				readonly id: 1;
				readonly profile: {
					readonly name: "Ada";
				};
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
				readonly _entityName: "User";
				readonly _flags: {
					readonly isAdmin: true;
				};
			},
			"strict"
		>;
	});
});
