import { type ExpectType, C, DP } from "@duplojs/utils";

const Delta = C.createNewType("delta", DP.number(), C.StrictNegative);

const delta = Delta.createOrThrow(-1);

type check = ExpectType<
	typeof delta,
	C.NewType<"delta", -1, "strict-negative">,
	"strict"
>;
