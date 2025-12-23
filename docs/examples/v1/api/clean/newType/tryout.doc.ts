import { C, DP } from "@duplojs/utils";

const UserId = C.createNewType(
	"userId",
	DP.number(),
	C.Positive,
);

type UserId = C.GetNewType<typeof UserId>;
