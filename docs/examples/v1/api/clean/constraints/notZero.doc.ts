import { type ExpectType, C, DP } from "@duplojs/utils";

const Divisor = C.createNewType("divisor", DP.number(), C.NotZero);

const divisor = Divisor.createOrThrow(2);

type check = ExpectType<
	typeof divisor,
	C.NewType<"divisor", 2, "not-zero">,
	"strict"
>;
