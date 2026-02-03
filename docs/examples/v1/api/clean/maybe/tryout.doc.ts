import { C, DP, type ExpectType } from "@duplojs/utils";

const UserId = C.createNewType("userId", DP.number(), C.PositiveInt);
const User = C.createEntity("User", () => ({
	id: UserId,
}));

type UserMaybe = C.Maybe<
	C.GetEntity<typeof User>
>;

const existingUser = User.new({
	id: UserId.createWithUnknownOrThrow(1),
});

const foundUser: UserMaybe = C.some(existingUser);
const missingUser: UserMaybe = C.none("User");

type checkFound = ExpectType<
	typeof foundUser,
	C.Some<typeof existingUser>,
	"strict"
>;

type checkMissing = ExpectType<
	typeof missingUser,
	C.None<"User">,
	"strict"
>;
