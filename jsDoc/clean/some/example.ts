import { C, DPE, pipe, type ExpectType } from "@scripts";

const UserId = C.createNewType("userId", DPE.number());
const User = C.createEntity("User", () => ({
	id: UserId,
}));

const firstUser = User.new({
	id: UserId.createOrThrow(1),
});
const firstMaybe = C.some(firstUser);
// firstMaybe: C.Some<typeof firstUser>

const secondUser = User.new({
	id: UserId.createOrThrow(2),
});
const secondMaybe = C.some(secondUser);
// secondMaybe: C.Some<typeof secondUser>

const pipedMaybe = pipe(
	firstUser,
	C.some,
);

type check = ExpectType<
	typeof pipedMaybe,
	C.Some<typeof firstUser>,
	"strict"
>;
