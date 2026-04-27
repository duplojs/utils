import { type ExpectType, C, DP } from "@duplojs/utils";

const Count = C.createNewType("count", DP.number(), C.PositiveInt);

const count = Count.createOrThrow(0);

type check = ExpectType<
	typeof count,
	C.NewType<"count", 0, "positive" | "int">,
	"strict"
>;
