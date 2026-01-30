import { type ExpectType, C, DP } from "@duplojs/utils";

const AdultAge = C.createNewType("adult-age", DP.number(), C.NumberMin(18));

const age = AdultAge.createOrThrow(18);

type check = ExpectType<
	typeof age,
	C.NewType<"adult-age", 18, "number-min-18">,
	"strict"
>;
