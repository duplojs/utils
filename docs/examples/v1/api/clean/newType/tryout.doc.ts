import { C, DP, type ExpectType } from "@duplojs/utils";

const UserId = C.createNewType(
	"userId",
	DP.number(),
	C.Positive,
);

type UserId = C.GetNewType<typeof UserId>;

const userId = UserId.createOrThrow(42);

type CheckUserId = ExpectType<
	typeof userId,
	C.NewType<"userId", 42, "positive">,
	"strict"
>;

const UserName = C.createNewType(
	"userName",
	C.String,
	C.StringMin(2),
);

type UserName = C.GetNewType<typeof UserName>;

const userName = UserName.createOrThrow("Ada");

type CheckUserName = ExpectType<
	typeof userName,
	C.NewType<"userName", "Ada", "string-min-2">,
	"strict"
>;
