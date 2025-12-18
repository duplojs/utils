import { type ExpectType, C, DP } from "@duplojs/utils";

const Age = C.createNewType("age", DP.number(), C.Positive);

const age = Age.createOrThrow(30);

type check = ExpectType<
	typeof age,
	C.NewType<"age", 30, "positive">,
	"strict"
>;
