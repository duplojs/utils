import { C, DPE, type ExpectType } from "@scripts";

const UserId = C.createNewType("userId", DPE.number());
const User = C.createEntity("User", () => ({
	id: UserId,
}));

type UserMaybe = C.Maybe<
	C.GetEntity<typeof User>
>;

const availableUser = User.new({
	id: UserId.createOrThrow(1 as number),
});

const foundUser: UserMaybe = C.some(availableUser);
const missingUser: UserMaybe = C.none("User");

type checkFound = ExpectType<
	typeof foundUser,
	C.Some<typeof availableUser>,
	"strict"
>;

type checkMissing = ExpectType<
	typeof missingUser,
	C.None<"User">,
	"strict"
>;
