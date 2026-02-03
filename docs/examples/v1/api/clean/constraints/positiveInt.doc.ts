import { type ExpectType, C, DP } from "@duplojs/utils";

const Score = C.createNewType("score", DP.number(), C.PositiveInt);

const score = Score.createOrThrow(42);

type check = ExpectType<
	typeof score,
	C.NewType<"score", 42, "positive-int">,
	"strict"
>;
