import { type ExpectType, C, DP } from "@duplojs/utils";

const UserId = C.createNewType("userId", DP.number(), C.Positive);

type UserId = C.GetNewType<typeof UserId>;

const userId: UserId = UserId.createOrThrow(42);
const maybe: UserId | C.String = userId;

if (UserId.is(maybe)) {
	type check = ExpectType<typeof maybe, UserId, "strict">;
}
