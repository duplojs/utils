import { type ExpectType, C, DP } from "@duplojs/utils";

const Balance = C.createNewType("balance", DP.number(), C.NegativeInt);

const balance = Balance.createOrThrow(0);

type check = ExpectType<
	typeof balance,
	C.NewType<"balance", 0, "negative" | "int">,
	"strict"
>;
