import { type ExpectType, C, DP } from "@duplojs/utils";

const Username = C.createNewType("username", DP.string(), C.StringMin(3));

const username = Username.createOrThrow("Ada");

type check = ExpectType<
	typeof username,
	C.NewType<"username", "Ada", "string-min-3">,
	"strict"
>;
