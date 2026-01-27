import { C, DP, E, pipe } from "@scripts";

namespace User {
	export const Name = C.createNewType("UserName", DP.string());
	export type Name = C.GetNewType<typeof Name>;

	export const Age = C.createNewType("UserAge", DP.number(), C.Positive);
	export type Age = C.GetNewType<typeof Age>;

	export const Entity = C.createEntity("UserEntity", () => ({
		name: Name,
		age: Age,
	}));
	export type Entity = C.GetEntity<typeof Entity>;

	export const MajorFlag = C.createFlag<
		Entity, // mandatory
		"majorUser", // mandatory
		Age // optional
	>("majorUser");
	export type MajorFlag = C.GetFlag<typeof MajorFlag>;

	export function isMajor(entity: Entity) {
		if (C.greaterThan(entity.age, 18)) {
			return E.success(
				MajorFlag.append(entity, entity.age),
			);
		}
		return E.left("not-major");
	}
}

function drinkAlcohol(userEntity: User.Entity & User.MajorFlag) {
	// ...
	return E.right("not-thirsty-anymore");
}

const user = User.Entity.new({
	name: User.Name.createOrThrow("Julie"),
	age: User.Age.createOrThrow(35),
});

const result = pipe(
	user,
	User.isMajor,
	E.whenIsRight(
		drinkAlcohol,
	),
);
// E.Left<"not-major", undefined> | E.Right<"not-thirsty-anymore", undefined>

const flagged = User.MajorFlag.append(user, user.age);
const value = User.MajorFlag.getValue(flagged);
