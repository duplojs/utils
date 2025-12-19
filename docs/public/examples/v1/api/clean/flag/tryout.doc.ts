import { type ExpectType, C, DP, E, pipe } from "@duplojs/utils";

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

type check = ExpectType<
	typeof result,
	E.EitherLeft<"not-major", undefined>
	| E.EitherRight<"not-thirsty-anymore", undefined>,
	"strict"
>;

// @ts-expect-error - not major
void drinkAlcohol(user);
