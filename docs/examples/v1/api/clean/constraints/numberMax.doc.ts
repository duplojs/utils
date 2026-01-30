import { type ExpectType, C, DP } from "@duplojs/utils";

const Percent = C.createNewType("percent", DP.number(), C.NumberMax(100));

const value = Percent.createOrThrow(100);

type check = ExpectType<
	typeof value,
	C.NewType<"percent", 100, "number-max-100">,
	"strict"
>;
